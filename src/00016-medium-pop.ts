// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>
]

// ============= Your Code Here =============
type Pop<T extends any[], Prev extends any[] = []> = T extends [infer F, ...infer R]
  ? R['length'] extends 1
    ? Prev
    : Pop<R, [...Prev, F]>
  : T

type test = Pop<['a', 'b', 'c', 'd']>
