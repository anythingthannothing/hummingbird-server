import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { CustomHttpException } from '../../shared/exceptions';

@Catch()
export class UncaughtExceptionFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    if (exception instanceof CustomHttpException) {
      throw exception;
    }

    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Internal server error',
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);

    // TODO: Handling Uncaught error
    console.log(exception);
  }
}
