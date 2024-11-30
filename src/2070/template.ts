type DropChar<S, C> = S extends `${infer First}${infer Rest}`
  ? First extends C
    ? `${DropChar<Rest, C>}`
    : `${First}${DropChar<Rest, C>}`
  : S

type test2070 = DropChar<'butter fly!', ' '>
