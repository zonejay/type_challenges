type IsUnionImpl<T, C extends T = T> = (T extends T ? (C extends T ? true : unknown) : never) extends true
  ? false
  : true
type IsUnion<T> = IsUnionImpl<T>

type test1097 = true | unknown extends true ? false : true
