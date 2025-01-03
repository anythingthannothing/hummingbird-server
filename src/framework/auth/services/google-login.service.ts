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
} from '../../../core/auth';
import { ICreateUserRepository } from '../../../core/user';
import {
  CreateGoogleAccountRepository,
  CreateUserRepository,
  GetGoogleAccountRepository,
} from '../../../infra/repositories';
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

    const newUser = await this.unitOfWorkProvider.commit(async () => {
      const newUser = await this.createUserRepository.execute(dto.email);
      await this.createGoogleAccountRepository.execute(
        new CreateAccountRepositoryInput(
          dto.googleId,
          newUser.userId,
          dto.email,
        ),
      );

      return newUser;
    });

    return {
      ...newUser,
      isNewUser: true,
    };
  }
}
