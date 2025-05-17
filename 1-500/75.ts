/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    // Count
    let a = nums.filter(num => num === 0).length
    let b = nums.filter(num => num === 1).length
    let c = nums.filter(num => num === 2).length

    // Declaration
    let i = 0

    // Loop
    for(let j = 0; j < a; j++){
        nums[i] = 0;
        i++;
    }
    for(let j = 0; j < b; j++){
        nums[i] = 1;
        i++;
    }
    for(let j = 0; j < c; j++){
        nums[i] = 2;
        i++;
    }
};
