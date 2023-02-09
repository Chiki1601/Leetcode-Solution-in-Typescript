function distinctNames(ideas: string[]): number {
    const hash = {}
    for(let i = 0; i < 26; i ++) {
        hash[i] = new Set()
    }
    for(const idea of ideas) {
        const charCode = idea.charCodeAt(0) - "a".charCodeAt(0)
        hash[charCode].add(idea.substring(1))
    }
    let result = 0
    for(let i = 0; i < 26; i ++) {
        for(let j = i + 1; j < 26; j ++) {
            const k = getIntersection(hash[i], hash[j])
            result += 2 * (hash[i].size - k) * (hash[j].size - k)
        }
    }
    return result
};

function getIntersection (setA: Set<string>, setB: Set<string>) {
    let result = 0
    for(const item of setA) {
        if(setB.has(item)) {
            result += 1
        }
    }
    return result
}
