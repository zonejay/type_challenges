// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'
import type {IndexOf} from './05153-medium-indexof'

type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>
]

// ============= Your Code Here =============
type Unique<T extends any[], R extends any[] = []> = T extends [infer First, ...infer Rest]
  ? IndexOf<R, First> extends -1
    ? Unique<Rest, [...R, First]>
    : Unique<Rest, R>
  : R

type test = [1] extends [1, 2] ? true : false
