import { HttpStatus } from '@nestjs/common';

import { CustomHttpException } from '../custom-http-exception';

export const throwBadRequestException = (
  message: string,
  code: string,
  infos?: Record<string, any>,
): never => {
  throw new CustomHttpException(message, HttpStatus.BAD_REQUEST, code, infos);
};
