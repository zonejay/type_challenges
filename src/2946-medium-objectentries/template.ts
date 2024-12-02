type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>
type ObjectEntries<T extends Object, K extends keyof T = keyof T> = K extends K
  ? [K, T[K] extends undefined ? undefined : Required<T>[K]]
  : never

type test2946 = ObjectEntries<Partial<{name: string; age: number; locations: string[] | null}>>
