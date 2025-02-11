import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  PORT: Joi.number().integer().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN_SECONDS: Joi.number().required(),
  REFRESH_TOKEN_LENGTH: Joi.number().required(),
  REFRESH_EXPIRES_IN_DAYS: Joi.number().required(),
  MYSQL_HOST: Joi.string().required(),
  MYSQL_PORT: Joi.number().required(),
  MYSQL_USER: Joi.string().required(),
  MYSQL_PASSWORD: Joi.string().required(),
  MYSQL_DATABASE: Joi.string().required(),
  MYSQL_POOL_SIZE: Joi.number().required(),
  MONGO_HOST: Joi.string().required(),
  MONGO_USERNAME: Joi.string().required(),
  MONGO_PASSWORD: Joi.string().required(),
  MONGO_PORT: Joi.number().required(),
  MONGO_DATABASE: Joi.string().required(),
  MONGO_CONNECTION_STRING: Joi.string().required(),
});
