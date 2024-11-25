type MyExclude<T, U> = T extends U ? never : T

type case1 = 'c' | 'a' | 'b'
type case2 = 'b'

type a = MyExclude<case1, case2>
