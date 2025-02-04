function maxAscendingSum(nums: number[]): number {
    let maxSum = 0;
    let currSum = 0;
    let j = 0;

    while (j < nums.length) {
        if (j > 0 && nums[j] > nums[j - 1]) {
            currSum += nums[j];
        } else {
            currSum = nums[j];
        }

        if (currSum > maxSum) {
            maxSum = currSum;
        }

        j++;
    }

    return maxSum;
};
