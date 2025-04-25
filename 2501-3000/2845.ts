function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const n = nums.length;
    let prefixCount = 0;
    const prefixMap = new Map<number, number>();
    prefixMap.set(0, 1);
    
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        if (nums[i] % modulo === k) {
            prefixCount++;
        }
        
        const currentMod = prefixCount % modulo;
        
        const targetMod = (currentMod - k + modulo) % modulo;
        
        if (prefixMap.has(targetMod)) {
            count += prefixMap.get(targetMod)!;
        }
        
        prefixMap.set(currentMod, (prefixMap.get(currentMod) || 0) + 1);
    }
    
    return count;
};
