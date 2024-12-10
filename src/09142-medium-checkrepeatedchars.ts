// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'
import {ExpectFalse, NotEqual} from './test-utils'

type cases = [
  Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
  Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
  Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
  Expect<Equal<CheckRepeatedChars<''>, false>>
]

// ============= Your Code Here =============
export type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never
export type CheckRepeatedChars<T extends string> = T extends ''
  ? false
  : T extends `${infer First}${infer Rest}`
  ? First extends StringToUnion<Rest>
    ? true
    : CheckRepeatedChars<Rest>
  : false

type test = StringToUnion<'abc'>
