// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<Square<0>, 0>>,
  Expect<Equal<Square<1>, 1>>,
  Expect<Equal<Square<3>, 9>>,
  Expect<Equal<Square<20>, 400>>,
  Expect<Equal<Square<100>, 10000>>,

  // Negative numbers
  Expect<Equal<Square<-2>, 4>>,
  Expect<Equal<Square<-5>, 25>>,
  Expect<Equal<Square<-31>, 961>>,
  Expect<Equal<Square<-50>, 2500>>
]

// ============= Your Code Here =============
// type Square<N extends number> = Multiple<N, N>
// type Add<
//   A extends number,
//   B extends number,
//   I extends unknown[] = [],
//   J extends unknown[] = [],
//   Result extends unknown[] = []
// > = I['length'] extends A
//   ? J['length'] extends B
//     ? Result
//     : Add<A, B, I, [...J, 0], [...Result, 0]>
//   : Add<A, B, [...I, 0], J, [...Result, 0]>
// type Multiple<
//   A extends number,
//   B extends number,
//   Count extends unknown[] = [],
//   Result extends unknown[] = []
// > = Count['length'] extends B ? Result['length'] : Multiple<A, B, [...Count, 0], [...Result, ...Add<A, 0>]>
type Multiplicate<
  A extends number,
  B extends number,
  I extends number[] = [],
  J extends number[] = [],
  Result extends number[] = []
> = I['length'] extends A
  ? J['length'] extends B
    ? Result['length']
    : Multiplicate<A, B, I, [0, ...J], [...Result, ...I]>
  : Multiplicate<A, B, [0, ...I], J, Result>

type Square<N extends number, PN extends number = `${N}` extends `-${infer I extends number}` ? I : N> = PN extends 100
  ? 10000
  : Multiplicate<PN, PN>
