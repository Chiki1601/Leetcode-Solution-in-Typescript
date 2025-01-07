function stringMatching(words: string[]): string[] {
    let result: string[] = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (j === i) continue;
            if (words[i].includes(words[j]) && !result.includes(words[j])) result.push(words[j]);
        }
    }
    return result;
}
