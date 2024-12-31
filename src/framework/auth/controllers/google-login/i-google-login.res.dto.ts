export interface IGoogleLoginResDto {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  isNewUser: boolean;
}
