function findMaxFish(matrix: number[][]): number {
    this.rows = matrix.length;
    this.columns = matrix[0].length;

    this.LAND_POINT = 0;
    this.moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    return findMaxCollectFishFromConnectedWaterPoints(matrix);
};

class Point {
    constructor(public row: number, public column: number) { }
}

function findMaxCollectFishFromConnectedWaterPoints(matrix: number[][]): number {
    const visited = Array.from(new Array(this.rows), () => new Array(this.columns).fill(false));
    let maxCollectFishFromConnectedWaterPoints = 0;

    for (let r = 0; r < this.rows; ++r) {
        for (let c = 0; c < this.columns; ++c) {
            if (!visited[r][c] && matrix[r][c] !== this.LAND_POINT) {

                maxCollectFishFromConnectedWaterPoints
                    = Math.max(maxCollectFishFromConnectedWaterPoints,
                        collectFishFromConnectedWaterPoints(new Point(r, c), matrix, visited));
            }
        }
    }

    return maxCollectFishFromConnectedWaterPoints;
}

function collectFishFromConnectedWaterPoints(start: Point, matrix: number[][], visited: boolean[][]): number {
    const { Queue } = require('@datastructures-js/queue');
    const queue = new Queue();
    queue.enqueue(start);

    visited[start.row][start.column] = true;
    let collectedFish = 0;

    while (!queue.isEmpty()) {

        const current = queue.dequeue();
        collectedFish += matrix[current.row][current.column];

        for (let move of this.moves) {
            let nextRow = current.row + move[0];
            let nextColumn = current.column + move[1];

            if (isInMatrix(nextRow, nextColumn) && !visited[nextRow][nextColumn]
                && matrix[nextRow][nextColumn] !== this.LAND_POINT) {
                visited[nextRow][nextColumn] = true;
                queue.enqueue(new Point(nextRow, nextColumn));
            }
        }
    }
    return collectedFish;
}

function isInMatrix(row: number, column: number): boolean {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
