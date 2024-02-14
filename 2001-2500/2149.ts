function rearrangeArray(nums: number[]): number[] {
    
    let pos: number[] = [];
    let neg: number[] = [];
    for(const num of nums)
    {
        num > 0 && pos.push(num);
        num < 0 && neg.push(num);
    }
    
    let result: number[] = [...Array(pos.length + neg.length)].fill(0);
    let k: number = 0;
    let i: number;
    
    const minLength = Math.min(pos.length, neg.length);
    for(i=0; i<minLength; i++)
    {
        result[k++] = pos[i];
        result[k++] = neg[i];
    }
    const rem: number[] = (i == pos.length) ? neg: pos;
    for(let j = i; j < rem.length; j++)
        result[k++] = rem[j];  
    return result;
};
