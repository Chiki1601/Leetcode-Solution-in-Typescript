function prefixCount(words: string[], pref: string): number {
    const wordsContainPref = words.filter(word => word.startsWith(pref));
    return wordsContainPref.length;
};
