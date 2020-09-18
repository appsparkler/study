// 'use strict';
//
// const fs = require('fs');
//
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
//
// let inputString = '';
// let currentLine = 0;
//
// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });
//
// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));
//
//     main();
// });
//
// function readLine() {
//     return inputString[currentLine++];
// }

const reduceSArrToResult = (result, item, idx, arr) => {
  const isNotFirstItem = idx > 0
  if (isNotFirstItem) {
    const prevItem = arr[idx - 1]
    if (prevItem === item) {
      result++
    }
  }
  return result
}

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
  const sArr = s.split('')
  const result = sArr
      .reduce(reduceSArrToResult, 0)
  return result
}
//
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const q = parseInt(readLine(), 10);
//
//     for (let qItr = 0; qItr < q; qItr++) {
//         const s = readLine();
//
//         let result = alternatingCharacters(s);
//
//         ws.write(result + "\n");
//     }
//
//     ws.end();
// }


describe('alternatingCharacters', () => {
  it(`should correctly get number
    of chars deleted
    for alternatingCharacters`, () => {
    const str = 'AAAA'
    const result = alternatingCharacters(str)
    expect(result).toBe(3)
  })
})
