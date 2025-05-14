function lengthAfterTransformations(s: string, t: number, nums: number[]): number {
    const MOD = BigInt(1_000_000_007);
    const ALPHABET = 26;

    // Build transformation matrix M where M[i][j] = how many times character i turns into j in 1 step
    const M: bigint[][] = Array.from({ length: ALPHABET }, () => Array(ALPHABET).fill(0n));

    for (let i = 0; i < ALPHABET; i++) {
        for (let j = 1; j <= nums[i]; j++) {
            const to = (i + j) % ALPHABET;
            M[i][to] = (M[i][to] + 1n) % MOD;
        }
    }

    // Matrix multiplication (A * B)
    const multiply = (A: bigint[][], B: bigint[][]): bigint[][] => {
        const res: bigint[][] = Array.from({ length: ALPHABET }, () => Array(ALPHABET).fill(0n));
        for (let i = 0; i < ALPHABET; i++) {
            for (let k = 0; k < ALPHABET; k++) {
                if (A[i][k] === 0n) continue;
                for (let j = 0; j < ALPHABET; j++) {
                    res[i][j] = (res[i][j] + A[i][k] * B[k][j]) % MOD;
                }
            }
        }
        return res;
    };

    // Matrix exponentiation: M^t
    const matrixPower = (base: bigint[][], exp: number): bigint[][] => {
        let result: bigint[][] = Array.from({ length: ALPHABET }, (_, i) =>
            Array.from({ length: ALPHABET }, (_, j) => (i === j ? 1n : 0n))
        );

        while (exp > 0) {
            if (exp % 2 === 1) {
                result = multiply(result, base);
            }
            base = multiply(base, base);
            exp = Math.floor(exp / 2);
        }

        return result;
    };

    const poweredMatrix = matrixPower(M, t);

    // Initial frequency vector: how many times each letter appears in `s`
    const V: bigint[] = Array(ALPHABET).fill(0n);
    for (const ch of s) {
        V[ch.charCodeAt(0) - 97]++;
    }

    // Multiply vector V * M^t to get final frequency of each letter
    const finalVector: bigint[] = Array(ALPHABET).fill(0n);
    for (let i = 0; i < ALPHABET; i++) {
        for (let j = 0; j < ALPHABET; j++) {
            finalVector[j] = (finalVector[j] + V[i] * poweredMatrix[i][j]) % MOD;
        }
    }

    // Sum of all characters after t transformations
    const total = finalVector.reduce((sum, val) => (sum + val) % MOD, 0n);
    return Number(total);
}
