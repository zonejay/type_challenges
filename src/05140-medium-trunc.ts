// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<0.2>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'.3'>, '0'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>
]

// ============= Your Code Here =============
type Trunc<T, R extends string = ''> = stringToNumber<T> extends `${infer F}${infer Rest}`
  ? F extends '.'
    ? R extends ''
      ? '0'
      : R
    : Trunc<Rest, `${R}${F}`>
  : R
type stringToNumber<T> = T extends number ? `${T}` : T

type test = Trunc<'.3'>
