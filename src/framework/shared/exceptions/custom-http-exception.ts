import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor(
    message: string,
    statusCode: HttpStatus,
    public readonly code: string,
    public readonly infos: Record<string, any> | null = null,
  ) {
    super(message, statusCode);
    this.code = code;
  }
}
