function missingNumber(nums: number[]): number {
    
    const sorted = nums.sort((a, b) => a - b);
    
    if (sorted[0] !== 0) return 0;
    
    for (let num = 0; num < sorted.length; num++) {
        let curr = sorted[num];
        let next = sorted[num + 1];
        
        if (curr + 1 !== next) return curr + 1;
    }
    
    return sorted[sorted.length -1] + 1;

};
