function countSubarrays(nums: number[], minK: number, maxK: number): number {
    let res = 0, bad = -1, left = -1, right = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) bad = i;
        if (nums[i] === minK) left = i;
        if (nums[i] === maxK) right = i;
        res += Math.max(0, Math.min(left, right) - bad);
    }
    return res;
}
