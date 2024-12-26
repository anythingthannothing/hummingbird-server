import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { RefreshTokenDomain } from '../../core/domain';

@Entity('refresh_token')
export class RefreshTokenEntity implements RefreshTokenDomain {
  @PrimaryGeneratedColumn({
    name: 'refresh_token_id',
    type: 'bigint',
    unsigned: true,
  })
  refreshTokenId: string;

  @Column({ name: 'token', type: 'char', length: 36, nullable: false })
  token: string;

  @Column({ name: 'user_id', type: 'int', unsigned: true, nullable: false })
  userId: number;

  @Column({ name: 'expires_at', type: 'int', unsigned: true, nullable: false })
  expiresAt: number;
}
