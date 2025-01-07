import { UserDomain } from '../user';

export interface SubjectDomain {
  subjectId: string;
  userId: number;
  user: UserDomain;
  title: string;
  color: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}
