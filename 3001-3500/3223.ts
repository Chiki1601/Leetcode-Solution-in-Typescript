function minimumLength(input: string): number {
    const ALPHABET_SIZE = 26;
    const ASCII_SMALL_CASE_A = 97;
    const frequency: number[] = new Array(ALPHABET_SIZE).fill(0);
    for (let i = 0; i < input.length; ++i) {
        ++frequency[input.codePointAt(i) - ASCII_SMALL_CASE_A];
    }

    let minLengthAfterOperations = 0;
    for (let i = 0; i < ALPHABET_SIZE; ++i) {
        if (frequency[i] === 0) {
            continue;
        }
        minLengthAfterOperations += 2 >> (frequency[i] % 2);
    }

    return minLengthAfterOperations;
};
