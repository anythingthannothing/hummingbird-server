export interface StudyRecordDomain {
  studyRecordId: string;
  date: string;
  userId: bigint;
  goalDuration: number | null;
  totalDuration: number;
  studies: Study[];
}

export interface Study {
  title: string;
  color: string;
  order: number;
  duration: number;
  startAt: number;
  endAt: number;
  totalBreak: number;
}
