type ReplaceKeys<U, T, Y extends Record<any, any>> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K]
}
