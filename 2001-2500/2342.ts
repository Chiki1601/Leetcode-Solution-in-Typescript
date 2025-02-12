const sumDigits = (num: number): number =>
  num ? (num % 10) + sumDigits(Math.floor(num / 10)) : 1;

function maximumSum(nums: number[]): number {
  let res = -1;
  const groups: Record<string, Array<number>> = {};
  nums.forEach((num) => {
    const sum = sumDigits(num);
    if (sum in groups) groups[sum].push(num);
    else groups[sum] = [num];
  });
  for (const [_, nums] of Object.entries(groups)) {
    if (nums.length > 1)
      for (let i = 0; i < nums.length - 1; ++i)
        for (let j = 1; j < nums.length; ++j)
          if (i !== j) res = Math.max(res, nums[i] + nums[j]);
  }
  return res;
}
