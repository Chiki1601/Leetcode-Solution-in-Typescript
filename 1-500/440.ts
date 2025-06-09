function findKthNumber(n: number, k: number): number {
    let current = 1;
    k--;

    while (k > 0) {
        const count = countSteps(n, current, current + 1);
        if (count <= k) {
            current++;
            k -= count;
        } else {
            current *= 10;
            k--;
        }
    }

    return current;
}

function countSteps(n: number, curr: number, next: number): number {
    let steps = 0;
    while (curr <= n) {
        steps += Math.min(n + 1, next) - curr;
        curr *= 10;
        next *= 10;
    }
    return steps;
}
