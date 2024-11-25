type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U]

type MyFirst<T> = T extends [infer First, ...infer Tail] ? First : never
