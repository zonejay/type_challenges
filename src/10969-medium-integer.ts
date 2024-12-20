// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'
import {ExpectFalse, NotEqual} from './test-utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<0.5>, never>>,
  Expect<Equal<Integer<28.0>, 28>>,
  Expect<Equal<Integer<28.101>, never>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>
]

// ============= Your Code Here =============
type Integer<T> = T extends number ? (number extends T ? never : helper<T> extends true ? T : never) : never
type AllZero<T> = T extends `${infer F}${infer R}` ? (F extends '0' ? AllZero<R> : false) : true
type helper<T extends number> = `${T}` extends `${infer F}.${infer Rest}`
  ? AllZero<Rest> extends true
    ? true
    : false
  : true
