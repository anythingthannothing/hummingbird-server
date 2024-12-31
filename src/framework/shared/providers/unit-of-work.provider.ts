import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { createNamespace, getNamespace } from 'cls-hooked';
import { DataSource, QueryRunner } from 'typeorm';

import { namespaceKeyConst } from './namespaceKeys.const';

createNamespace(namespaceKeyConst.ENTITY_MANAGER);

@Injectable()
export class UnitOfWorkProvider {
  constructor(@InjectDataSource() public readonly dataSource: DataSource) {}

  public async commit<T>(callback: () => Promise<T>): Promise<T> {
    const namespace = getNamespace(namespaceKeyConst.ENTITY_MANAGER);

    if (!namespace) {
      throw new InternalServerErrorException();
    }

    const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    return new Promise<T>((resolve, reject) => {
      namespace.run(async () => {
        try {
          await queryRunner.startTransaction();
          const em = queryRunner.manager;
          namespace.set(namespaceKeyConst.ENTITY_MANAGER, em);

          const result = await callback();
          await queryRunner.commitTransaction();
          resolve(result);
        } catch (error) {
          await queryRunner.rollbackTransaction();
          reject(error);
        } finally {
          await queryRunner.release();
        }
      });
    });
  }

  public async rollback<T>(callback: () => Promise<T>): Promise<T> {
    const namespace = getNamespace(namespaceKeyConst.ENTITY_MANAGER);

    if (!namespace) {
      throw new InternalServerErrorException();
    }

    const queryRunner: QueryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    return new Promise<T>((resolve, reject) => {
      namespace.run(async () => {
        try {
          await queryRunner.startTransaction();
          const em = queryRunner.manager;
          namespace.set(namespaceKeyConst.ENTITY_MANAGER, em);

          const result = await callback();
          await queryRunner.rollbackTransaction();
          resolve(result);
        } catch (error) {
          await queryRunner.rollbackTransaction();
          reject(error);
        } finally {
          await queryRunner.release();
        }
      });
    });
  }
}
