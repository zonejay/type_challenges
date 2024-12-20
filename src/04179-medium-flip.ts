// ============= Test Cases =============
import type {Equal, Expect, NotEqual} from './test-utils'

type cases = [
  Expect<Equal<{a: 'pi'}, Flip<{pi: 'a'}>>>,
  Expect<NotEqual<{b: 'pi'}, Flip<{pi: 'a'}>>>,
  Expect<Equal<{3.14: 'pi'; true: 'bool'}, Flip<{pi: 3.14; bool: true}>>>,
  Expect<Equal<{val2: 'prop2'; val: 'prop'}, Flip<{prop: 'val'; prop2: 'val2'}>>>
]

// ============= Your Code Here =============
type Flip<T extends Record<any, any>> = {
  [K in keyof T as K extends K ? `${T[K]}` : never]: K
}

type test4179 = Flip<{pi: 3.14; bool: true}>
