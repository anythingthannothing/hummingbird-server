import { registerAs } from '@nestjs/config';

export default registerAs('serverEnv', () => ({
  env: process.env.NODE_ENV,
  port: +(process.env.PORT as string),
}));
