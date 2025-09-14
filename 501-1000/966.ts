function spellchecker(wordlist: string[], queries: string[]): string[] {
    const exact = new Set<string>(wordlist);
    const lowerMap = new Map<string,string>();
    const vowelMap = new Map<string,string>();

    const isVowel = (c: string) => "aeiou".includes(c);
    const maskVowels = (s: string) => {
        s = s.toLowerCase();
        let out = '';
        for (const ch of s) out += isVowel(ch) ? 'a' : ch;
        return out;
    };

    for (const w of wordlist) {
        const wl = w.toLowerCase();
        if (!lowerMap.has(wl)) lowerMap.set(wl, w);
        const m = maskVowels(wl);
        if (!vowelMap.has(m)) vowelMap.set(m, w);
    }

    const ans: string[] = [];
    for (const q of queries) {
        if (exact.has(q)) { ans.push(q); continue; }
        const ql = q.toLowerCase();
        if (lowerMap.has(ql)) { ans.push(lowerMap.get(ql)!); continue; }
        const qm = maskVowels(ql);
        ans.push(vowelMap.get(qm) ?? "");
    }
    return ans;
}
