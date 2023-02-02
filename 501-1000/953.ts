function isAlienSorted(words: string[], order: string): boolean {
  for (let i = 0; i < words.length - 1; i++) {
    const [wordOne, wordTwo]: string[] = [words[i], words[i+1]];
    for (let j = 0; j < wordOne.length; j++) {
      const [characterOne, characterTwo]: string[] = [wordOne[j], wordTwo[j]];
      if (characterOne !== characterTwo) {
        if (order.indexOf(characterOne) > order.indexOf(characterTwo)) {
          return false;
        }
        break;
      }
    }
  }
  return true;
}
