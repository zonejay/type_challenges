// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<ParsePrintFormat<''>, []>>,
  Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
  Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
  Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
  Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
  Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
  Expect<Equal<ParsePrintFormat<'The result is %'>, []>>
]

// ============= Your Code Here =============
type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<
  T extends string,
  R extends any[] = [],
  Prev extends any[] = []
> = T extends `${string}%${infer First}${infer Rest}`
  ? First extends keyof ControlsMap
    ? IsOdd<Prev['length']> extends true
      ? ParsePrintFormat<Rest, [...R]>
      : ParsePrintFormat<Rest, [...R, ControlsMap[First]]>
    : ParsePrintFormat<`${First}${Rest}`, [...R], [...Prev, 0]>
  : R

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
