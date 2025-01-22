function highestPeak(isWater: (0 | 1)[][]): number[][] {
    const m = isWater.length, n = isWater[0].length;
    const res: number[][] = new Array(m);
    for (let i = 0; i < m; i++) res[i] = new Array(n);
    const queue: [number, number][] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j]) {
                queue.push([i, j]);
                res[i][j] = 0;
            }
        }
    }
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    // queue.shift() is O(n), so we use a left pointer
    for (let left = 0; left < queue.length; ++left) {
        const [qr, qc] = queue[left];
        for (const dir of dirs) {
            const r = qr + dir[0], c = qc + dir[1];
            if (r >= 0 && c >= 0 && r < m && c < n && res[r][c] === undefined) {
                res[r][c] = res[qr][qc] + 1;
                queue.push([r, c]);
            }
        }
    }
    return res;
}
