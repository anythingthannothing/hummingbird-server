export interface IBaseSaveEntityRepository<E> {
  execute(entity: E): Promise<void>;
}
