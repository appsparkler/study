import {processData} from '../'
// import txt from '../domain-name-input'

describe('MachAnythingButANewLine', () => {
  // Pattern 1
  it('should MachAnythingButANewLine', () => {
    const result = processData(1, '1123.456.abc.def')
    expect(result).toBe(false)
  })
  it('should MachAnythingButANewLine - case 2', () => {
    const result = processData(1, '123.456.abc.def')
    expect(result).toBe(true)
  })
  // Pattern 2
  it('should matchPattern - pattern-2 - case 1', () => {
    const result = processData(2, 'XX XX XX')
    expect(result).toBe(true)
  })

  // Pattern 3
  it('should matchPattern - pattern-3 - case 1', () => {
    const result = processData(3, 'xxx$xxxxxxxxxx$xxx')
    expect(result).toBe(true)
  })

  // Pattern 4
  it('should matchPattern - pattern-4 - case 1', () => {
    const result = processData(4, '3abcd.')
    expect(result).toBe(true)
  })
  it('should matchPattern - pattern-4 - case 2', () => {
    const result = processData(4, '3abcdsdf.')
    expect(result).toBe(false)
  })

  // Pattern 5
  it('should matchPattern - pattern-5 - case 1', () => {
    const result = processData(5, '21x3x.')
    expect(result).toBe(true)
  })
  it('should matchPattern - pattern-5 - case 2', () => {
    const result = processData(5, '21x3x.123')
    expect(result).toBe(false)
  })

  // Pattern 6
  it('should matchPattern - pattern-6 - case 1', () => {
    const result = processData(6, 'thi9k?')
    expect(result).toBe(true)
  })
  it('should matchPattern - pattern-6 - case 2', () => {
    const result = processData(6, 'thi9k.')
    expect(result).toBe(false)
  })
  it('should matchPattern - pattern-6 - case 3', () => {
    const result = processData(6, 'thi9k.s')
    expect(result).toBe(false)
  })

  // Pattern 7
  it('should matchPattern - pattern-7 - case 1', () => {
    const result = processData(7, 'h4CkR')
    expect(result).toBe(true)
  })
  it('should matchPattern - pattern-7 - case 2', () => {
    const result = processData(7, 'z9$?ZWe')
    expect(result).toBe(true)
  })

  console.log('www.w3.org/'.match(/[a-z]{3}\..*\.([^\/])/g))
})
