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

const convertStringOfNumbersToArray = (str) => str
  .split(' ')
  .map(Number)
  .sort((a,b) => a - b)

export {
  getMedian,
  convertStringOfNumbersToArray
}
