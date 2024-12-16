// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'
import {ExpectFalse, NotEqual} from './test-utils'

type cases = [
  Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
  Expect<Equal<CheckRepeatedTuple<[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[number, 1, string, '1', boolean, true, false, unknown, any]>, false>>,
  Expect<Equal<CheckRepeatedTuple<[never, any, never]>, true>>
]

// ============= Your Code Here =============
type CheckRepeatedTuple<T extends unknown[], Prev extends unknown[] = []> = T extends [infer F, ...infer R]
  ? [F] extends [[...Prev, ...R][number]]
    ? Some<[...Prev, R], F> extends true
      ? true
      : CheckRepeatedTuple<R, [...Prev, F]>
    : CheckRepeatedTuple<R, [...Prev, F]>
  : false

type Some<T extends any[] = [], Target = any> = T extends [infer F, ...infer R]
  ? Equal<F, Target> extends true
    ? true
    : Some<R, Target>
  : false
