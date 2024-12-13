// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'
type cases = [
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5]>,
      {
        1: 1
        2: 1
        3: 1
        4: 1
        5: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>,
      {
        1: 2
        2: 2
        3: 2
        4: 1
        5: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>,
      {
        1: 3
        2: 3
        3: 2
        4: 3
        5: 1
      }
    >
  >,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<
    Equal<
      CountElementNumberToObject<['1', '2', '0']>,
      {
        0: 1
        1: 1
        2: 1
      }
    >
  >,
  Expect<
    Equal<
      CountElementNumberToObject<['a', 'b', ['c', ['d']]]>,
      {
        a: 1
        b: 1
        c: 1
        d: 1
      }
    >
  >
]

// ============= Your Code Here =============
type FlatArray<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [First] extends [never]
    ? []
    : First extends any[]
    ? [...FlatArray<First>, ...FlatArray<Rest>]
    : [First, ...FlatArray<Rest>]
  : []
type Flatten<T, R extends any[] = []> = T extends [infer F, ...infer L]
  ? [F] extends [never]
    ? Flatten<L, R>
    : F extends any[]
    ? Flatten<L, [...R, ...Flatten<F>]>
    : Flatten<L, [...R, F]>
  : R

type testa = FlatArray<['a', 'b', ['c', ['d']]]>
type CountElementNumberToObject<T extends unknown[]> = helper<FlatArray<T>>

type helper<T extends unknown[], R extends Record<any, any> = {}> = T extends [
  infer First extends string | number,
  ...infer Rest
]
  ? First extends keyof R
    ? helper<Rest, Omit<R, First> & Record<First, [...R[First], 0]>>
    : helper<Rest, R & Record<First, [0]>>
  : {
      [K in keyof R]: R[K]['length']
    }

type test = FlatArray<[1, 2]>
