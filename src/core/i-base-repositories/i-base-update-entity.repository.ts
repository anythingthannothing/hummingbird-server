export interface IBaseUpdateEntityRepository<E> {
  execute(entity: E): Promise<void>;
}
