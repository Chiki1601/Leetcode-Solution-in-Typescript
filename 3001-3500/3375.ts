function minOperations(nums: number[], k: number): number {
    const set = new Set<number>();
    for (const n of nums) {
        if (n < k) return -1;
        set.add(n);
    }
    return set.size - +set.has(k);
};
