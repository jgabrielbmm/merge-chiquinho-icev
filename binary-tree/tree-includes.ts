import { Node } from './node'

export const treeIncludes = (root: Node<string>, target: string) => {
    if(root === null) return false

    const queue = [ root ]

    while (queue.length > 0){
        const current = queue.shift()
        if(current?.val && current.val === target) return true

        if(current?.left) queue.push(current.left)
        if(current?.right) queue.push(current.right)
    }

    return false
}

export const treeIncludes2 = (root: Node<string> | null, target: string) => {
    if(root === null) return false
    if(root.val === target) return true 
    return treeIncludes2(root.left, target) || treeIncludes2(root.right, target)
}

