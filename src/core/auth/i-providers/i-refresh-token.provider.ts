export class VerifyRefreshTokenInput {
  userId: number;
  token: string;
  expiresAt: number;
}

export interface IRefreshTokenProvider {
  generate(userId: number): Promise<string>;
  verify(payload: VerifyRefreshTokenInput): Promise<boolean>;
}
