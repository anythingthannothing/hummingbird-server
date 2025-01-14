import { UserDomain } from '../../user';

export class AppleLoginServiceInput {
  constructor(
    public readonly appleId: string,
    public readonly email: string,
  ) {}
}

export interface IAppleLoginService {
  execute(
    dto: AppleLoginServiceInput,
  ): Promise<UserDomain & { isNewUser: boolean }>;
}
