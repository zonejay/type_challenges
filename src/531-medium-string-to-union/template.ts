type StringToUnionHelper<T extends string> = T extends `${infer First}${infer Rest}`
  ? [First, ...StringToUnionHelper<Rest>]
  : []

type StringToUnion<T extends string> = StringToUnionHelper<T>[number]
