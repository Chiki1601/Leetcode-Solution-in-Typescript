function countPairs(nums: number[], k: number): number {
  let count:number=0;
  for(let i=0; i<nums.length; i++){
    for(let j=0;  j<nums.length; j++){
      if((nums[i]===nums[j]) && ((i*j) % k===0) && (j<nums.length )&& (i< j && 0<=i)){
        count++
      } }
  }
return count
}
