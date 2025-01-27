function checkIfPrerequisite(
    numCourses: number, 
    prerequisites: number[][], 
    queries: number[][]
): boolean[] {
    // Initialize outgoing edges
    const outs = new Array<number[]>(numCourses);
    for (let i = 0; i < numCourses; ++i) {
        outs[i] = [];
    }

    // Populate indegrees and outgoing edges
    const ins = new Uint8Array(numCourses);
    for (let i = 0; i < prerequisites.length; ++i) {
        ++ins[prerequisites[i][1]];
        outs[prerequisites[i][0]].push(prerequisites[i][1]);
    }

    // Populate prerequisite matrix
    const matrix = new Array(numCourses).fill([]);
    for (let i = 0; i < numCourses; ++i) {
        if (ins[i] == 0 && matrix[i].length == 0) {
            matrix[i] = new Array(numCourses).fill(false);
            dfs(ins, outs, matrix, i);
        }
    }

    // Populate answers
    const answer = new Array<boolean>(queries.length);
    for (let i = 0; i < queries.length; ++i) {
        answer[i] = matrix[queries[i][1]][queries[i][0]] == true;
    }

    return answer;
};

function dfs(
    ins: Uint8Array, 
    outs: number[][], 
    matrix: boolean[][], 
    vertex: number
): void {
    for (const next of outs[vertex]) {
        if (matrix[next].length == 0) {
            matrix[next] = Array.from(matrix[vertex]);
        } else {
            matrix[next] = mergeRows(matrix[next], matrix[vertex]);
        }
        matrix[next][vertex] = true;
        if (--ins[next] == 0) {
            dfs(ins, outs, matrix, next);
        }
    }
}

function mergeRows(target: boolean[], source: boolean[]): boolean[] {
    const N = source.length;
    for (let i = 0; i < N; ++i) {
        target[i] ||= source[i];
    }
    return target;
}
