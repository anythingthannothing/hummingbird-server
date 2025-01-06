export interface UserDomain {
  userId: number;
  email: string;
  nickname: string | null;
  birthDate: Date | null;
  countryCode: string | null;
  createdAt: Date;
}
