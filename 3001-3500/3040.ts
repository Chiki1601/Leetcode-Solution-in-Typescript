function maxOperations(nums: number[]): number {
  let maxScore = 1;
  const l = nums.length;
  const sumSet = new Set<number>();
  
  //take distinct sums
  sumSet.add(nums[0] + nums[1]);
  sumSet.add(nums[l - 2] + nums[l - 1]);
  sumSet.add(nums[0] + nums[l - 1]);
  
  //for each sum find score, store max
  sumSet.forEach(sum => {
    const dp =  Array(l).fill(Array(l).fill(-1));
    const score = computeScoreForSum(0, l - 1, sum, nums, dp);
    maxScore = score > maxScore ? score : maxScore;
  })

  return maxScore;
};

function computeScoreForSum(i: number, j: number, sum: number, nums: number[], dp: Array<Array<number>>): number {
  if (i < j && i >= 0 && j < nums.length) {
    //DP hit case
    if (dp[i][j] !== -1) {
      return dp[i][j];
    }
    let sc1 = 0, sc2 = 0, sc3 = 0;
    //Recursively find down the tree
    if (functionOP1Score(i, nums) === sum) {
      sc1 = 1 + computeScoreForSum(i + 2, j, sum, nums, dp);
    }
    if (functionOP2Score(i, j, nums) === sum) {
      sc2 = 1 + computeScoreForSum(i + 1, j - 1, sum, nums, dp);
    }
    if (functionOP3Score(j, nums) === sum) {
      sc3 = 1 + computeScoreForSum(i, j - 2, sum, nums, dp);
    }
    //cache maximum as score
    dp[i][j] = Math.max(sc1, sc2, sc3);
    return dp[i][j];
  }
  return 0;
}
function functionOP1Score(i: number, nums: number[]): number {
  return nums[i] + nums[i + 1];
}
function functionOP2Score(i: number, j: number, nums: number[]): number {
  return nums[i] + nums[j];
}
function functionOP3Score(j: number, nums: number[]): number {
  return nums[j - 1] + nums[j];
}
