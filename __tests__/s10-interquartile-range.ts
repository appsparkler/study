import {
  convertStringOfNumbersToArray,
  getQuartiles,
} from '../utils'

{
  let consoleLog;
  beforeEach(() => {
    consoleLog = console.log;
    console.log = jest.fn();
  })
  afterEach(() => {
    console.log = consoleLog
  })
}


const getFullArrayFromFrequency = (arr, freqArray) => {
  const numArray = arr
    .map((num, idx) => {
      let arr = []
      for (let i = 0; i < freqArray[idx]; i++) {
        arr.push(num);
      }
      return arr;
    })
  const fullArray = numArray.reduce(
    (loop, numArray) => {
      return [...loop, ...numArray]
    },[]
  )
  return fullArray
}

function processData(input) {
  const [,stringOfNumbers1,stringOfNumbers2] = input.split('\n');
  const arr1 = convertStringOfNumbersToArray(stringOfNumbers1);
  const arr2 = convertStringOfNumbersToArray(stringOfNumbers2);
  const numArray = getFullArrayFromFrequency(
    arr1,
    arr2
  )
  const [Q1, , Q3] = getQuartiles(numArray);
  const interquartileRange = Q3 - Q1
  console.log(interquartileRange)
}

describe('s10-interquartile-range', () => {
  it('should return the interquartile given an input', () => {
    const input = `6
6 12 8 10 20 16
5 4 3 2 1 5`
    processData(input)
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(9);
  })
})
