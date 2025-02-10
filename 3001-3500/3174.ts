function clearDigits(input: string): string {
    const clearDigits: string[] = new Array();
    
    for (let current of input) {
        if (isDigit(current) && clearDigits.length > 0) {
            clearDigits.pop();
            continue;
        }
        clearDigits.push(current);
    }
    
    return clearDigits.join('');
};

function isDigit(char: string): boolean {
    return char >= '0' && char <= '9';
}
