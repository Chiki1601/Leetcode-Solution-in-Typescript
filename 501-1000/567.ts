// Sliding window - O(26*n) time; O(1) space;
function checkInclusion(s1: string, s2: string): boolean {
  if (!s1.length) return true;
  if (s2.length < s1.length) return false;

  const s1Map = new Map<string, number>(); // num --> count - O(26) -> O(1) space
  const s2Map = new Map<string, number>(); // num --> count - O(26) -> O(1) space
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    s1Map.set(char1, (s1Map.get(char1) ?? 0) + 1);
    const char2 = s2[i];
    s2Map.set(char2, (s2Map.get(char2) ?? 0) + 1);
  }

  const hasAllMatches = () => {
    let result = true;
    for (const [char, count] of s1Map) {
      if (!s2Map.has(char) || s2Map.get(char)! !== count) {
        result = false;
      }
    }
    return result;
  };

  for (let i = s1.length; i < s2.length; i++) {
    if (hasAllMatches()) return true;
    const char = s2[i];
    s2Map.set(char, (s2Map.get(char) ?? 0) + 1);
    const lChar = s2[i - s1.length]; // get the first index of the window
    s2Map.set(lChar, s2Map.get(lChar)! - 1);
  }
  if (hasAllMatches()) return true;

  return false;
}

// Sliding window, extra counter - O(n) time; O(1) space;
function checkInclusion1(s1: string, s2: string): boolean {
  if (!s1.length) return true;
  if (s2.length < s1.length) return false;

  const s1Map = new Map<string, number>(); // num --> count - O(26) -> O(1) space
  const s2Map = new Map<string, number>(); // num --> count - O(26) -> O(1) space
  for (let i = 0; i < s1.length; i++) {
    const char1 = s1[i];
    s1Map.set(char1, (s1Map.get(char1) ?? 0) + 1);
    const char2 = s2[i];
    s2Map.set(char2, (s2Map.get(char2) ?? 0) + 1);
  }

  const matches = (char: string): boolean => {
    return s1Map.get(char) === s2Map.get(char);
  };
  const hasAllMatches = () => {
    return matchesCount === s1Map.size;
  };

  let matchesCount = 0;
  s1Map.forEach((_, char) => {
    if (matches(char)) matchesCount++;
  });

  for (let i = s1.length; i < s2.length; i++) {
    if (hasAllMatches()) return true;
    const char = s2[i];
    if (s1Map.has(char)) {
      const prevMatches = matches(char);
      s2Map.set(char, (s2Map.get(char) ?? 0) + 1);
      const newMatches = matches(char);
      if (!prevMatches && newMatches) matchesCount++;
      if (prevMatches && !newMatches) matchesCount--;
    }
    const lChar = s2[i - s1.length]; // get the first index of the window
    if (s1Map.has(lChar)) {
      const prevMatches = matches(lChar);
      s2Map.set(lChar, s2Map.get(lChar)! - 1);
      const newMatches = matches(lChar);
      if (!prevMatches && newMatches) matchesCount++;
      if (prevMatches && !newMatches) matchesCount--;
    }
  }
  if (hasAllMatches()) return true;

  return false;
}
