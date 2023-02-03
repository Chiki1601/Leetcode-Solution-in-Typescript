/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given
 * number of rows like this: (you may want to display this pattern in a
 * fixed font for better legibility)
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 *
 * @param s - input string where (1 <= s.length <= 1000) s consists of English letters
 *            (lower-case and upper-case), ',' and '.'.
 * @param numRows - given number of rows where (1 <= numRows <= 1000)
 * @returns The converted string
 */
function convert(s: string, numRows: number): string {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }
  const rList: string[] = Array(numRows).fill('');
  let index = 0;
  let step = 1;
  for (const c of s) {
    rList[index] += c;
    if (index === 0) {
      step = 1;
    } else if (index === numRows - 1) {
      step = -1;
    }
    index += step;
  }
  return rList.join('');
}
