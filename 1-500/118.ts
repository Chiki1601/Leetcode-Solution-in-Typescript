function generate(numRows: number): number[][] {
    if (numRows == 0) return []
    if (numRows == 1) return [[1]]

    const triangle: number[][] = [[1], [1,1]]

    for (let i = 2; i < numRows; i++) {
        let prev = triangle[i-1]

        let newRow = [1]
        for (let j = 1; j < prev.length; j++) {
            newRow.push(prev[j-1] + prev[j])
        }
        newRow.push(1)

        triangle.push(newRow)
    }

    return triangle
};
