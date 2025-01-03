function waysToSplitArray(nums: number[]): number {
    const prefix = [nums[0]];
    let valid = 0;

    for (let i = 1; i < nums.length; i++) {
        prefix.push(nums[i] + prefix[prefix.length-1]);
    }

    for (let i = 0; i < prefix.length-1; i++) {
        const left = prefix[i];
        const right = prefix[prefix.length-1] - left;

        if (left >= right) {
            valid++;
        }
    }

    return valid;
};
