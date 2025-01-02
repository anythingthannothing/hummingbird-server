export class VerifyRefreshTokenInput {
  userId: number;
  token: string;
}

export interface IRefreshTokenProvider {
  generate(userId: number): Promise<string>;
  verify(payload: VerifyRefreshTokenInput): Promise<boolean>;
}
