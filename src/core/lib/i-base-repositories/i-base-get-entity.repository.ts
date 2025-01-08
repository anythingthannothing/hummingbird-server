export interface IBaseGetEntityRepository<P, D> {
  execute(predicate: P): Promise<D | null>;
}
