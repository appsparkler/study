import {
  convertStringOfNumbersToArray,
  getMean
} from '../utils'

(()=>{
  let consoleLog;
  beforeEach(() => {
    consoleLog = console.log;
    console.log = jest.fn();
  })
  afterEach(() => {
    console.log = consoleLog
  })
})()

const processData = (input) => {
  const [, stringOfNumbers] = input.split('\n');
  const numArray = convertStringOfNumbersToArray(stringOfNumbers);
  const mean = getMean(numArray);
  const distance2MeanSquared = numArray
    .map(num => {
      const distanceToMean = num - mean;
      return distanceToMean * distanceToMean;
    })
  const meanDistance2Mean = getMean(distance2MeanSquared)
  console.log(Number(Math.sqrt(meanDistance2Mean).toFixed(1)))
}

describe('s10-standard-deviation', () => {
  it('should process the input and return the standard deviation', () => {
    const input = `5
10 40 30 50 20`
    processData(input)
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(14.1);
  })
})
