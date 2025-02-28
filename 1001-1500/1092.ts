function shortestCommonSupersequence(str1: string, str2: string): string {
    const lcs = getLongestCommonSubseq(str1, str2);
    let res = "";

    let str1Ptr = 0;
    let str2Ptr = 0;
    for (const char of lcs) {
        while (str1[str1Ptr] !== char) {
            res += str1[str1Ptr++];
        }
        while (str2[str2Ptr] !== char) {
            res += str2[str2Ptr++];
        }
        res += char;
        str1Ptr++; str2Ptr++;
    }

    while (str1Ptr < str1.length) {
        res += str1[str1Ptr++];
    }
    while (str2Ptr < str2.length) {
        res += str2[str2Ptr++];
    }

    return res;
};

function getLongestCommonSubseq(str1: string, str2: string): string {
    // dp[i][j] is longest subseq up to i^th char of str1
    // and j^th char of str2
    const dp: Array<Array<string>>
        = new Array(str1.length + 1).fill(0).map(_ => new Array(str2.length + 1).fill(""));

    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str2.length + 1; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + str1[i - 1];
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length
                    ? dp[i - 1][j]
                    : dp[i][j - 1];
            }
        }
    }

    return dp[str1.length][str2.length];
}
