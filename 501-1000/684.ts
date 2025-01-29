class DSU {
    private parent: number[];
    private rank: number[];

    constructor(n: number) {
        // Disjoint Set Union
        this.parent = Array(n + 1).fill(0);
        this.rank = Array(n + 1).fill(0);

        // Initialize each element to be its own parent,
        // and set rank to 0.
        for (let i = 1; i <= n; i++) {
            this.parent[i] = i;
            this.rank[i] = 0;
        }
    }

    // Find the representative (parent) of a set for a given 
    // element x.
    find(x: number): number {
        // If x is its own parent, it's the representative.
        if (x === this.parent[x]) return x;
        // Otherwise, recursively find the representative
        // and update the parent.
        return (this.parent[x] = this.find(this.parent[x]));
    }

    // Union two sets represented by elements x and y.
    union(x: number, y: number): boolean {
        const u = this.find(x);
        const v = this.find(y);

        // If they already belong to the same set,
        // return false (no need to union).
        if (u === v) return false;

        // Union the sets based on their ranks.
        if (this.rank[u] < this.rank[v]) {
            this.parent[u] = v;
        } 
        else if (this.rank[v] < this.rank[u]) {
            this.parent[v] = u;
        } 
        else {
            this.parent[u] = v;
            this.rank[v]++;
        }
        return true;
    }
}

function findRedundantConnection(edges: number[][]): number[] {
    const n = edges.length;
    const graph = new DSU(n);
    let result: number[] = [0, 0];
    for (const edge of edges) {
        const u = edge[0], v = edge[1];
        // Try to union the sets containing u and v.
        // If they already belong to the same set,
        // it's a redundant connection.
        if (!graph.union(u, v)) {
            result = [u, v];
        }
    }
    return result;
}
