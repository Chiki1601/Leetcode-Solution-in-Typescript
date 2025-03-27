function minimumIndex(nums: number[]): number {

    let maxOcc // dominant element
    let lc = 0 // left subarray dominant element count
    let rc = 0 // right subarray dominant element count

    const m: Record<string, number> = {}

    for (const n of nums){
        let tempCount = m[n] ? m[n] + 1 : 1
        m[n] = tempCount

        if (tempCount * 2 > nums.length){
            rc = tempCount
            maxOcc = n
        }
    }

    for (let i = 0; i < nums.length; i++){
        if (nums[i] === maxOcc) {
            lc++
            rc--
        }

        if (lc * 2 > i + 1 && rc * 2 > nums.length - 1 - i){
            return i
        }
    }

    return -1
};
