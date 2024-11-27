type LookUp<U, T> = U extends {type: string} ? (U['type'] extends T ? U : never) : never
