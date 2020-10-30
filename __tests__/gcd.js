describe('Greatest Common Demonitor', () => {
  const gcd = (a, b)=> {
    let x; let y
    if (a >= b) {
      x = a
      y = b
    } else {
      x = b
      y = a
    }
    if (x % y === 0) return y
    let d = Number(y)
    while (!(x % d === 0 && y % d === 0)) {
      d = d - 1
    }
    return d
  }

  it('should correctly return the GCD for 2 numbers - TC 1', () => {
    const result1 = gcd(20, 8)
    const result2 = gcd(8, 20)
    expect(result1).toBe(4)
    expect(result2).toBe(4)
  })

  it('should correctly return the GCD for 2 numbers - TC 2', () => {
    const result = gcd(60, 96)
    expect(result).toBe(12)
    const result1 = gcd(96, 60)
    expect(result1).toBe(12)
  })
})
