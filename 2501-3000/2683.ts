function doesValidArrayExist(derived: number[]): boolean {
    let seed = 0; // can be 0 or 1
    let valueOfOriginalAtIndex = seed; // set original[0]
    for (let i = 0; i < derived.length; i++) {
        // determine next value of original
        valueOfOriginalAtIndex = valueOfOriginalAtIndex ^ derived[i];
    }
    // "next" value at end of original must equal original[0]
    return seed === valueOfOriginalAtIndex;
    
    // One-liner (slower)
    //
    // return 0 === derived.reduce( (a,c) => acc^d, 0)
};
