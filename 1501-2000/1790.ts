function areAlmostEqual(s1: string, s2: string): boolean {
    let countSwap: number = 0;

    let index1: number = -1;
    let index2: number = -1;

    for(let i = 0; i < s1.length; i++) {
        if(s1[i] != s2[i]) {
            countSwap++;

            if(countSwap > 2) return false;
            else if(countSwap == 1) {
                index1 = i;
            }
            else {
                index2 = i
            }
        }
    }

    if(countSwap === 0) return true;

    if(s1[index1] === s2[index2] && s1[index2] === s2[index1]) return true;
    return false;
};
