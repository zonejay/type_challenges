// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>
]

// ============= Your Code Here =============
type Fibonacci<
  T extends number,
  C extends any[] = [0],
  F extends any[] = [0],
  S extends any[] = [0]
> = T extends C['length'] ? S['length'] : Fibonacci<T, [...C, 0], [...F, ...S], [...F]>
