import {
  getMedian, 
  convertStringOfNumbersToArray, getMean
} from '../utils'

const reduceArrToMode = (loop, num, idx, arr) => {
  if(!loop) {
    loop = {
      reps: 0,
      currentMode: undefined
    }
  }
  const reps = arr.filter(item => item === num).length;
  if(reps > loop.reps) {
    loop.reps = reps;
    loop.currentMode = num
  }
  const isLastItem = (arr.length - 1) === idx
  if(isLastItem) {
    return loop.currentMode
  }
  return loop
}

const getMode = numArray => {
  const sortedArr = numArray.sort((a, b) => a - b);
  const mode = sortedArr.reduce(reduceArrToMode, undefined);
  return mode;
}

const processData = (input) => {
  const [,stringOfNumbers] = input.split('\n')
  const numArray = convertStringOfNumbersToArray(stringOfNumbers);
  const mean = getMean(numArray)
  const median = getMedian(numArray);
  const mode = getMode(numArray);
  [mean,median,mode].forEach(item => console.log(item));
}

describe('reduceArrToMode', () => {
  it('should test to reducer to update the mode - case 0', () => {
    const result = reduceArrToMode(undefined, 1, 0, [1,2,3]);
    expect(result.reps).toBe(1);
    expect(result.currentMode).toBe(1);
  })
  it('should test to reducer to update the mode - case 1', () => {
    const result = reduceArrToMode(undefined, 40, 2, [1, 40, 40, 3]);
    expect(result.reps).toBe(2);
    expect(result.currentMode).toBe(40);
  })
  it('should test to reducer to update the mode - case 2', () => {
    const result = reduceArrToMode(undefined, 40, 3, [1, 40, 40, 3]);
    expect(result).toBe(40)
  })
})

describe('getMode', () => {
  it('should get mode from array of numbers - case 0', () => {
    const numArray = [1,2,3];
    const mode = getMode(numArray);
    expect(mode).toBe(1);
  })
})

describe('s10-basic-statistics', () => {
  it('should correctly print mean, median mode', () => {
    const input = `10
64630 11735 14216 99233 14470 4978 73429 38120 51135 67060
`;
    const consoleLog = console.log
    console.log = jest.fn()
    processData(input);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenLastCalledWith(4978);
    console.log = consoleLog;
  })
})
