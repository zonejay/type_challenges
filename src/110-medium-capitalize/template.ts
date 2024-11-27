type MyCapitalize<S extends string> = S extends `${infer X}${infer R}` ? `${Uppercase<X>}${R}` : S

type test110_1 = MyCapitalize<'Hello'>
