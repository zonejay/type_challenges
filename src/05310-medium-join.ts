// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
  Expect<Equal<Join<[], 'u'>, ''>>
]

// ============= Your Code Here =============
type Join<T extends Array<string | number>, U extends string | number, R extends string = ''> = T extends [
  infer First,
  ...infer Rest
]
  ? Rest extends []
    ? First extends string | number
      ? `${R}${First}`
      : R
    : First extends string | number
    ? Rest extends Array<string | number>
      ? `${First}${U}${Join<Rest, U>}`
      : R
    : R
  : R
type test = Join<['a', 'p', 'p', 'l', 'e'], '-'>
