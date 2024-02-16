function findLeastNumOfUniqueInts(arr: number[], k: number): number {
    // remove the smallest frequency first
    const nums_freq: {[num: number]: number} = {};
    for (let num of arr){
        if (!nums_freq[num]){
            nums_freq[num] = 1;
            continue;
        }
        nums_freq[num] += 1;
    }
    const num_freq_arr: {num: number, freq: number}[] = [];
    for (let num of Object.keys(nums_freq)){
        const temp: {num: number, freq: number} = {num: Number(num), freq: nums_freq[num]};
        num_freq_arr.push(temp);
    }
    num_freq_arr.sort((a,b)=>a.freq-b.freq);
    let temp_k: number = k;
    let idx: number = 0;
    let count_can_be_deleted: number = 0;
    while (temp_k > 0){
        if (temp_k >= num_freq_arr[idx]["freq"]){
            temp_k -= num_freq_arr[idx]["freq"];
            idx += 1;
            count_can_be_deleted += 1;
            // num_freq_arr.splice(idx,1); // Make our algorithm real SLOW
            continue; 
        }
        break;
    }
    return num_freq_arr.length - count_can_be_deleted;
};
