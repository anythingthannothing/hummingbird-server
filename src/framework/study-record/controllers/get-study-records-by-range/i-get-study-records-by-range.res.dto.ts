export interface IGetStudyRecordByDateResDto {
  date: string;
  goalDuration: number | null;
  totalDuration: number;
  studies: Study[];
}

interface Study {
  title: string;
  duration: number;
  totalBreak: number;
  startAt: number;
  endAt: number;
}

export interface IGetStudyRecordsByRangeResDto {
  studyRecords: IGetStudyRecordByDateResDto[];
}
