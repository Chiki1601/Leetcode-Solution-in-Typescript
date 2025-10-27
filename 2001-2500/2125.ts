function numberOfBeams(bank: string[]): number {
    let arr: number[] = [];
    let result: number = 0;

    for (let ele of bank) {

        // replace 0 with empty string to find 1 in ele
        let ones: string = ele.replace(/0/g, "");
        let count: number = ones?.length || 0;

        if (count) {

            // if count is not 0 then push in arr
            arr.push(count);
        }
    }

    for (let i = 1; i < arr.length; i++) {

        // multiply current element of arr with previous element of arr
        result += (arr[i] * arr[i - 1]);
    }

    return result;
};
