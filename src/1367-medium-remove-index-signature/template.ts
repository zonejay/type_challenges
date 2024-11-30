type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : /* filters out all 'number' keys */
    number extends K
    ? never
    : /* filers out all 'symbol' keys */
    symbol extends K
    ? never
    : K /* all that's left are literal type keys */] /* filters out all 'string' keys */: T[K]
}
