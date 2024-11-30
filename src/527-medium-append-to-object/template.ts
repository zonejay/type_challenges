type AppendToObject<T extends Record<any, any>, U extends keyof any, V> = {
  [t in keyof T | U]: t extends U ? V : T[t]
}

type test527 = AppendToObject<{a: 'b'}, 'home', boolean>

type test527_1 = {a: 'b'} & {c: 'd'}
