// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<ParseUrlParams<''>, never>>,
  Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
  Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>
]

// ============= Your Code Here =============
type ParseUrlParams<T> = T extends `${string}:${infer R}`
  ? R extends `${infer P}/${infer L}`
    ? P | ParseUrlParams<L>
    : R
  : never
type test = ParseUrlParams<'posts/:id/:user'>
