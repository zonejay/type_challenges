// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
  Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
  Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
  Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>
]

// ============= Your Code Here =============
import {StringToUnion} from './09142-medium-checkrepeatedchars'
type FirstUniqueCharIndex<
  T extends string,
  Before extends string = '',
  Count extends any[] = []
> = T extends `${infer First}${infer Rest}`
  ? First extends StringToUnion<`${Before}${Rest}`>
    ? FirstUniqueCharIndex<Rest, `${Before}${First}`, [...Count, First]>
    : Count['length']
  : -1
