declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [K in keyof T]: Awaited<T[K]>
}>
const promiseAllTest1 = PromiseAll([1, 2, Promise.resolve(3)])

type test_20 = typeof promiseAllTest1
