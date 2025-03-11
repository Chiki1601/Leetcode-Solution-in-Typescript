function numberOfSubstrings(s: string): number {
  let count = 0;
  let chars = { a: 0, b: 0, c: 0 };
  let left = 0;
  
  for (let right = 0; right < s.length; right++) {
    chars[s[right]]++;
    
    while (chars.a && chars.b && chars.c) {
      count += s.length - right;
      chars[s[left++]]--;
    }      
  }
  
  return count;
};
