/*
  3 - Omit
  -------
  by Anthony Fu (@antfu) #medium #union #built-in

  ### Question

  Implement the built-in `Omit<T, K>` generic without using it.

  Constructs a type by picking all properties from `T` and then removing `K`

  For example

  ```ts
  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>

  const todo: TodoPreview = {
    completed: false,
  }
  ```

  > View on GitHub: https://tsch.js.org/3
*/

/* _____________ Your Code Here _____________ */

type Q<T extends Record<PropertyKey, any>, U> = T extends Record<infer X, any> ? X extends U ? never : X : never;
type MyOmit<T extends Record<PropertyKey, any>, U extends keyof T> = {[z in  Q<T, U>]:  T[z]}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]
type d = MyOmit<Todo, 'description'>

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

// type B<T extends Record<PropertyKey, any>, U> = T extends Record<infer X, any> ? X extends U ? never: {[w in X]: T[X]}  : never;


interface Todo {
  title: string
  description: string
  completed: boolean
}
type c = MyOmit<Todo, 'title'>

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/3/answer
  > View solutions: https://tsch.js.org/3/solutions
  > More Challenges: https://tsch.js.org
*/
