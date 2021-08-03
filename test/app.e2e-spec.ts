import 'dotenv/config';
import { INestApplication, HttpStatus } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Connection } from 'mongoose';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { DatabaseService } from '../src/database/database.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let dbConnection: Connection;
  let httpServer: any;
  let userAccessToken: string;
  let channelId: string;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
    dbConnection = moduleRef
      .get<DatabaseService>(DatabaseService)
      .getDbHandle();
    httpServer = app.getHttpServer();
  });

  afterAll(async () => {
    await dbConnection.collection('users').deleteMany({});
    await dbConnection.collection('channels').deleteMany({});
    await dbConnection.collection('messages').deleteMany({});
    await app.close();
  });

  describe('/api/ping (GET)', () => {
    it('should return ping', async () => {
      return request(httpServer).get('/ping').expect(HttpStatus.OK);
    });
  });

  describe('/api/auth/signup (POST)', () => {
    it('Sould create user & return access token', async () => {
      const user = { name: 'user1', username: 'user1', password: 'P@ssw0rd' };
      return request(httpServer)
        .post('/auth/signup')
        .send(user)
        .expect(({ body }) => {
          expect(body.accessToken).toBeDefined();
        })
        .expect(HttpStatus.CREATED);
    });
  });

  describe('/api/auth/signin (POST)', () => {
    it('Sould authenticate user & return access token', async () => {
      const authCredentials = { username: 'user1', password: 'P@ssw0rd' };
      const response = await request(httpServer)
        .post('/auth/signin')
        .send(authCredentials);
      const accessToken = response.body.accessToken;
      userAccessToken = accessToken;
      expect(response.body.accessToken).toBeDefined();
      expect(response.status).toBe(HttpStatus.CREATED);
    });
  });

  describe('/api/channel/create (POST)', () => {
    it('Sould return unauthorized', async () => {
      return request(httpServer)
        .post('/channel/create')
        .expect(HttpStatus.UNAUTHORIZED);
    });
  });

  describe('/api/channel/create (POST)', () => {
    const channel = { name: 'General' };
    it('Sould create channel by name', async () => {
      const response = await request(httpServer)
        .post('/channel/create')
        .send(channel)
        .set('Accept', 'application/json')
        .set('Authorization', userAccessToken);
      channelId = response.body._id;
      expect(response.status).toBe(HttpStatus.CREATED);
    });
  });

  describe('/api/message/create (POST)', () => {
    const message = { message: 'This is my first message', channel: channelId };
    it('Sould create message', async () => {
      return request(httpServer)
        .post('/message/create')
        .set('Accept', 'application/json')
        .set('Authorization', userAccessToken)
        .send(message)
        .expect(({ body }) => {
          expect(body.message).toBeDefined();
          expect(body.message).toEqual(message.message);
        })
        .expect(HttpStatus.CREATED);
    });
  });
});
