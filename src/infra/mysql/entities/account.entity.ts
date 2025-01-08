import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { AccountDomain, AuthProviderEnum } from '../../../core/account';
import { UserEntity } from './user.entity';

@Entity('account')
@Unique(['authProvider', 'authProviderId'])
export class AccountEntity implements AccountDomain {
  @PrimaryGeneratedColumn({ name: 'account_id', type: 'int', unsigned: true })
  accountId: number;

  @Column({
    name: 'auth_provider',
    type: 'enum',
    enum: AuthProviderEnum,
    nullable: false,
  })
  authProvider: AuthProviderEnum;

  @Column({
    name: 'auth_provider_id',
    type: 'varchar',
    nullable: false,
  })
  authProviderId: string;

  @Column({ name: 'user_id', type: 'int', unsigned: true, nullable: false })
  userId: number;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ name: 'email', type: 'varchar', length: 254, nullable: false })
  email: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    default: null,
  })
  deletedAt: Date | null;
}
