import { HttpStatus } from '@nestjs/common';

import { CustomHttpException } from '../custom-http-exception';

export const throwNotFoundException = (
  message: string,
  code: string,
  infos?: Record<string, any>,
): never => {
  throw new CustomHttpException(message, HttpStatus.NOT_FOUND, code, infos);
};
