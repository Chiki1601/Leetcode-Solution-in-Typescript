function xorAllNums(nums1: number[], nums2: number[]): number {
    let nums1ValuesCancel = nums2.length % 2 === 0;
    let nums2ValuesCancel = nums1.length % 2 === 0;
    if (nums1ValuesCancel && nums2ValuesCancel) {
        return 0;
    } else if (nums1ValuesCancel) {
        return xorArray(nums2);
    } else if (nums2ValuesCancel) {
        return xorArray(nums1);
    } else {
        return xorArray(nums1) ^ xorArray(nums2);
    }
};

// xorArray bitwise XORs all numbers in an array
function xorArray(nums: number[]): number {
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        res = res ^ nums[i];
    }
    return res;
}
