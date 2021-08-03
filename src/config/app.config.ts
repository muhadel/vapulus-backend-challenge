export const config = {
  //Server ENV
  env: process.env.NODE_ENV || 'development',
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.NODE_PORT || 5000,
  // Password ENV
  salt: parseInt(process.env.SALT_ROUNDS) || 10,
  // Database ENV
  mongodb: {
    uri: process.env.MONGO_URI,
    mongooseOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
};
