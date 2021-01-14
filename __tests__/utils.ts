import {getHalves, getMedian} from '../utils'

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
