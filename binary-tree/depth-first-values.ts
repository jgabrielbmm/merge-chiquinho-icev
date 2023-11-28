import {Node} from './node'

export const depthFirstValues1 = (root: Node<string>) =>{
  if(root === null) return []

  const result: string[] = []
  const stack = [root]
  while(stack.length > 0){
    const current = stack.pop()
    result.push(current?.val!)

    if(current?.right) stack.push(current?.right)
    if(current?.left) stack.push(current?.left)
  }

  return result
} 

export const depthFirstValues2 = (root: Node<string> | null) =>{
 if(root === null) return []
 const result: string[] = []
 result.push(root?.val)
 const leftValues = depthFirstValues2(root?.left)
 const rightValues = depthFirstValues2(root?.right)
 return [root.val, ...leftValues, ...rightValues]
} 