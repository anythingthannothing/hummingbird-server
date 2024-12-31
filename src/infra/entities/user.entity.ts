import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserDomain } from '../../core/domains';

@Entity('user')
export class UserEntity implements UserDomain {
  @PrimaryGeneratedColumn({ name: 'user_id', type: 'int', unsigned: true })
  userId: number;

  @Column({ name: 'email', type: 'varchar', nullable: false })
  email: string;

  @Column({ name: 'nickname', type: 'nvarchar', length: 30, nullable: true })
  nickname: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
