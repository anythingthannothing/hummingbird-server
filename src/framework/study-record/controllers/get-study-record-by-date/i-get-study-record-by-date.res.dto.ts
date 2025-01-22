export interface IGetStudyRecordByDateResDto {
  goalDuration: number | null;
  totalDuration: number;
  studies: Study[];
}

interface Study {
  title: string;
  color: string;
  order: number;
  duration: number;
  totalBreak: number;
  startAt: number;
  endAt: number;
}
