import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserDomain } from '../../core/domain';

@Entity('user')
export class UserEntity implements UserDomain {
  @PrimaryGeneratedColumn({ name: 'user_id', type: 'int', unsigned: true })
  userId: number;

  @Column({ name: 'nickname', type: 'nvarchar', length: 30, nullable: true })
  nickname: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
