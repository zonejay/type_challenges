type RequiredByKeys<T, K extends keyof T = keyof T> = MergeType<
  {[U in keyof T as U extends K ? U : never]-?: T[U]} & {[U in keyof T as U extends K ? never : U]?: T[U]}
>

type test2759 = RequiredByKeys<
  {
    name?: string
    age?: number
    address?: string
  },
  'name'
>
