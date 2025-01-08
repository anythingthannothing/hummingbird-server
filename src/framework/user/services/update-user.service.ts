import { Inject, Injectable } from '@nestjs/common';

import {
  IGetUserByUserIdRepository,
  ISaveUserRepository,
  IUpdateUserService,
  UpdateUserServiceInput,
  UserExceptionEnum,
} from '../../../core/user';
import {
  GetUserByUserIdRepository,
  SaveUserRepository,
} from '../../../infra/mysql/repositories';
import { throwNotFoundException } from '../../shared/exceptions';

@Injectable()
export class UpdateUserService implements IUpdateUserService {
  constructor(
    @Inject(GetUserByUserIdRepository)
    private readonly getUserByUserIdRepository: IGetUserByUserIdRepository,
    @Inject(SaveUserRepository)
    private readonly saveUserRepository: ISaveUserRepository,
  ) {}

  public async execute(dto: UpdateUserServiceInput): Promise<void> {
    const user = await this.getUserByUserIdRepository.execute(dto.userId);

    if (!user) {
      return throwNotFoundException(
        "User doesn't exist.",
        UserExceptionEnum.USER_NOT_FOUND,
      );
    }

    user.nickname = dto.nickname ?? user.nickname;
    user.thumbnailPath = dto.thumbnailPath ?? user.thumbnailPath;
    user.birthDate = dto.birthDate ?? user.birthDate;
    user.countryCode = dto.countryCode ?? user.countryCode;

    await this.saveUserRepository.execute(user);
  }
}
