function processData(input) {
  // Enter your code here
  const [, numbers, weights] = input
      .split('\n')
  const numbersArr = numbers.split(' ').map((i) => parseInt(i))
  const weightArr = weights
      .split(' ')
      .map((i) => parseInt(i))
  const totalWeight = weightArr.reduce((r, i) => i +r, 0)
  const proportionalWeightArr = weightArr.map((i) => {
    return i/totalWeight
  })
  const weightedMean = numbersArr.reduce((loop, num, idx) => {
    return loop + (num * proportionalWeightArr[idx])
  }, 0)
  console.log(weightedMean.toFixed(1))
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });


describe('process data to calculate weighted mean', () => {
  it('should correctly print the weighted mean - case 1', () => {
    const input = `5
10 40 30 50 20
1 2 3 4 5`
    processData(input)
  })
})
