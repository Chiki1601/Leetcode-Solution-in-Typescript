function findEvenNumbers(digits: number[]): number[] {
    const results = new Set<number>();
    const visited = new Array(digits.length).fill(false); //avoid duplicate
    
    for (let i = 0; i < digits.length; i++) {
        // skip first number == 0;
        if (digits[i] === 0) continue;

        visited[i] = true;
        for (let j = 0; j < digits.length; j++) {
            if (visited[j]) continue;
            visited[j] = true;
            for (let k = 0; k < digits.length; k++) {
                if ((digits[k] & 1) || visited[k]) continue;

                const a = digits[i];
                const b = digits[j];
                const c = digits[k];

                
                const number = a * 100 + b * 10 + c;

               results.add(number);
            }
            visited[j] = false;
        }
        visited[i] = false;
    }

    
    return Array.from(results).sort((a, b) => a - b);
};
