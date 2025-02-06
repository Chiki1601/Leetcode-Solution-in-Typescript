function tupleSameProduct(nums: number[]): number {
    const arrSize: number = nums.length
    let count: number = 0
    let resMul = {}
    for(let index: number = 0; index < arrSize - 1; index++) {
        for(let i: number = index + 1; i < arrSize; i++) {
            resMul[nums[index] * nums[i]] = (resMul[nums[index] * nums[i]] || 0) + 1
        }
    }
    for(const index in resMul) {
        count += resMul[index] <= 1 ? 0 : resMul[index] * (resMul[index] - 1) * 4 
    }
    return count
};
