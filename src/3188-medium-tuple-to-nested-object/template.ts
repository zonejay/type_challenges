type TupleToNestedObject<T extends string[], U> = T extends []
  ? U
  : T extends [infer First extends string, ...infer Rest extends string[]]
  ? {[K in First]: TupleToNestedObject<Rest, U>}
  : never

type test3188 = TupleToNestedObject<['a'], boolean>
