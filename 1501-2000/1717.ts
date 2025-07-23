function countPattern(s: string, pattern: string) {
  let count = 0;
  const stack = [];

  for (const char of s) {
    if (stack.at(-1) === pattern[0] && char === pattern[1]) {
      count++;
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return { count, s: stack.join("") };
}

function maximumGain(s: string, x: number, y: number): number {
  const [first, second] = x > y ? ["ab", "ba"] : ["ba", "ab"];

  const { count: c1, s: rest } = countPattern(s, first);
  const { count: c2 } = countPattern(rest, second);

  return c1 * Math.max(x, y) + c2 * Math.min(x, y);
}
