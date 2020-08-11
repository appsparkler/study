
describe('minimumBribes', () => {
  const TOO_CHAOTIC = 'Too chaotic'
  const minimumBribes = (q) => q
      .reduce(reduceToMinimumBribes, 0)

  // const reduceToMinimumBribesV2 = (r, ent, idx, arr) => {
  //   let rRef = r
  //   if (rRef.bribesGiven === TOO_CHAOTIC) return rRef
  //   const bribesGiven = ent - idx - 1
  //   if (
  //     bribesGiven > 0 &&
  //     bribesGiven <=2
  //   ) {
  //     rRef.bribesGiven += bribesGiven
  //   } else if (bribesGiven > 2) {
  //     rRef = TOO_CHAOTIC
  //   }
  //   return rRef
  // }


  xtest('test-case 0', () => {
    const q = [1, 3, 5, 2, 4]
    const result = minimumBribes(q)
    expect(result).toBe(3)
  })

  xtest('test-case 1', () => {
    const q = [2, 1, 5, 3, 4]
    const result = minimumBribes(q)
    expect(result).toBe(3)
  })

  xtest('test-case 2', () => {
    const q = [2, 5, 1, 3, 4]
    const result = minimumBribes(q)
    expect(result).toBe(TOO_CHAOTIC)
  })

  xtest('test-case 3', () => {
    const q = [2, 1, 5, 3, 4]
    const result = minimumBribes(q)
    expect(result).toBe(3)
  })

  xtest('test-case 4', () => {
    const q = [2, 5, 1, 3, 4]
    const result = minimumBribes(q)
    expect(result).toBe(TOO_CHAOTIC)
  })

  xtest('test-case 5', () => {
    const q = [1, 2, 5, 3, 7, 8, 6, 4]
    const result = minimumBribes(q)
    expect(result).toBe(7)
  })
})

describe('minimumBribes', () => {
  const TOO_CHAOTIC = 'Too chaotic'

  const minimumBribes = (q) => q
      .reduce(checkTooChaotic, 0)
      .reduce(findMinimumBribes, 0)

  const checkTooChaotic = (r, item, idx, arr) => {
    const bribesGiven = item - (idx + 1)
    let rRef = r
    if (rRef === TOO_CHAOTIC) return rRef
    if (bribesGiven > 2) {
      rRef = TOO_CHAOTIC
    }
    return rRef
  }

  const findMinimumBribes = (r, item, idx, arr) => {
    if (r === TOO_CHAOTIC) return r
  }

  test('test-case-0', () => {
    const q=[4, 2, 1, 3]
    const result = minimumBribes(q)
    expect(result).toBe(TOO_CHAOTIC)
  })
})

/*
[1,2,3]


[1,3,2]
[1,2,3]
*/

/*
[1,2,3]
[1,3,2] (3 bribes 2)
[3,1,2] (3 bribes 1)
[3,2,1] (2 bribes 1)
[3,2,1]

*/


/*
1,2,3,4,5,6,7,8
1,2,3,5,4,6,7,8 (5 bribed 4)
1,2,5,3,4,6,7,8 (5 bribed 3)
1,2,5,3,4,7,6,8 (7 bribed 6)
1,2,5,3,7,4,6,8 (7 bribed 4)
1,2,5,3,7,4,8,6 (8 bribed 6)
1,2,5,3,7,8,4,6 (8 bribed 4)
1,2,5,3,7,8,6,4 (6 bribed 4)
1,2,5,3,7,8,6,4

1,2,3, 4,5,6, 7, 8
1,2,5, 3,7,8, 6, 4
-----------------------------
0,0,2,-1,2,2,-1, -4 - diff ()

1, 2, 3, 4, 5, 6, 7, 8
1, 2, 5, 3, 7, 8, 6, 4
------------------------------
0, 0, 2, -1, 2, 2, -1, -4 - diff - 0


0,1,2,3,4
1,2,3,4,5
1,2,3,5,4 - after 5 bribed 4
1,3,2,5,4 - after 3 bribed 2
1,3,5,2,4 - after 5 bribed 2 (forward moves by 5 => 2 - 4 = 2)

5 - 2  + x = 2
x = 2 - 5 + 2 = -1

*/
