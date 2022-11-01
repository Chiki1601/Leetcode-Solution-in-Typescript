function findBall(grid: number[][]): number[] {
  const answer = [];
  for(let i = 0 ; i < grid[0].length ; i++)
    answer[i] = dfs(0, i, grid);
  return answer;
};

function dfs(row: number, column: number, grid: number[][]) {
  if(row === grid.length)
    return column;
  if(isBlockedEdge(row, column, grid) || isVShaped(row, column, grid))
    return -1;
  return dfs(row + 1, column + grid[row][column], grid);
}

function isBlockedEdge(row, column, grid){
  return grid[row][column] === 1 && column === grid[0].length - 1 || grid[row][column] === -1 && column === 0;
}

function isVShaped(row, column, grid){
  return grid[row][column] === 1 && grid[row][column + 1] === -1 || grid[row][column] === -1 && grid[row][column - 1] === 1;
}
