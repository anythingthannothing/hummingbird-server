import { Prop, Schema, SchemaFactory, Virtual } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

import { StudyRecordDomain } from '../../../core/study-record';

export type StudyRecordDocument = mongoose.HydratedDocument<StudyRecordModel>;

@Schema({
  collection: 'studyRecords',
  autoIndex: process.env.NODE_ENV !== 'production',
  autoCreate: process.env.NODE_ENV !== 'production',
  timestamps: true,
})
export class StudyRecordModel extends Document implements StudyRecordDomain {
  @Virtual({
    get: function (this: StudyRecordModel) {
      return this._id;
    },
  })
  studyRecordId: string;

  @Prop({ required: true, type: String })
  date: string;

  @Prop({
    required: true,
    type: Number,
  })
  userId: number;

  @Prop({ required: false, type: Number })
  goalDuration: number;

  @Prop({ required: true, type: Number })
  totalDuration: number;

  @Prop({
    type: [
      {
        title: { type: String, required: true },
        duration: { type: Number, required: true },
        totalBreak: { type: Number, required: true },
        startAt: { type: Number, required: true },
        endAt: { type: Number, required: true },
      },
    ],
    required: true,
    _id: false,
  })
  studies: {
    title: string;
    duration: number;
    totalBreak: number;
    startAt: number;
    endAt: number;
  }[];
}

export const StudyRecordSchema = SchemaFactory.createForClass(StudyRecordModel);
