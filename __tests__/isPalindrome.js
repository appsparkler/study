describe('isPalindrome', () => {
  const isPalindrome = (str) => {
    if (Array.isArray(str)) {
      if (str.length === 1) {
        return true
      } else {
        const shifted = str.shift()
        const popped = str.pop()
        if (shifted === popped) {
          return isPalindrome(str)
        } else {
          return false
        }
      }
    } else if (typeof str === 'string') {
      const strArr = str.split('')
      return isPalindrome(strArr)
    }
  }
  it('test case 1', () => {
    const str = 'aba'
    const result = isPalindrome(str)
    expect(result).toBe(true)
  })
  it('test case 2', () => {
    const str = 'hellolleh'
    const result = isPalindrome(str)
    expect(result).toBe(true)
  })
  it('test case 2', () => {
    const str = 'hellolleh'
    const result = isPalindrome(str)
    expect(result).toBe(true)
  })
  it('test case 3', () => {
    const str = 'helloxlleh'
    const result = isPalindrome(str)
    expect(result).toBe(false)
  })
  it('test case 4', () => {
    const str = 'a'
    const result = isPalindrome(str)
    expect(result).toBe(true)
  })
  it('test case 5', () => {
    const str = 'abba'
    const result = isPalindrome(str)
    expect(result).toBe(true)
  })
})
