import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { Controller, HttpCode, HttpStatus, Inject } from '@nestjs/common';

import { JwtPayload } from '../../../../core/auth';
import {
  IUpdateSubjectService,
  UpdateSubjectServiceInput,
} from '../../../../core/subject';
import { CurrentUser } from '../../../shared/decorators';
import { UpdateSubjectService } from '../../services';
import { IUpdateSubjectReqDto } from './i-update-subject.req.dto';

@Controller()
export class UpdateSubjectController {
  constructor(
    @Inject(UpdateSubjectService)
    private readonly updateSubjectService: IUpdateSubjectService,
  ) {}

  @TypedRoute.Patch(':subjectId')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async execute(
    @CurrentUser() user: JwtPayload,
    @TypedParam('subjectId') subjectId: string,
    @TypedBody() body: IUpdateSubjectReqDto,
  ): Promise<void> {
    await this.updateSubjectService.execute(
      new UpdateSubjectServiceInput(
        body.subjectId,
        user.userId,
        body.title,
        body.color,
        body.order,
      ),
    );
  }
}
