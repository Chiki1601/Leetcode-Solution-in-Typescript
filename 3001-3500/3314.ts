function minBitwiseArray(nums: number[]): number[] {
    const ans: number[] = []

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        let found = false

        for (let candidate = 0; candidate < num; candidate++) {
            if (((candidate + 1) | candidate) === num) {
                ans.push(candidate)
                found = true
                break
            }
        }
        if (!found) {
            ans.push(-1)
        }

    }

    return ans
};
