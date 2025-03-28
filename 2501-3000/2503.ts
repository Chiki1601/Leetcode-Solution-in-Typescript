const sets = Array<number>(1e5);

function root(x: number): number {
  while (sets[x] >= 0) x = sets[x];
  return x;
}

function union(x: number, y: number): void {
  x = root(x);
  y = root(y);
  if (x === y) return;
  
  if (sets[x] <= sets[y]) {
    sets[x] += sets[y];
    sets[y] = x;
  } else {
    sets[y] += sets[x];
    sets[x] = y;
  }
}

function maxPoints(grid: number[][], queries: number[]): number[] {
  const m = grid.length;
  const n = grid[0].length;
  const mn = m * n;

  const queryIndexes = queries
    .map((_, i) => i)
    .sort((a, b) => queries[a] - queries[b]);

  const gridIndexes = Array.from({ length: mn }, (_, i) => i).sort(
    (a, b) => grid[(a / n) | 0][a % n] - grid[(b / n) | 0][b % n]
  );

  const ans = Array(queries.length);
  let gridIndex = 0;

  sets.fill(-1, 0, mn);

  for (const queryIndex of queryIndexes) {
    const query = queries[queryIndex];

    while (gridIndex < mn) {
      const i = (gridIndexes[gridIndex] / n) | 0;
      const j = gridIndexes[gridIndex] % n;

      if (grid[i][j] >= query) break;

      const id = i * n + j;
      if (i > 0 && grid[i - 1][j] < query) union(id, id - n);
      if (j > 0 && grid[i][j - 1] < query) union(id, id - 1);
      if (i + 1 < m && grid[i + 1][j] < query) union(id, id + n);
      if (j + 1 < n && grid[i][j + 1] < query) union(id, id + 1);

      ++gridIndex;
    }
    
    ans[queryIndex] = grid[0][0] < query ? -sets[root(0)] : 0;
  }

  return ans;
}
