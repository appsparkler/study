describe('left-rotation', () => {
  const rotateLeft = (arr, d) => {
    let arrRef = arr
    const rotateLeft = (item, idx, arr) => {
      let result
      const rightIdx = idx + 1
      const isLastMember = rightIdx === arr.length
      if (isLastMember) {
        result = arr[0]
      } else {
        result = arr[rightIdx]
      }
      return result
    }
    for (let i = 0; i < d; i++) {
      arrRef = arrRef.map(rotateLeft)
    }
    return arrRef.join(' ')
  }

  const rotateLeftV2 = (arr, d) => {
    for (let i = 0; i < d; i++) {
      const shifted = arr.shift()
      arr.push(shifted)
    }
    return arr.join(' ')
  }

  it('should correctly left-rotate', () => {
    const arr = [1, 2, 3, 4, 5]
    const d = 4
    const result = rotateLeftV2(arr, d)
    expect(result).toEqual('5 1 2 3 4')
  })
})
