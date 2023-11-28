import { breadthFirstValues } from "./breadth-first-values"
import { depthFirstValues2 } from "./depth-first-values"
import { treeIncludes, treeIncludes2 } from "./tree-includes"
import { treeSum } from "./tree-sum"

export class Node<T> {
  public val: T 
  public left: Node<T> | null 
  public right: Node<T> | null 

  constructor(val: T, left?:Node<T>, right?: Node<T>){
    this.val = val
    this.left = left ?? null
    this.right = right ?? null
  }
}

// const a = new Node<string>('a')
// const b = new Node<string>('b')
// const c = new Node<string>('c')
// const d = new Node<string>('d')
// const e = new Node<string>('e')
// const f = new Node<string>('f')

// a.left = b
// a.right = c
// b.left = d
// b.right = e
// c.right = f


const a = new Node<number>(3)
const b = new Node<number>(11)
const c = new Node<number>(4)
const d = new Node<number>(4)
const e = new Node<number>(2)
const f = new Node<number>(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

console.log(treeSum(a))
