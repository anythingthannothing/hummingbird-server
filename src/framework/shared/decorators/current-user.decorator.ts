import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { authConst } from '../../../core/lib';

export const CurrentUser = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request[authConst.USER_KEY];
  },
);