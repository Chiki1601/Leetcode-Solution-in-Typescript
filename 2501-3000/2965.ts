function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let dp: number[] = new Array(Math.pow(grid.length, 2) + 1).fill(0)

    for (let num of grid.flat())
        dp[num] += 1

    return [dp.indexOf(2), dp.lastIndexOf(0)]
};
