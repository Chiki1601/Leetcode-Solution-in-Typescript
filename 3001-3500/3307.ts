function kthCharacter(k: number, operations: number[]): string {
    return String.fromCharCode(97 + 
        Array
            .from((k - 1).toString(2))
            .reverse()
            .reduce((x, v, i) => x + Number(v) * operations[i], 0) 
        % 26
    )
}
