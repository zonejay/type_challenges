// ============= Test Cases =============
import type {Debug, Equal, Expect, IsAny} from './test-utils'

class ClassA {}

VueBasicProps({
  props: {
    propA: {},
    propB: {type: String},
    propC: {type: Boolean},
    propD: {type: ClassA},
    propE: {type: [String, Number]},
    propF: RegExp
  },
  data(this) {
    type PropsType = Debug<typeof this>
    type cases = [
      Expect<IsAny<PropsType['propA']>>,
      Expect<Equal<PropsType['propB'], string>>,
      Expect<Equal<PropsType['propC'], boolean>>,
      Expect<Equal<PropsType['propD'], ClassA>>,
      Expect<Equal<PropsType['propE'], string | number>>,
      Expect<Equal<PropsType['propF'], RegExp>>
    ]

    // @ts-expect-error
    this.firstname
    // @ts-expect-error
    this.getRandom()
    // @ts-expect-error
    this.data()

    return {
      firstname: 'Type',
      lastname: 'Challenges',
      amount: 10
    }
  },
  computed: {
    fullname() {
      return `${this.firstname} ${this.lastname}`
    }
  },
  methods: {
    getRandom() {
      return Math.random()
    },
    hi() {
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      this.propC
      const fullname = this.fullname
      const propE = this.propE
      type cases = [Expect<Equal<typeof fullname, string>>, Expect<Equal<typeof propE, string | number>>]
    }
  }
})

// ============= Your Code Here =============
declare function VueBasicProps<TProps, TData, TMethods, TComputed>(
  options: ObjectDescriptor<TProps, TData, TMethods, TComputed>
): any
type ObjectDescriptor<TProps, TData, TMethods, TComputed> = {
  props?: TProps
  data?: (this: GetProps<TProps>) => TData
  methods?: TMethods & ThisType<TData & TMethods & GetComputed<TComputed> & GetProps<TProps>> // Type of 'this' in methods is D & M
  computed?: TComputed & ThisType<TData & GetProps<TProps>>
}
type GetComputed<T> = {[K in keyof T]: T[K] extends () => infer R ? R : never}
type GetBasicType<T> = T extends StringConstructor
  ? string
  : T extends NumberConstructor
  ? number
  : T extends BooleanConstructor
  ? boolean
  : T extends (infer ArrayType)[]
  ? GetBasicType<ArrayType>
  : T extends {new (...args: any[]): infer R}
  ? R
  : any
type GetPropType<T> = T extends {type: infer Types} ? GetBasicType<Types> : GetBasicType<T>
type GetProps<T> = {
  [K in keyof T]: GetPropType<T[K]>
}
