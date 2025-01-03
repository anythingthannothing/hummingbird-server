import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import {
  IGetDdayByDdayIdRepository,
  IUpdateDdayRepository,
} from '../../../core/dday';
import { IUpdateDdayService, UpdateDdayServiceInput } from '../../../core/dday';
import { DdayDomain } from '../../../core/domains/dday.domain';
import {
  GetDdayByDdayIdRepository,
  UpdateDdayRepository,
} from '../../../infra/repositories';

@Injectable()
export class UpdateDdayService implements IUpdateDdayService {
  constructor(
    @Inject(GetDdayByDdayIdRepository)
    private readonly getDdayByDdayIdRepository: IGetDdayByDdayIdRepository,
    @Inject(UpdateDdayRepository)
    private readonly updateDdayRepository: IUpdateDdayRepository,
  ) {}

  public async execute(dto: UpdateDdayServiceInput): Promise<void> {
    const dday = await this.getDdayByDdayIdRepository.execute(dto.ddayId);

    if (!dday) {
      throw new NotFoundException();
    }

    if (dday.userId !== dto.userId) {
      throw new UnauthorizedException();
    }

    await this.updateDdayRepository.execute(this.updateDday(dday, dto));
  }

  private updateDday(dday: DdayDomain, updateDto: UpdateDdayServiceInput) {
    dday.title = updateDto.title ?? dday.title;
    dday.color = updateDto.color ?? dday.color;
    dday.targetDatetime = updateDto.targetDatetime ?? dday.targetDatetime;

    return dday;
  }
}
