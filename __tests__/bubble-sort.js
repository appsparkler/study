describe('/challenges/ctci-bubble-sort', () => {
  function countSwaps(a) {
    const sortFn = (a, b) => {
      console.log(a, b, Number(a - b))
      return Number(b - a)
    }
    const noOfSwaps = 0
    const firstElement = a[0]
    const lastIdx = a.length - 1
    const lastElement = a[lastIdx]
    const sortedArray = a.sort(sortFn)
    console.log(sortedArray)
    console.log(`Array is sorted in ${noOfSwaps} swaps.`)
    console.log(`First Element: ${firstElement}`)
    console.log(`Last Element: ${lastElement}`)
  }

  const sortExplainer = () => {
    const sortFn = (b, a) => {
      let result
      if (a > b) {
        result = -1
      } else if (a === b) {
        result = 0
      } else {
        result = 1
      }
      // console.log(a, b, result)
      return result
    }
    // const arr = ['A', 0, 1, 2, 3, 'a']
    const arrx = [
      // '~', '#', '!', 'banana', 'apple', 0, 1, -1,
      '~', '`',
      '!', '1', 1,
      '@', '2', 2,
      '#', '3', 3,
      '$', '4', 4,
      '%', '5', 5,
      '^', '6', 6,
      '&', '7', 7,
      '*', '8', 8,
      '(', '9', 9,
      ')', '0', 0,
      '-', '_',
      '+', '=',
      ' ',
      '{', '[',
      '}', ']',
      '\\', '|',
      ':', ';',
      '"', '\'',
      '<', ',',
      '>', '.',
      '/', '?',
      'a', 'A',
      'b', 'B',
      'c', 'C',
      'd', 'D',
      'e', 'E',
      'f', 'F',
      'g', 'G',
      'h', 'H',
      'i', 'I',
      'j', 'J',
      'k', 'K',
      'l', 'L',
      'm', 'M',
      'n', 'N',
      'o', 'O',
      'p', 'P',
      'q', 'Q',
      'r', 'R',
      's', 'S',
      't', 'T',
      'u', 'U',
      'v', 'V',
      'w', 'W',
      'x', 'X',
      'y', 'Y',
      'z', 'Z',
    ]
    console.log(Number(0 < '!') * 0.5)
    console.log(JSON.stringify(arrx.sort(sortFn), null, 2))

    // const sortedArray = arrx.sort(sortFn)
    // console.log(JSON.stringify(sortedArray, null, 2))
  }

  it('should explain me how sort works', () => {
    sortExplainer()
  })


  xit('should return the expected output', () => {
    // console.log = jest.fn()
    const input = [1, 2, 3, 4, 5, 6, 7]
    countSwaps(input)
    expect(console.log)
        .toHaveBeenCalledWith('Array is sorted in 0 swaps.')
    expect(console.log)
        .toHaveBeenCalledWith('First Element: 1')
    expect(console.log)
        .toHaveBeenCalledWith('Last Element: 3')
  })
})
