function maxIncreasingSubarrays(nums: number[]): number {
    let n = nums.length, up = 1, preUp = 0, res = 0;
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i-1]) up++;
        else {
            preUp = up;
            up = 1;
        }
        let half = up >> 1;
        let m = Math.min(preUp, up);
        let candidate = Math.max(half, m);
        if (candidate > res) res = candidate;
    }
    return res;
}
