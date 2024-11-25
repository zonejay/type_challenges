type MyParameters<T extends (...args: any[]) => any> = T extends (...any: infer X) => any ? X : never
