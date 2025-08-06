function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  const n = baskets.length;
  let N = 1;
  while (N <= n) N <<= 1;

  const segTree: number[] = new Array(N << 1).fill(0);

  // Fill leaf nodes
  for (let i = 0; i < n; i++) {
    segTree[N + i] = baskets[i];
  }

  // Build segment tree (max)
  for (let i = N - 1; i > 0; i--) {
    segTree[i] = Math.max(segTree[2 * i], segTree[2 * i + 1]);
  }

  let count = 0;

  for (const fruit of fruits) {
    let index = 1;

    // If no basket can hold the fruit
    if (segTree[index] < fruit) {
      count++;
      continue;
    }

    // Traverse to leaf to find suitable basket
    while (index < N) {
      if (segTree[2 * index] >= fruit) {
        index = 2 * index;
      } else {
        index = 2 * index + 1;
      }
    }

    // Use the basket
    segTree[index] = -1;

    // Update ancestors
    while (index > 1) {
      index >>= 1;
      segTree[index] = Math.max(segTree[2 * index], segTree[2 * index + 1]);
    }
  }

  return count;
}
