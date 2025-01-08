import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.MONGO_HOST,
  username: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  port: process.env.MONGO_PORT,
  database: process.env.MONGO_DATABASE,
}));
