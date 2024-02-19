function maxOperations(nums: number[]): number {
  let i: number = 0;
  while (i < nums.length - 1 && nums[i] + nums[i + 1] == nums[0] + nums[1]) {
    i += 2;
  }
  return Math.floor(i / 2);
};
