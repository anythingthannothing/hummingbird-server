export interface IBaseCreateEntityRepository<T, D> {
  execute(params: T): Promise<D>;
}
