import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import {
  DeleteDdayServiceInput,
  IDeleteDdayByDdayIdService,
  IGetDdayByDdayIdRepository,
} from '../../../core/dday';
import { IDeleteDdayRepository } from '../../../core/dday';
import {
  DeleteDdayRepository,
  GetDdayByDdayIdRepository,
} from '../../../infra/repositories';

@Injectable()
export class DeleteDdayByDdayIdService implements IDeleteDdayByDdayIdService {
  constructor(
    @Inject(GetDdayByDdayIdRepository)
    private readonly getDdayByDdayIdRepository: IGetDdayByDdayIdRepository,
    @Inject(DeleteDdayRepository)
    private readonly deleteDdayRepository: IDeleteDdayRepository,
  ) {}

  public async execute(dto: DeleteDdayServiceInput): Promise<void> {
    const dday = await this.getDdayByDdayIdRepository.execute(dto.ddayId);

    if (!dday) {
      throw new NotFoundException();
    }

    if (dday.userId !== dto.userId) {
      throw new UnauthorizedException();
    }

    await this.deleteDdayRepository.execute(dday);
  }
}
