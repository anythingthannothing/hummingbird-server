import { Inject, Injectable } from '@nestjs/common';
import { UserDomain } from 'src/core/domains';

import {
  GoogleLoginServiceInput,
  IGoogleLoginService,
} from '../../../core/auth';
import {
  CreateAccountRepositoryInput,
  ICreateAccountRepository,
  IGetAccountRepository,
} from '../../../core/auth/i-repositories';
import { ICreateUserRepository } from '../../../core/user';
import {
  CreateGoogleAccountRepository,
  GetGoogleAccountRepository,
} from '../../../infra/repositories';
import { CreateUserRepository } from '../../../infra/repositories/user';
import { UnitOfWorkProvider } from '../../shared/providers';

@Injectable()
export class GoogleLoginService implements IGoogleLoginService {
  constructor(
    @Inject(GetGoogleAccountRepository)
    private readonly getGoogleAccountRepository: IGetAccountRepository,
    private readonly unitOfWorkProvider: UnitOfWorkProvider,
    @Inject(CreateUserRepository)
    private readonly createUserRepository: ICreateUserRepository,
    @Inject(CreateGoogleAccountRepository)
    private readonly createGoogleAccountRepository: ICreateAccountRepository,
  ) {}
  public async execute(
    dto: GoogleLoginServiceInput,
  ): Promise<UserDomain & { isNewUser: boolean }> {
    const account = await this.getGoogleAccountRepository.execute(dto.googleId);

    if (account) {
      return { ...account.user, isNewUser: false };
    }

    const newAccount = await this.unitOfWorkProvider.commit(async () => {
      const newUser = await this.createUserRepository.execute(dto.email);
      return await this.createGoogleAccountRepository.execute(
        new CreateAccountRepositoryInput(
          dto.googleId,
          newUser.userId,
          dto.email,
        ),
      );
    });

    return {
      ...newAccount.user,
      isNewUser: true,
    };
  }
}
