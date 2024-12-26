import { UserDomain } from './user.domain';

export enum AuthProviderEnum {
  google = 'google',
  apple = 'apple',
}

export interface AccountDomain {
  accountId: number;
  userId: number;
  authProvider: AuthProviderEnum;
  authProviderId: string;
  user: UserDomain;
  email: string;
  createdAt: Date;
}
