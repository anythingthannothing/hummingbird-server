export class UpdateUserServiceInput {
  constructor(
    public readonly userId: number,
    public readonly nickname?: string,
    public readonly thumbnailPath?: string,
    public readonly birthDate?: string,
    public readonly countryCode?: string,
  ) {}
}

export interface IUpdateUserService {
  execute(dto: UpdateUserServiceInput): Promise<void>;
}
