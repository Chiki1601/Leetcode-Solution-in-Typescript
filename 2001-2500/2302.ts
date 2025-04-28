function countSubarrays(nums: number[], k: number): number {
    let res = 0
    let currSum = 0

    for(let start = 0, end = 0; end < nums.length; end += 1) {
        currSum += nums[end]
        // Fix end point, move start point forward untill satisfy the condition
        while( start <= end && currSum * (end-start+1) >= k ) {
            currSum -= nums[start]
            start += 1
        }
        // add list of subarray END at end point
        res += end - start + 1
    }
    return res
};
