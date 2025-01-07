import { Injectable } from '@nestjs/common';

import { ICreateUserRepository, UserDomain } from '../../../core/user';
import { DbContextProvider } from '../../../framework/shared/providers';
import { UserEntity } from '../../entities';

@Injectable()
export class CreateUserRepository implements ICreateUserRepository {
  constructor(private readonly dbContext: DbContextProvider) {}

  public async execute(email: string): Promise<UserDomain> {
    const userRepository = this.dbContext.getRepository(UserEntity);

    return userRepository.save(userRepository.create({ email }));
  }
}
