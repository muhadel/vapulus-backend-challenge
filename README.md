#### Table of contents
1. [Overview](#vapulus-backend-challenge)
    - [Dependencies](#dependencies)
2. [Repo structure](#repo-structure)
3. [How to Install](#how-to-install)
4. [Running the app](#running-the-app)
5. [E2E tests](#e2e-tests)
6. [Swagger Documentation](#swagger-documentation)
7. 
## Vapulus Backend Challenge



chat application that enables the customers to sign up, login, and join a general chat room, send messages, show previous messages of the chat.


## Dependencies

| Dependencies  | Version         | 
| :------------ |:---------------:| 
| Node.js      | >= 12.13.1       |
| Typescript      | >= 4.3.5      |
| MongoDB      | >= 4.2.1         | 
| @nestjs/cli | >= 8.0.0          |


## Repo structure:
```
- src/
   - config/
   - shared/
   - types/
   - utilities/
   - auth/
   - channel/
   - message/
   - database/
```


## Installation

```bash
$ npm install
$ mv .env.example .env
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Swagger Documentation

You can access Swagger documentation via [http://localhost:5000/api/](http://localhost:5000/api/)

![screencapture-localhost-5000-api-2021-08-03-04_25_37](https://user-images.githubusercontent.com/32979588/127943233-073e733f-ca4b-43ef-aa01-69c648c2a8d0.png)

