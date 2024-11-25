import {Equal} from '@type-challenges/utils'

// 因为文件中使用立import语句，会当成模块处理, 不会进行全局导入，要使用export才能导出
export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false
