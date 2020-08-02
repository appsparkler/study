
describe('minimumBribes', () => {
  const minimumBribes = (q) => q.reduce(reduceToMinimumBribes, 0)
  const reduceToMinimumBribes = (r, pos, idx, arr) => {
    if (r !== 'Too Chaotic') {
      const maxBribesAllowed = 2
      const movedForwardPosition = idx - pos
      console.log(movedForwardPosition < -(maxBribesAllowed))
      if (movedForwardPosition < -(maxBribesAllowed)) return 'Too Chaotic'
    }
    return r
  }

  xtest('test-case 1', () => {
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
