function increasingTriplet(nums: number[]): boolean {
  let min1: number = Infinity,
    min2: number = Infinity;

  for (let N of nums) {
    if (N <= min1) min1 = N;
    else if (N <= min2) min2 = N;
    else return true;
  }

  return false;
}
