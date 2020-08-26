describe('sparse-arrays', () => {
  const sparseArrays = (strs, queries) => {
    const result = []
    const getResults = (item, idx, arr) => {
      const filtered = strs.filter((str) => str === item)
      return result.push(filtered.length)
    }
    queries.forEach(getResults)
    return result
  }

  it('should correctly sparse-arrays', () => {
    const strs = ['aba', 'baba', 'aba', 'xzxb']
    const queries = ['aba', 'xzxb', 'ab']
    const result = sparseArrays(strs, queries)
    expect(result).toEqual([2, 1, 0])
  })
})
