function isPossibleToSplit(nums: number[]): boolean {
  const countMap: Map<number, number> = new Map();

  // Count frequencies for all numbers in nums
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // If the frequency of occurrence of some number is greater than 2,
  // we can't divide all occurrences of this number
  // into 2 arrays without repeating
  for (const count of countMap.values()) {
    if (count > 2) {
      return false;
    }
  }

  // Otherwise, it's possible to split array
  return true;
}
