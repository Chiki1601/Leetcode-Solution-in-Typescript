function gridGame(grid: number[][]): number {

    let prefixSums = new Array(grid[0].length + 1).fill(0)
    
    for(let i = grid[0].length-1; i >= 0; i--){
        prefixSums[i] = grid[0][i] + prefixSums[i+1]
    }
    
    let bottom = 0
    let minResult = Infinity
    for(let i = 0; i < grid[0].length;i++){
        let side = prefixSums[i+1]
        let robotTwoMax = Math.max(side, bottom)
        minResult = Math.min(minResult,robotTwoMax)
        bottom += grid[1][i]
    }
    return minResult
};
