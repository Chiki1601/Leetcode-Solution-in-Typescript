function addToArrayForm(num: number[], k: number): number[] {
	let number = BigInt(num.join("")) + BigInt(k);
   return Array.from(number.toString().split(""), Number) 
};
