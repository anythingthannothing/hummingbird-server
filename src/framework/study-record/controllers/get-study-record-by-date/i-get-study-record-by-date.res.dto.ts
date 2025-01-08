export interface IGetStudyRecordByDateResDto {
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
