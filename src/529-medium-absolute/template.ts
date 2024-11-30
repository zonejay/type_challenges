// 思路 1. 将数字转为字符串 2. 判断是否为负数 3. 如果是负数，则去掉负号 4. 返回结果
type Absolute<T extends number | string | bigint> = `${T}` extends `${infer First}${infer Rest}`
  ? First extends '-'
    ? `${Rest}`
    : `${T}`
  : never

type test529 = Absolute<0>
