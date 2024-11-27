type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : []

type test_16 = Pop<[]>
