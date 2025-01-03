export interface IBaseDeleteEntityRepository<E> {
  execute(entity: E): Promise<void>;
}
