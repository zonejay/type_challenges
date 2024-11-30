type Merge<F extends Record<any, any>, S extends Record<any, any>> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K]
}
