type Shift<T extends any[]> = T extends [] ? T : T extends [infer First, ...infer Rest] ? [...Rest] : never
