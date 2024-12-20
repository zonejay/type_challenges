type Permutation<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never

type Permuted = Permutation<'a' | 'b'> // ['a', 'b'] | ['b' | 'a']
