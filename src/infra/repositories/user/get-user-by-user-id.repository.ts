import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDomain } from 'src/core/domains';
import { Repository } from 'typeorm';

import { IGetUserByUserIdRepository } from '../../../core/user';
import { UserEntity } from '../../entities';

@Injectable()
export class GetUserByUserIdRepository implements IGetUserByUserIdRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  public async execute(userId: number): Promise<UserDomain | null> {
    return this.userRepository.findOne({ where: { userId } });
  }
}
