import { SetMetadata } from '@nestjs/common';

import { authConst } from '../../../core/auth';

export const Public = () => SetMetadata(authConst.PUBLIC_KEY, true);
