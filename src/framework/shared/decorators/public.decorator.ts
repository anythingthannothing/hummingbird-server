import { SetMetadata } from '@nestjs/common';

import { authConst } from '../../../core/lib/consts';

export const Public = () => SetMetadata(authConst.PUBLIC_KEY, true);
