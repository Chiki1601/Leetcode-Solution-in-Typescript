/**
 * Find the cheapest price to reach a destination with a limited number of stops.
 * Uses BFS traversal and adjacency list representation.
 * 
 * @param n Number of nodes in the graph
 * @param flights Array of flights, each containing [source, destination, price]
 * @param src Source node
 * @param dst Destination node
 * @param k Maximum number of stops allowed
 * @returns The cheapest price to reach the destination, or -1 if it's not possible within the constraints
 */
function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number): number {
    const adj: Map<number, [number, number][]> = new Map();
    const visited: number[] = new Array(n).fill(Number.MAX_VALUE);
    visited[src] = 0;

    for (const [from, to, price] of flights) {
        if (!adj.has(from)) {
            adj.set(from, []);
        }
        adj.get(from)!.push([to, price]);
    }

    const queue: [number, number][] = [[src, 0]];
    k++;

    while (k-- > 0 && queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [currNode, currPrice] = queue.shift()!;
            if (adj.has(currNode)) {
                for (const [nextNode, nextPrice] of adj.get(currNode)!) {
                    const newPrice = currPrice + nextPrice;
                    if (newPrice < visited[nextNode]) {
                        visited[nextNode] = newPrice;
                        queue.push([nextNode, newPrice]);
                    }
                }
            }
        }
    }

    return visited[dst] === Number.MAX_VALUE ? -1 : visited[dst];
}
