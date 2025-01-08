import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserDomain } from '../../../core/user';

@Entity('user')
export class UserEntity implements UserDomain {
  @PrimaryGeneratedColumn({ name: 'user_id', type: 'int', unsigned: true })
  userId: number;

  @Column({ type: 'varchar', length: 254, nullable: false })
  email: string;

  @Column({
    name: 'nickname',
    type: 'nvarchar',
    length: 30,
    nullable: true,
    default: null,
  })
  nickname: string | null;

  @Column({
    name: 'thumbnail_path',
    type: 'varchar',
    length: 36,
    nullable: true,
    default: null,
  })
  thumbnailPath: string | null;

  @Column({ name: 'birth_date', type: 'date', nullable: true, default: null })
  birthDate: string | null;

  @Column({
    name: 'country_code',
    type: 'char',
    length: 2,
    nullable: true,
    default: null,
  })
  countryCode: string | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
