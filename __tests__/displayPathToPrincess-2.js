import {processData} from '../displayPath2Princess-2'

describe('displayPathtoPrincess-2', () => {
  it('should correctly displayPathtoPrincess', () => {
    const N = 5
    const [r, c] = [2, 3]
    const charArrayGrid = `-----
-----
p--m-
-----
-----`
    const result = processData(N, r, c, charArrayGrid)

    expect.assertions(0)
  })
})
