// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
  Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>
]

// ============= Your Code Here =============
// 逻辑意义上&之后的结果和never相等，这里利用函数类型推断将U推断为同时满足不同类型的函数的入参
type UnionToIntersection<U> = (U extends any ? (arg: U) => any : never) extends (arg: infer R) => void ? R : never
type test = UnionToIntersection<(() => 'foo') | ((i: 42) => true)>
