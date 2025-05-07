function minTimeToReach(moveTime: number[][]): number {
    const UP = [-1, 0];
    const DOWN = [1, 0];
    const LEFT = [0, -1];
    const RIGHT = [0, 1];

    this.MOVES = [UP, DOWN, LEFT, RIGHT];

    this.rows = moveTime.length;
    this.columns = moveTime[0].length;

    this.startRow = 0;
    this.startColumn = 0;

    this.targetRow = this.rows - 1;
    this.targetColumn = this.columns - 1;

    return dijkstraSearchForPathWithMinTime(moveTime);
};

class Step {

    row: number;
    column: number;
    timeFromStart;

    constructor(row, column, timeFromStart) {
        this.row = row;
        this.column = column;
        this.timeFromStart = timeFromStart;
    }
}

function dijkstraSearchForPathWithMinTime(moveTime: number[][]): number {
    const minHeapForTime = new MinPriorityQueue({ compare: (x, y) => x.timeFromStart - y.timeFromStart });
    minHeapForTime.enqueue(new Step(this.startRow, this.startColumn, 0));

    const minTimeMatrix: number[][] = Array.from(new Array(this.rows), () => new Array(this.columns).fill(Number.MAX_SAFE_INTEGER));
    minTimeMatrix[this.startRow][this.startColumn] = 0;

    while (!minHeapForTime.isEmpty()) {
        const current = minHeapForTime.dequeue();
        if (current.row === this.targetRow && current.column === this.targetColumn) {
            break;
        }

        for (let move of this.MOVES) {
            const nextRow = current.row + move[0];
            const nextColumn = current.column + move[1];
            if (!isInMatrix(nextRow, nextColumn)) {
                continue;
            }

            const nextValueForTime = Math.max(1 + current.timeFromStart, 1 + moveTime[nextRow][nextColumn]);

            if (minTimeMatrix[nextRow][nextColumn] > nextValueForTime) {
                minTimeMatrix[nextRow][nextColumn] = nextValueForTime;
                minHeapForTime.enqueue(new Step(nextRow, nextColumn, nextValueForTime));
            }
        }
    }

    return minTimeMatrix[this.targetRow][this.targetColumn];
}

function isInMatrix(row: number, column: number): boolean {
    return row >= 0 && row < this.rows && column >= 0 && column < this.columns;
}
