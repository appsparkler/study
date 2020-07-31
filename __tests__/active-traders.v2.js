const mostActiveFilter = (c, idx, arr) => {
  const trades = arr.filter((i) => i === c).length
  const totalTrades = arr.length
  const percent = (trades/totalTrades) * 100
  if (percent >= 5) return true
  else return false
}

const removeDuplicates = (r, c, idx, arr) => {
  const itemExists = r.some((i) => i === c)
  if (!itemExists) {
    r.push(c)
  }
  return r
}

const sortABDesc = (b, a) => {
  if (a > b) return -1
  if (a < b) return 1
  else return 0
}

const mostActive = (customers = []) => customers
    .filter(mostActiveFilter)
    .reduce(removeDuplicates, [])
    .sort(sortABDesc)

describe('sortABDesc', () => {
  it('should sort alphabetically in descending order', () => {
    const customers = [
      'Zeta', 'Beta', 'Gamma', 'Alpha',
    ]
    const results = customers.sort(sortABDesc)
    expect(results[0]).toBe('Alpha')
  })
})

describe('removeDuplicates reducer', () => {
  it('should remove duplicates from a array:[]', () => {
    const customers = [
      'Alpha',
      'Alpha',
      'Alpha',
      'Omega',
      'Omega',
      'Omega',
      'Omega',
      'Beta',
    ]
    const result = customers.reduce(removeDuplicates, [])
    expect(result.length).toBe(3)
  })
})

describe('mostActive filter', () => {
  it('the filter to return most-active customers', () => {
    const customers = [
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Alpha',
      'Omega',
      'Omega',
      'Beta',
    ]
    const result = customers.filter(mostActiveFilter)
    const someAreBeta = (i) => i === 'Beta'
    const someAreAlpha = (i) => i === 'Alpha'
    expect(result.some(someAreBeta)).toBe(false)
    expect(result.some(someAreAlpha)).toBe(true)
  })
})

describe('mostActive method', () => {
  test('should list the most active traders', () => {
    const customers = [
      'Omega', 'Alpha', 'Alpha',
    ]
    const result = mostActive(customers)
    expect(result[0]).toBe('Alpha')
    expect(result[1]).toBe('Omega')
    expect(result[2]).toBe(undefined)
  })
  test(`should list the most active only
    if trader has at least 5% of total trades
    `, () => {
    const customers = [
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Alpha',
      'Omega',
      'Beta',
    ]
    const result = mostActive(customers)
    expect(result[2]).toBe('Omega')
  })
})
