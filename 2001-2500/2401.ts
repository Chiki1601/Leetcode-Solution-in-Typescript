function longestNiceSubarray(nums: number[]): number {
    let left: number = 0;
    let currAND: number = 0;
    let maxLength: number = 0;
    
    for (let right: number = 0; right < nums.length; right++) {
        while ((currAND & nums[right]) !== 0) {
            currAND ^= nums[left];
            left += 1;
        }
        currAND |= nums[right];
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;    
};
