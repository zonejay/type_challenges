type EndsWith<T extends string, U extends string> = T extends `${infer First}${U}` ? true : false
