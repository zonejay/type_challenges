// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success'>>,
  Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>>
]

// ============= Your Code Here =============
type BEMHelper<B extends string, E extends string, M extends string> = [E] extends [never]
  ? `${B}--${M}`
  : [M] extends [never]
  ? `${B}__${E}`
  : `${B}__${E}--${M}`
type BEM<B extends string, E extends string[], M extends string[]> = BEMHelper<B, E[number], M[number]>

type test3326 = BEM<'btn', [], ['a']>
