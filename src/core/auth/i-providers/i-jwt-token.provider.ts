export interface JwtPayload {
  userId: number;
  iat: number;
  exp: number;
}

export interface JwtVerifyResult {
  payload: JwtPayload | null;
  isValid: boolean;
  error: 'expired' | 'invalid token' | null;
}

export interface IJwtTokenProvider {
  sign(payload: Pick<JwtPayload, 'userId'>): Promise<string>;
  verify(token: string): Promise<JwtVerifyResult>;
  decode(token: string): Promise<JwtPayload>;
}
