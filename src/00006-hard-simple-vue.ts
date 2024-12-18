// ============= Test Cases =============
import type {Equal, Expect} from './test-utils'

SimpleVue({
  data() {
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
      alert(this.amount)
      alert(this.fullname.toLowerCase())
      alert(this.getRandom())
    },
    test() {
      const fullname = this.fullname
      const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
    }
  }
})

// ============= Your Code Here =============
type ObjectDescriptor<TData, TMethods, TComputed> = {
  data?: () => TData
  methods?: TMethods & ThisType<TData & TMethods & GetComputed<TComputed>> // Type of 'this' in methods is D & M
  computed?: TComputed & ThisType<TData>
}
type GetComputed<T> = {[K in keyof T]: T[K] extends () => infer R ? R : never}
declare function SimpleVue<D, M, K>(options: ObjectDescriptor<D, M, K>): any
