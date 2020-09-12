import {processData} from '../'

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
})
