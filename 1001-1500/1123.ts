function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    const dfs = (node: TreeNode | null): { lca: TreeNode | null, depth: number } => {
        if (!node) return { lca: null, depth: -1 }

        const left = dfs(node.left)
        const right = dfs(node.right)

        if (left.depth === right.depth) {
            return { lca: node, depth: left.depth + 1 }
        } else if (left.depth > right.depth) {
            return { lca: left.lca, depth: left.depth + 1 }
        } else {
            return { lca: right.lca, depth: right.depth + 1 }
        }
    }

    return dfs(root).lca
}
