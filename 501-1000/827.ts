function largestIsland(grid: number[][]): number {
    const n = grid.length;
    const directions = [ [0, 1], [1, 0], [0, -1], [-1, 0] ];

    const getNeighbors = (x: number, y: number) => {
        const neighbors = [];

        for (const [dirX, dirY] of directions) {
            const nx = x + dirX;
            const ny = y + dirY;

            if (nx >= 0 && nx < n && ny >= 0 && ny < n)
                neighbors.push([nx, ny]);
        }

        return neighbors;
    };

    const markWithId = (row: number, col: number, id: number): number => {
        let islandSize = 1;

        grid[row][col] = id;

        const neighbors = getNeighbors(row, col);

        for (const [nx, ny] of neighbors) {
            if (grid[nx][ny] === 1)
                islandSize += markWithId(nx, ny, id);
        }

        return islandSize;
    };

    const islandToArea: { [id: string]: number } = {};

    const getIslandSize = (row: number, col: number): number => {
        let islandSize = 1;

        const surroundingIslands = new Set<number>();
        const neighbors = getNeighbors(row, col);

        for (const [nx, ny] of neighbors) {
            const neighborIsland = grid[nx][ny];

            if (neighborIsland >= 2)
                surroundingIslands.add(neighborIsland);
        }

        for (const island of [...surroundingIslands]) {
            islandSize += islandToArea[island];
        }

        return islandSize;
    };

    let id = 2;
    let maxIslandSize = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const val = markWithId(i, j, id);
                islandToArea[id] = val;

                maxIslandSize = Math.max(maxIslandSize, val);

                id++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {

            if (grid[i][j] === 0)
                maxIslandSize = Math.max(maxIslandSize, getIslandSize(i,j))
        }
    }

    return maxIslandSize;
}
