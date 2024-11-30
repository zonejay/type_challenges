type IsNever1<T> = T extends never ? true : false

type IsNever<T> = [T] extends [never] ? true : false

type test1042 = IsNever1<never> extends never ? true : false
