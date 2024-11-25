type DeepReadonly<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
}

type X2xx = {a: string} | {b: number}

type test1111 = {[K in keyof X2xx]: keyof X2xx[K]}
