type AnyOf<T extends readonly any[]> = T extends []
  ? false
  : T extends [infer First, ...infer Rest]
  ? isFalsy<First> extends true
    ? AnyOf<Rest>
    : true
  : never

type falsy = '' | undefined | null | 0 | [] | never | false

type isFalsy<T> = T extends falsy ? true : IsEmptyObject<T>

type IsEmptyObject<T> = keyof T extends never ? true : false

type test949 = IsEmptyObject<{}>

type AnyOf2<T extends any[]> = T[number] extends 0 | '' | false | [] | {[key: string]: never} ? false : true
