// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
]

// ============= Your Code Here =============
type Zip<T extends any[], U extends any[], V extends any[] = []> = T extends [infer R1, ...infer R2]
  ? U extends [infer R3, ...infer R4]
    ? Zip<R2, R4, [...V, [R1, R3]]>
    : V
  : V
