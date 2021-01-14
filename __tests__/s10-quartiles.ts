import {getMedian, getQuartiles} from '../utils'

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

const processData = (input) => {
  const quartiles = getQuartiles(input)
  quartiles.forEach(item => console.log(item))
}

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
