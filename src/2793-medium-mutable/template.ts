type Mutable<T extends Record<any, any>> = {
  -readonly [K in keyof T]: T[K]
}
