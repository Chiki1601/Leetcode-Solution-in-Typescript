function lastNonEmptyString(s: string): string {
    const charIndexesMap = new Map<string, number[]>();
        
    for (let i = 0; i < s.length; i++) {
        if (!charIndexesMap.has(s[i])) charIndexesMap.set(s[i], []);
        charIndexesMap.get(s[i]).push(i);
    }
    
    
    let max = 0, maxChars = [];
    for (const [char, indexes] of charIndexesMap.entries()) {
        if (indexes.length > max) {
            max = indexes.length;
            maxChars = [char];
        } else if (indexes.length === max) {
            maxChars.push(char);
        }
    }
    
    const lastRemovedChars = [];
    for (const char of maxChars) {
        const indexes = charIndexesMap.get(char);
        
        lastRemovedChars.push({
            char,
            index: indexes[indexes.length - 1],
        })
    }
    
    lastRemovedChars.sort((a, b) => a.index - b.index);
    
    return lastRemovedChars.map(x => x.char).join('');
};
