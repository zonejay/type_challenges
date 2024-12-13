// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

type cases = [
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
  Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
  Expect<Equal<FindAll<'', 'Type'>, []>>,
  Expect<Equal<FindAll<'', ''>, []>>,
  Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
  Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>
]

// ============= Your Code Here =============
type StringToArray<T extends string> = T extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []
type StringLength<T extends string> = StringToArray<T>['length']
type FindAll<T extends string, P extends string, AllPrefix extends string = ''> = P extends ''
  ? []
  : T extends `${infer Prefix}${P}${infer Rest}`
  ? P extends `${infer PFirst}${infer PRest}`
    ? [StringLength<`${AllPrefix}${Prefix}`>, ...FindAll<`${PRest}${Rest}`, P, `${AllPrefix}${Prefix}${PFirst}`>]
    : []
  : []
type test = FindAll<'Collection of TypeScript type challenges', 'Type'>
type test2 = FindAll<'Collection of TypeScript type challenges', ''>
