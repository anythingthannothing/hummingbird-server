export interface UserDomain {
  userId: number;
  email: string;
  nickname: string | null;
  thumbnailPath: string | null;
  birthDate: string | null;
  countryCode: string | null;
  createdAt: Date;
}
