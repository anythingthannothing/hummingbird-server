import { Inject, Injectable } from '@nestjs/common';

import {
  IGetUserByUserIdRepository,
  IGetUserInfoService,
  UserDomain,
  UserExceptionEnum,
} from '../../../core/user';
import { GetUserByUserIdRepository } from '../../../infra/mysql/repositories';
import { throwNotFoundException } from '../../shared/exceptions';

@Injectable()
export class GetUserInfoService implements IGetUserInfoService {
  constructor(
    @Inject(GetUserByUserIdRepository)
    private readonly getUserByUserIdRepository: IGetUserByUserIdRepository,
  ) {}

  public async execute(userId: number): Promise<UserDomain> {
    const user = await this.getUserByUserIdRepository.execute(userId);

    if (!user) {
      return throwNotFoundException(
        "The requested user doesn't exist.",
        UserExceptionEnum.USER_NOT_FOUND,
      );
    }

    return user;
  }
}
