type PopA<T extends any[]> = T extends [...infer head, any] ? head : never

type MinusOne<T extends number, A extends any[] = []> = A['length'] extends T
  ? PopA<A>['length']
  : MinusOne<T, [...A, 0]>

type test2257 = MinusOne<20>
