import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

import { SubjectDomain } from '../../core/subject';
import { UserEntity } from './user.entity';

@Entity('subject')
export class SubjectEntity implements SubjectDomain {
  @PrimaryGeneratedColumn({
    name: 'subject_id',
    type: 'bigint',
    unsigned: true,
  })
  subjectId: string;

  @Column({ name: 'user_id', type: 'int', unsigned: true })
  userId: number;

  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ type: 'nvarchar', nullable: false })
  title: string;

  @Column({ type: 'char', length: 6, nullable: false })
  color: string;

  @Column({ type: 'tinyint', unsigned: true, nullable: false })
  order: number;
}
