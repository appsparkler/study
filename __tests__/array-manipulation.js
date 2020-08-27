describe('Array Manipulation', () => {
  const reduceArray = ({
    query, arrOfZeros, idx, arr,
  }) => {
    const [a, b, k] = query
    for (let i = 0; i < arrOfZeros.length; i++) {
      if (i >= (a-1) &&
        i < (b)) {
        arrOfZeros[i] += k
      }
    }
    if (idx === (arr.length-1)) {
      return Math.max.apply(null, arrOfZeros)
    }
    return arrOfZeros
  }

  const manipulateArray = (n, queries) => {
    const arrOfZeros = [...new Array(n)].map((i) => 0)
    const result = queries
        .reduce((r, q, idx, arr) => reduceArray({
          query: q,
          arrOfZeros: r,
          idx, arr,
        }), arrOfZeros)
    return result
  }

  test('case 1', () => {
    const queries = [
      [1, 5, 3],
      [4, 8, 7],
      [6, 9, 1],
    ]
    const result = manipulateArray(10, queries)
    expect(result).toBe(10)
  })
  test('case 2', () => {
    const queries = [
      [1, 2, 100],
      [2, 5, 100],
      [3, 4, 100],
    ]
    const result = manipulateArray(10, queries)
    expect(result).toBe(200)
  })
})
