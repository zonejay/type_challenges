// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<GetMiddleElement<[]>, []>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
  Expect<Equal<GetMiddleElement<[() => number, '3', [3, 4], 5]>, ['3', [3, 4]]>>,
  Expect<Equal<GetMiddleElement<[() => string, () => number]>, [() => string, () => number]>>,
  Expect<Equal<GetMiddleElement<[never]>, [never]>>
]
// @ts-expect-error
type error = GetMiddleElement<1, 2, 3>

// ============= Your Code Here =============
type GetMiddleElement<T> = T extends [infer F, ...infer M, infer L]
  ? M['length'] extends 2
    ? M
    : M['length'] extends 0
    ? T
    : GetMiddleElement<M>
  : T

type test1<T> = T extends [infer F, ...infer M, infer L] ? M : T

type test = test1<[1, 2]>
