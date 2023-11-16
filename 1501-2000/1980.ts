function addLeadingZeros(binary: string, length: number) {
  let leadingZeros = "";

  for (let i = 0; i < length - binary.length; ++i) {
    leadingZeros += "0";
  }

  return leadingZeros + binary;
}

function getBinaryString(number: number) {
  let currentNumber = number;
  let binaryString = "";

  while (currentNumber > 0) {
    const remainder = currentNumber % 2;

    binaryString = remainder + binaryString;
    currentNumber = (currentNumber - remainder) / 2;
  }

  return binaryString;
}

function findDifferentBinaryString(nums: string[]): string {
  const length = nums.length;
  const set = new Set(nums);

  for (let i = 0; i < Math.pow(2, length); ++i) {
    const binary = getBinaryString(i);
    const addedZeros = addLeadingZeros(binary, length);

    if (!set.has(addedZeros)) return addedZeros;
  }

  return "-";
}
