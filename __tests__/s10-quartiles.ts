import {getMedian} from '../utils'

const convertStringOfNumbersToArray = (str) => str
  .split(' ')
  .map(Number)

const getHalves = (arr) => {
  const {length} = arr;
  const sortedArray = arr.sort((a,b) => a - b)
  const isEven = length % 2 === 0;
  if(isEven) {
    const midIndex = length/2;
    const upperHalf = sortedArray
      .filter((item, idx) => idx < midIndex);
    const lowerHalf = sortedArray
      .filter((item, idx) => idx >= midIndex);
    return [upperHalf, lowerHalf]
  } else {
    const midIndex = Math.floor(length/2);
    const upperHalf = sortedArray
      .filter((item, idx) => idx < midIndex)
    const lowerHalf = sortedArray
      .filter((item, idx) => idx > midIndex)
    return [upperHalf, lowerHalf]
  }
}

const processData = (input) => {
  const [, stringOfNumbers] = input.split('\n')
  const arr = convertStringOfNumbersToArray(stringOfNumbers)
    .sort((a, b) => a - b)
  const {length} = arr;
  const isEven = length % 2 === 0;
  const centerIndex = Math.floor(length/2) - 1;
  const Q2 = getMedian(arr);
  const [upperHalf, lowerHalf] = getHalves(arr);
  const Q1 = getMedian(upperHalf);
  const Q3 = getMedian(lowerHalf);
  [Q1,Q2,Q3].forEach(item => console.log(item))
}

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

describe('getHalves', () => {
  it('should get 2 halves of an array with even items - case 0', () => {
    const input = [1,2,3,4];
    const [upperHalf, lowerHalf] = getHalves(input);
    expect(upperHalf[0]).toBe(1);
    expect(lowerHalf[0]).toBe(3)
  });
  it('should get 2 halves of an array with odd-items - case 1', () => {
    const input = [1,2,3];
    const [upperHalf, lowerHalf] = getHalves(input);
    expect(upperHalf[0]).toBe(1);
    expect(lowerHalf[0]).toBe(3);
  })
  it('should get 2 halves of an array with odd-items - case 3', () => {
    const input = [1];
    const [upperHalf, lowerHalf] = getHalves(input);
    expect(upperHalf[0]).toBe(undefined);
    expect(lowerHalf[0]).toBe(undefined);
  })
  it('should get 2 halves of an array with odd-items - case 4', () => {
    const input = [3,7,8,5,12,14,21,13,18];
    const [upperHalf, lowerHalf] = getHalves(input);
    expect(upperHalf[0]).toBe(3);
    expect(lowerHalf[0]).toBe(13);
  })
})

describe('getMedian', () => {
  it('should get median - case 0', () => {
    const arr = [1,2,3];
    const result = getMedian(arr);
    expect(result).toBe(2)
  })
  it('should get median - case 1', () => {
    const arr = [1,2,3,4];
    const result = getMedian(arr);
    expect(result).toBe(2.5)
  })
})

describe('s10-quartiles', () => {
  it('should correctly print quartiles - case 1', () => {
    const input = `9
3 7 8 5 12 14 21 13 18`
    processData(input);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenNthCalledWith(1, 6)
    expect(console.log).toHaveBeenNthCalledWith(2, 12)
    expect(console.log).toHaveBeenNthCalledWith(3, 16)
  })

  it('should correctly print the quartiles- case 2', () => {
    const input = `10
3 7 8 5 12 14 21 15 18 14`;
    processData(input);
    expect(console.log).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenNthCalledWith(1, 7)
    expect(console.log).toHaveBeenNthCalledWith(2, 13)
    expect(console.log).toHaveBeenNthCalledWith(3, 15)
  })
})
