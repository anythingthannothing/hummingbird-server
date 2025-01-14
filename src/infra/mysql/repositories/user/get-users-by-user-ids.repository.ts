import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';

import {
  IGetUsersByUserIdsRepository,
  UserDomain,
} from '../../../../core/user';
import { UserEntity } from '../../entities';

@Injectable()
export class GetUsersByUserIdsRepository
  implements IGetUsersByUserIdsRepository
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async execute(userIds: number[]): Promise<UserDomain[]> {
    return this.userRepository.find({
      select: { userId: true, nickname: true, thumbnailPath: true },
      where: { userId: In(userIds) },
    });
  }
}
