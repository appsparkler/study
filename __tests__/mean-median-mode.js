
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
    const centerItem1 = arr[centerIdx-1]
    const centerItem2 = arr[centerIdx]
    const median = (centerItem1+centerItem2)/2
    return median
  } else {
    const center = numberOfItems/2
    const centerIdx = Math.ceil(center)
    const median = arr[centerIdx]
    return median
  }
}

const mapNumbersToSpecializedArray = (num, idx, arr) => {
  return {
    numberOfTimes: arr
        .filter((i) => i === num)
        .length,
    num,
  }
}

function processData(input) {
  const [, numbers] = input.split('\n')
  const numbersArray = numbers.trim().split(' ')
      .map((i) => parseInt(i))
      .sort((a, b) => a - b)
  const mean = numbersArray
      .reduce(reduceNumbersToMean, 0)
  const median = numbersArray
      .reduce(reduceNumbersToMedian, 0)
  const mode = numbersArray
      .map(mapNumbersToSpecializedArray, 0)
      .sort((a, b) => b.numberOfTimes - a.numberOfTimes)
      .shift()
      .num
  console.log(mean.toFixed(1))
  console.log(median.toFixed(1))
  console.log(mode)
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
  it('should correctly log mean median mode - Case 1', () => {
    // console.log = jest.fn()
    const input = `10
    64630 11735 14216 99233 14470 4978 73429 38120 51135 67060
    `
    processData(input)
    // expect(console.log).toHaveBeenCalledTimes(3)
    // expect(console.log).toHaveBeenCalledWith(input)
  })
  it('should correctly log mean median mode - Case 2', () => {
    // console.log = jest.fn()
    const input = `20
    6392 51608 71247 14271 48327 50618 67435 47029 61857 22987 64858 99745 75504 85464 60482 30320 11342 48808 66882 40522` // eslint-disable-line max-len
    processData(input)
    // expect(console.log).toHaveBeenCalledTimes(3)
    // expect(console.log).toHaveBeenCalledWith(input)
  })
  it('should correctly log mean median mode - Case 2', () => {
    // console.log = jest.fn()
    const input = `    100
    33664 35702 7049 74334 5725 12090 62774 1149 81848 84123 17698 42269 42457 80934 83409 19075 87353 63407 20669 36812 44473 46723 41091 54903 1749 88514 65760 47322 17365 24779 20301 97839 69612 13975 89694 14585 37259 38361 13720 18729 8283 3886 26681 8005 48460 13101 52287 44583 878 16133 6334 21592 87253 34537 10974 87484 36937 79336 78434 76977 75040 77796 62173 63217 68712 60934 88017 3811 41145 57471 6887 74612 78798 7308 88094 43245 57157 86406 2922 42919 74375 40076 26030 65306 94610 11923 90367 5603 52189 45765 44982 27234 77150 75570 40800 22550 64134 4029 13841 91097` // eslint-disable-line max-len
    processData(input)
    // expect(console.log).toHaveBeenCalledTimes(3)
    // expect(console.log).toHaveBeenCalledWith(input)
  })
})
