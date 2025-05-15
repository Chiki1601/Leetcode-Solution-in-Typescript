function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const subsequence = [words[0]];
  let lastBit = groups[0];
  for (let i = 1; i < groups.length; i++) {
    if (groups[i] !== lastBit) {
      subsequence.push(words[i]);
      lastBit = groups[i];
    }
  }
  return subsequence;
}
