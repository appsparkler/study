const getMedian = (arr) => {
  const {length} = arr;
  const hasEvenItems = length % 2 === 0;
  if(hasEvenItems) {
    const idx1 = length/2 - 1;
    const idx2 = length/2;
    const median = (arr[idx1] + arr[idx2])/2;
    return median;
  } else {
    const medianIndex = (length - 1)/2;
    return arr[medianIndex];
  }
}

const getMean = (numArray) => {
  const n = numArray.length
  const sum = getSum(numArray);
  const mean = sum/n;
  return mean
}

const getSum = numArray => numArray.reduce(
  (loop, num) => loop + num, 0
);

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

const getQuartiles = (input) => {
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
  return [Q1,Q2,Q3];
}


const convertStringOfNumbersToArray = (str) => str
  .split(' ')
  .map(Number)

export {
  getMedian,
  convertStringOfNumbersToArray,
  getMean,
  getQuartiles,
  getHalves
}
