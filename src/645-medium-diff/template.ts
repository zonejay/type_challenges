type Diff<O extends Record<any, any>, O1 extends Record<any, any>> = Merge<
  {
    [P in keyof O as P extends keyof O1 ? never : P]: O[P]
  },
  {[P in keyof O1 as P extends keyof O ? never : P]: O1[P]}
>
