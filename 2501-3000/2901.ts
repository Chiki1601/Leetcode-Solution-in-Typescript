function isOneCharDiff(s1: string, s2: string) {
    let diff = false;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            if (diff) {
                return false;
            }
            diff = true;
        }
    }

    return diff;
}

function getWordsInLongestSubsequence(words: string[], groups: number[]): string[] {
    const dp = [1];
    const prev = [-1];  // Saves a loop

    let maxLen = 1;
    let iMaxLen = 0;

    let curGroup: number;
    let curWord: string;

    let curLen: number;
    let curPrev: number;

    for (let i = 1; i < words.length; i++) {
        curGroup = groups[i];
        curWord = words[i];
        curLen = 1;
        curPrev = -1;

        // Go backwards with DP
        for (let j = i - 1; j >= 0; j--) {
            if (curWord.length != words[j].length) {
                continue;
            }

            if (curGroup == groups[j]) {
                continue;
            }

            if (curLen > dp[j]) {
                continue;
            }

            if (!isOneCharDiff(curWord, words[j])) {
                continue;
            }

            curLen = 1 + dp[j];
            curPrev = j;
        }

        dp.push(curLen);
        prev.push(curPrev);

        if (curLen > maxLen) {
            maxLen = curLen;
            iMaxLen = i;
        }
    }

    // Build the result recursively
    const result = [];

    function buildResult(i) {
        if (i === -1) {
            return;
        }
        buildResult(prev[i]);
        result.push(words[i]);
    };

    buildResult(iMaxLen);

    return result;
};
