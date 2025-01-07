interface SubjectInfo {
  subjectId: string;
  title: string;
  color: string;
  order: number;
  updatedAt: Date;
}

export interface IGetSubjectsByUserIdResDto {
  subjects: SubjectInfo[];
}
