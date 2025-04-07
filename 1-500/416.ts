function f(index, target, nums, dp) {
    if (target === 0) {
        return true;
    }
    if (index === 0) return nums[0] === target;
    if (dp[index][target] !== -1) return dp[index][target];
    
    let notTake = f(index-1, target, nums, dp);
    let take = false;
    if (nums[index] <= target) {
        take = f(index-1, target-nums[index], nums, dp);
    }
    return dp[index][target] = take || notTake;
}

function canPartition(nums: number[]): boolean {
    let totSum = 0;
    for(let i = 0; i<nums.length; i++) {
        totSum += nums[i];
    }
    if (totSum % 2 != 0) return false;
    let dp = [];
    for(let i = 0; i< nums.length; i++) {
        dp[i] = [];
     for(let k = 0; k<= totSum/2; k++) {
        dp[i][k] = -1;
     }
    }
 return f(nums.length-1, totSum/2, nums, dp);
};
