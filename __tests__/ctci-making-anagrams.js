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
// process.stdin.on('end', function() {
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

// Complete the makeAnagram function below.
export const makeAnagram = function makeAnagram(a, b) {
  const aArr = a.split('')
  const bArr = b.split('')
  const anagrams = {}
  // eslint-disable-next-line guard-for-in
  for (const i in aArr) {
    const anagramIdx = aArr[i]
    const exists = !!anagrams[anagramIdx]
    if (!exists) {
      anagrams[anagramIdx] = 1
    } else {
      const newCount = anagrams[anagramIdx] + 1
      anagrams[anagramIdx] = newCount
    }
  }
  // eslint-disable-next-line guard-for-in
  for (const i in bArr) {
    const anagramIdx = bArr[i]
    const exists = !!anagrams[anagramIdx]
    if (exists) {
      const newCount = anagrams[anagramIdx] - 1
      anagrams[anagramIdx] = newCount
    } else {
      anagrams.toBeRemoved = anagrams.toBeRemoved ?
      anagrams.toBeRemoved + 1 : 1
    }
  }

  let result = 0
  // eslint-disable-next-line guard-for-in
  for (const i in anagrams) {
    result = result + anagrams[i]
  }
  return result
}
//
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const a = readLine();
//
//     const b = readLine();
//
//     const res = makeAnagram(a, b);
//
//     ws.write(res + '\n');
//
//     ws.end();
// }


describe('makeAnagram', () => {
  it('should correctly makeAnagram - case 1', () => {
    const a = 'cde'
    const b = 'abc'
    const result = makeAnagram(a, b)
    expect(result).toBe(4)
  })
  it('should correctly makeAnagram - case 2', () => {
    const a = 'fcrxzwscanmligyxyvym'
    const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'
    const result = makeAnagram(a, b)
    expect(result).toBe(30)
  })
})
