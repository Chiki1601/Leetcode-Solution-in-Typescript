/**
 * TC: O(nloglog(n)), SC: O(N)
 * @param left
 * @param right
 */
function closestPrimes(left: number, right: number): number[] {
  const primes = getPrimes(left, right + 1);

  let res: number[] = [-1, -1];
  let min = Infinity;
  for (let i = 1; i < primes.length; i++) {
    if (primes[i] - primes[i - 1] < min) {
      min = primes[i] - primes[i - 1];
      res = [primes[i - 1], primes[i]];
    }
  }
  return res;
}

/**
 * Generate primes from range [left, right)
 * TC: O(nloglog(n))
 * SC: O(n)
 * @param left
 * @param right
 */
const getPrimes = (left: number, right: number): number[] => {
  const res: boolean[] = Array(right).fill(true);

  for (let i = 2; i <= Math.sqrt(right); i++) {
    if (!res[i]) continue;
    for (let j = i * i; j < right; j += i) {
      res[j] = false;
    }
  }
  // primes from [left, right)
  const primes: number[] = [];
  for (let i = Math.max(2, left); i < right; i++) {
    if (res[i]) {
      primes.push(i);
    }
  }
  return primes;
};
