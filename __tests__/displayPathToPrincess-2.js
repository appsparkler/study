import {processData} from '../displayPath2Princess-2'

describe('displayPathtoPrincess-2', () => {
  it('should correctly displayPathtoPrincess', () => {
    const input = `5
0 2
--m--
-----
-----
---p-
-----`
    const result = processData(input)
    expect(result).toBe('DOWN')
  })
})
