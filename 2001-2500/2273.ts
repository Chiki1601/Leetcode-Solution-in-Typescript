function removeAnagrams(words: string[]): string[] {
    let i = words.length - 1;

    const freq = new Uint8Array(26).fill(0);

    while(i > 0) {
        const w1 = words[i], w2 = words[i-1];
        const len = w1.length;

        if(w2.length !== len) {
            i--;
            continue;
        }

        for(let c = 0; c < len; c++) {
            freq[w1.charCodeAt(c) - 97]++
            freq[w2.charCodeAt(c) - 97]--
        }

        let matches = true;

        for(let f = 0; f < 26; f++) {
            if(freq[f] !== 0) {
                matches = false;
                break;
            }
        }
        
        if(matches) {
            words.splice(i, 1);
        }

        // Empty the frequency map for the next comparison
        freq.fill(0);

        i--;
    }

    return words;
};
