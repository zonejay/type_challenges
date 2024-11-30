type LengthOfStringHelper<S extends string> = [S] extends [never]
  ? []
  : S extends `${infer First}${infer Rest}`
  ? [First, ...LengthOfStringHelper<Rest>]
  : []

type LengthOfString<S extends string> = LengthOfStringHelper<S>['length']
type test298 = LengthOfString<'aa'>
