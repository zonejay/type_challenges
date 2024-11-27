type Last<T extends any[]> = T extends [...infer First, infer Last] ? Last : never
type test_15_1 = Last<[1, 2]>
