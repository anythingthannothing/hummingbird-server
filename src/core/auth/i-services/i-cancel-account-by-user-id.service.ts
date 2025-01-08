export interface ICancelAccountByUserIdService {
  execute(userId: number): Promise<void>;
}
