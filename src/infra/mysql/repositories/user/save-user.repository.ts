import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ISaveUserRepository, UserDomain } from '../../../../core/user';
import { UserEntity } from '../../entities';

@Injectable()
export class SaveUserRepository implements ISaveUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async execute(entity: UserDomain): Promise<void> {
    await this.userRepository.save(entity);
  }
}
