// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
  Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
  Expect<Equal<IndexOf<[any, 1], 1>, 1>>
]

// ============= Your Code Here =============
export type IndexOf<T extends unknown[], U, R extends unknown[] = []> = T extends [infer First, ...infer Rest]
  ? Equal<U, First> extends true
    ? R['length']
    : IndexOf<Rest, U, [...R, First]>
  : -1
type test1 = IndexOf<[1, 2, 3], 2>
