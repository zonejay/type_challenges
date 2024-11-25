type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never

type T = {then: (onfulfilled: (arg: number) => any) => any}

type aaaa = MyAwaited<T>
