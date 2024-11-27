type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer R}${From}${infer Q}`
  ? `${R}${To}${ReplaceAll<Q, From, To>}`
  : S
