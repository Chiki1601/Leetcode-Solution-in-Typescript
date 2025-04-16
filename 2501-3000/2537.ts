function countGood(nums: number[], k: number): number {
    let pairCount = 0;
    let freqMap = new Map();
    let result = 0;
    let l = 0;

    for(let r=0; r<nums.length; r++) {

        if(freqMap.has(nums[r])) {
            let count = freqMap.get(nums[r]);
            pairCount += count;
            freqMap.set(nums[r], count+1);
        } else {
            freqMap.set(nums[r], 1);
        }
        

        while(pairCount >= k) {
            result += nums.length - r;

            let leftCount = freqMap.get(nums[l]);
            pairCount -= (leftCount - 1);
            freqMap.set(nums[l], leftCount - 1);
            l++;
        }
    }
    return result;
}
