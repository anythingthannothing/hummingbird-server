import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserRepository, UserDomain } from 'src/core/user';

import {
  CreateAccountRepositoryInput,
  ICreateAccountRepository,
  IGetAccountRepository,
} from '../../../core/account';
import {
  AppleLoginServiceInput,
  AuthExceptionEnum,
  IAppleLoginService,
} from '../../../core/auth';
import {
  CreateUserRepository,
  GetAppleAccountRepository,
} from '../../../infra/mysql/repositories';
import { CreateAppleAccountRepository } from '../../../infra/mysql/repositories';
import { throwBadRequestException } from '../../shared/exceptions';
import { UnitOfWorkProvider } from '../../shared/providers';

@Injectable()
export class AppleLoginService implements IAppleLoginService {
  constructor(
    @Inject(GetAppleAccountRepository)
    private readonly getAppleAccountRepository: IGetAccountRepository,
    private readonly unitOfWorkProvider: UnitOfWorkProvider,
    @Inject(CreateUserRepository)
    private readonly createUserRepository: ICreateUserRepository,
    @Inject(CreateAppleAccountRepository)
    private readonly createAppleAccountRepository: ICreateAccountRepository,
  ) {}

  public async execute(
    dto: AppleLoginServiceInput,
  ): Promise<UserDomain & { isNewUser: boolean }> {
    const account = await this.getAppleAccountRepository.execute(dto.appleId);

    // TODO: 회원탈퇴에 따른 처리방안 논의 후 구현
    if (account && account.deletedAt) {
      return throwBadRequestException(
        'Canceled account. Please try again later.',
        AuthExceptionEnum.CANCELED_ACCOUNT,
      );
    }

    if (account) {
      return { ...account.user, isNewUser: false };
    }

    const newUser = await this.unitOfWorkProvider.commit(async () => {
      const newUser = await this.createUserRepository.execute(dto.email);
      await this.createAppleAccountRepository.execute(
        new CreateAccountRepositoryInput(
          dto.appleId,
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
