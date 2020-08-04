
describe('minimumBribes', () => {
  const minimumBribes = (q) => q.reduce(reduceToMinimumBribes, 0)
  const reduceToMinimumBribes = (r, ent, idx, arr) => {
    let rRef = r
    if (rRef === 'Too Chaotic') return rRef
    const bribesGiven = ent - idx - 1
    if (
      bribesGiven > 0 &&
        bribesGiven <=2
    ) {
      rRef += bribesGiven
    } else if (bribesGiven > 2) {
      rRef = 'Too Chaotic'
    }
    return rRef
  }

  test('test-case 0', () => {
    const q = [1, 3, 5, 2, 4]
    const result = minimumBribes(q)
    expect(result).toBe(3)
  })

  test('test-case 1', () => {
    const q = [2, 1, 5, 3, 4]
    const result = minimumBribes(q)
    expect(result).toBe(3)
  })

  test('test-case 2', () => {
    const q = [2, 5, 1, 3, 4]
    const result = minimumBribes(q)
    expect(result).toBe('Too Chaotic')
  })
})


/*

0,1,2,3,4
1,2,3,4,5
1,2,3,5,4 - after 5 bribed 4
1,3,2,5,4 - after 3 bribed 2
1,3,5,2,4 - after 5 bribed 2 (forward moves by 5 => 2 - 4 = 2)

5 - 2  + x = 2
x = 2 - 5 + 2 = -1

*/
