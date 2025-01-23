function countServers(grid: number[][]): number {
  const hasCommunication = (x: number, y: number): 1 | 0 => {
    // Check Y Axis
    for (let i = 0; i < grid.length; i++) {
      if (grid[i][y] && x !== i) {
        return 1;
      }
    }

    // Check X Axis
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[x][j] && y !== j) {
        return 1;
      }
    }

    return 0;
  };

  let ans = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        ans += hasCommunication(i, j);
      }
    }
  }

  return ans;
}
