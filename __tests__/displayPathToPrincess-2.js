import {processData} from '../displayPath2Princess-2'

describe('displayPathtoPrincess-2', () => {
  it('should correctly displayPathtoPrincess - case 1', () => {
    const input = `5
0 2
--m--
-----
-----
---p-
-----`
    const result = processData(input)
    expect(result)
        .toBe('DOWN')
  })
  it('should correctly displayPathtoPrincess - case 2', () => {
    const input = `5
0 2
--p--
-----
-----
---m-
-----`
    const test = 'test'
    console.log(test)
    const result = processData(input)
    expect(result)
        .toBe('UP')
  })
})
