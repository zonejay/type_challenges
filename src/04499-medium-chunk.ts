// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>
]

// ============= Your Code Here =============
type Chunk<T extends any[], N extends number, R extends any[] = []> = T extends [infer First, ...infer Rest]
  ? R['length'] extends N
    ? [[...R], ...Chunk<Rest, N, [First]>]
    : Chunk<Rest, N, [...R, First]>
  : R extends []
  ? []
  : [R]

type test = Chunk<[1, 2, 3, 4], 2>
