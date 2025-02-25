function numOfSubarrays(arr: number[]): number {
  const MOD = 10**9 + 7;
  let ans = 0;
  let odd = 0;
  let even = 0;
  for (let e of arr) {
    const isOdd = e % 2 === 1;
    if (isOdd) {
      const temp = odd;
      odd = even + 1;
      even = temp;
    } else {
      even += 1;
    }
    ans = (ans + odd) % MOD;
  }
  return ans;
}
