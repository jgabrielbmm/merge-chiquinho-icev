import {Node} from './node'

export const breadthFirstValues = (root: Node<string>) => {
  if(root === null) return []
  const result: string[] = []
  const queue = [ root ]

  while (queue.length > 0){
    const current = queue.shift()
    result.push(current?.val!)
    if(current?.left) queue.push(current.left)
    if(current?.right) queue.push(current.right)
  }

  return result
}