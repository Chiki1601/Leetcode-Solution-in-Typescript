function minOperations(input: number[]): number {
    const IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE = -1;
    let countFlips = 0;

    for (let i = 0; i < input.length; ++i) {
        if (input[i] === 1) {
            continue;
        }
        if (i + 2 > input.length - 1) {
            return IMPOSSIBLE_TO_MAKE_ALL_ELEMENTS_EQUAL_TO_ONE;
        }
        input[i + 1] ^= 1;
        input[i + 2] ^= 1;
        ++countFlips;
    }

    return countFlips;
};
