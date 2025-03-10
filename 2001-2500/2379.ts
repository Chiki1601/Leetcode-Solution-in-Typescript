function minimumRecolors(blocks: string, k: number): number {
    if(blocks.indexOf("B".repeat(k)) !== -1) return 0

    let count: number = 0
    let maxB: number = 0

    for(let index = 0; index < k; index++) {
        if(blocks[index] === "B") count++
    }

    maxB = count

    for(let index = 0; index < blocks.length - k; index++) {
        if(blocks[index] === "B" && blocks[index + k] === "W") count--
        else if(blocks[index] === "W" && blocks[index + k] === "B") count++

        if(count > maxB) maxB = count
    }

    return k - maxB
};
