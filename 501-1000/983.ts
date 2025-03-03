function mincostTickets(days: number[], costs: number[]): number {
  const dp = new Array(days[days.length - 1] + 1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    if (days.includes(i)) {
      dp[i] = Math.min(
        dp[i - 1] + costs[0],
        dp[Math.max(0, i - 7)] + costs[1],
        dp[Math.max(0, i - 30)] + costs[2]
      );
    } else {
      dp[i] = dp[i - 1];
    }
  }

  return dp.pop();
}
