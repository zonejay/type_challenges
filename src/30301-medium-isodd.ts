// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<IsOdd<2023>, true>>,
  Expect<Equal<IsOdd<1453>, true>>,
  Expect<Equal<IsOdd<1926>, false>>,
  Expect<Equal<IsOdd<number>, false>>,
  Expect<Equal<IsOdd<2.3>, false>>,
  Expect<Equal<IsOdd<3e23>, false>>
]

// ============= Your Code Here =============
type Odd = '1' | '3' | '5' | '7' | '9'
type IsOdd<T extends number | string> = T extends number
  ? number extends T
    ? false
    : isDecimal<T> extends true
    ? false
    : isScientificNotation<T> extends true
    ? false
    : GetLastNumber<T> extends Odd
    ? true
    : false
  : true
type GetLastNumber<T extends number | string> = `${T}` extends `${infer F}${infer R}`
  ? R extends ''
    ? F
    : GetLastNumber<R>
  : `${T}`
type isDecimal<T extends number> = `${T}` extends `${infer F}.${infer R}` ? true : false
type isScientificNotation<T extends number> = `${T}` extends `${infer F}e${infer R}` ? true : false
