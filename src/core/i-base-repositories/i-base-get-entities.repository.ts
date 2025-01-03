export interface IBaseGetEntitiesRepository<T, D> {
  execute(predicate?: T): Promise<D[]>;
}
