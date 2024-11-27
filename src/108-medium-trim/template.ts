type Trim<S extends string> = S extends `${' ' | '\t' | '\n'}${infer R}`
  ? Trim<R>
  : S extends `${infer R}${' ' | '\n' | '\t'}`
  ? Trim<R>
  : S
