
const reduceNumbersToMean = (loop, num, idx, arr) => {
  const result = loop + num
  const isLastItem = idx === arr.length - 1
  if (isLastItem) {
    const numberOfItems = arr.length
    return result/numberOfItems
  }
  return result
}

const reduceNumbersToMedian = (loop, num, idx, arr) => {
  if (loop) return loop
  const numberOfItems = arr.length
  const isEven = numberOfItems % 2 === 0
  if (isEven) {
    const centerIdx = numberOfItems/2
    const centerItem = arr[centerIdx-1]
    console.log(arr, centerItem)
    return centerItem
  } else {
    const center = numberOfItems/2
    const floorCenter = Math.floor(center)
    const ceilCenter = Math.ceil(center)
    console.log(floorCenter, ceilCenter)
    return
  }

  console.log(numberOfItems, isEven)
}
function processData(input) {
  const [, numbers] = input.split('\n')
  const numbersArray = numbers.trim().split(' ')
      .map((i) => parseInt(i))
  const mean = numbersArray.reduce(reduceNumbersToMean, 0)
  console.log(mean)
  const median = numbersArray
      .sort((a, b) => a-b)
      .reduce(reduceNumbersToMedian, 0)
  console.log(median)
}
//
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
//    processData(_input);
// });

describe('processData', () => {
  it('should correctly log mean median mode', () => {
    // console.log = jest.fn()
    const input = `10
    64630 11735 14216 99233 14470 4978 73429 38120 51135 67060
    `
    processData(input)
    // expect(console.log).toHaveBeenCalledTimes(1)
    // expect(console.log).toHaveBeenCalledWith(input)
  })
})
