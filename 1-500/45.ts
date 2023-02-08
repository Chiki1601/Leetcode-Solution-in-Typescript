function jump(nums: number[]): number {
    if(nums.length <= 1) return 0;
    let m = 0;
    let jumps = [];
    for(let i = 0;i < nums.length; i++) {
        if(i+nums[i] >= nums.length-1) {
            jumps.push(i+nums[i]);
            return jumps.length;
        }
        
        if(i + nums[i] > m) {
            m = i + nums[i];
        }
        if(i == jumps[jumps.length-1] || jumps.length == 0) {
            jumps.push(m);
        }
    }
};
