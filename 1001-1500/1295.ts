const findNumbers = (nums: number[]): number => {
  const even = nums.filter((num: number):boolean => num.toString().length % 2 === 0)
  return even.length
}
