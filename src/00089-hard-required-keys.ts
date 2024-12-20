// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<RequiredKeys<{a: number; b?: string}>, 'a'>>,
  Expect<Equal<RequiredKeys<{a: undefined; b?: undefined}>, 'a'>>,
  Expect<Equal<RequiredKeys<{a: undefined; b?: undefined; c: string; d: null}>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>
]

// ============= Your Code Here =============
type RequiredKeys<T> = keyof {
  [K in keyof T as undefined extends T[K] ? ([T[K]] extends [undefined] ? never : never) : K]: T[K]
}
type test = RequiredKeys<{a: undefined; b?: undefined; c: string; d: null}>
