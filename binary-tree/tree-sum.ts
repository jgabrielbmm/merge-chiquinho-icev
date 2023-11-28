import { Node } from './node'
let acc = 0

export const treeSum = (root: Node<number> | null) => {
  if(root === null) return 0
  return root.val + treeSum(root.left) + treeSum(root.right)
}