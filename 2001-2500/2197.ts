function gcd(a: number, b: number): number {
    while (b !== 0) {
        const tmp = b;
        b = a % b;
        a = tmp;
    }
    return a;
}

function replaceNonCoprimes(nums: number[]): number[] {
    const result: number[] = [];
    for (const num of nums) {
        result.push(num);
        while (result.length > 1) {
            const a = result[result.length - 1];
            const b = result[result.length - 2];
            const g = gcd(a, b);
            if (g > 1) {
                result.pop();
                result.pop();
                const lcm = Math.floor(a / g * b);
                result.push(lcm);
            } else {
                break;
            }
        }
    }
    return result;
}
