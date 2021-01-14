import {convertStringOfNumbersToArray} from '../utils'

function processData(input) {
  const [,stringOfNumbers1,stringOfNumbers2] = input.split('\n');
  const arr1 = convertStringOfNumbersToArray(stringOfNumbers1);
  const arr2 = convertStringOfNumbersToArray(stringOfNumbers2);
  const numArray = arr1
    .map((num, idx) => {
      let arr = []
      for (let i = 0; i < arr2[idx]; i++) {
        arr.push(num);
      }
      return arr;
    })
  const numArray2 = numArray.reduce(
    (loop, numArray) => {
      return [...loop, ...numArray]
    },[]
  )
  console.log(numArray2);

}

describe('s10-interquartile-range', () => {
  it('should return the interquartile given an input', () => {
    const input = `6
6 12 8 10 20 16
5 4 3 2 1 5`
    processData(input)
  })
})
