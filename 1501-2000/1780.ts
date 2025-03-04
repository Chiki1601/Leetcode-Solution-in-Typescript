function checkPowersOfThree(n: number): boolean {
    for(let i = 15; i >= 0; i--) {
        let power = Math.pow(3, i);
        if (power <= n) {
            n -= power;
        }   
        if (n === 0) return true;
    }
    return false;
};
