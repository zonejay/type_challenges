type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer V}${From}${infer R}`
  ? `${V}${To}${R}`
  : S

type test116 = Replace<'foobar', 'bar', 'foo'>
