export interface StudyRecordDomain {
  studyRecordId: string;
  date: string;
  userId: number;
  goalDuration: number | null;
  totalDuration: number;
  studies: Study[];
}

export interface Study {
  title: string;
  duration: number;
  startAt: number;
  endAt: number;
  totalBreak: number;
}
