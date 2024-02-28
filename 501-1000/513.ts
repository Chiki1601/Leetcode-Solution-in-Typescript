function findBottomLeftValue(root: TreeNode | null): number {
  const levels: TreeNode[][] = [];

  let stack = [root];
  let level = 0;

  while (stack.length) {
    levels.push([]);
    const newStack: TreeNode[] = [];

    while (stack.length) {
      const curr = stack.shift()!;

      levels[level].push(curr);
      if (curr.left) newStack.push(curr.left);
      if (curr.right) newStack.push(curr.right);
    }

    stack = newStack;
    level++;
  }

  return levels[levels.length - 1][0].val;
}
