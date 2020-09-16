import {magazine, note} from '../data'
import {magazine2, note2} from '../data2'

describe('checkMagazine', () => {
  const checkMagazine = (magazine, ransom) => {
    const map = { }
    let replicable = true
    for (const i of magazine) {
      map[i] = (map[i] || 0) + 1
    }
    for ( const i of ransom ) {
      map[i] = (map[i] || 0) - 1
    }
    for ( const i in map ) {
      if ( map[i] < 0 ) {
        replicable = false
        break
      }
    }
    console.log(replicable ? 'Yes' : 'No')
  }

  it(`should correctly checkMagazine for the
    message - Test Case 1`, () => {
    const magazine = 'two times three is not four'
    const note = 'two times two is four'
    console.log = jest.fn()
    const magArr = magazine.split(' ')
    const noteArr = note.split(' ')
    checkMagazine(magArr, noteArr)
    expect(console.log).toHaveBeenCalledWith('No')
  })
  it(`should correctly checkMagazine for the
    message - Test Case 2`, () => {
    const magazine = 'give me one grand today night'
    const note = 'give one grand today'
    console.log = jest.fn()
    const magArr = magazine.split(' ')
    const noteArr = note.split(' ')
    checkMagazine(magArr, noteArr)
    expect(console.log).toHaveBeenCalledWith('Yes')
  })
  it(`should correctly checkMagazine for the
    message - Test Case 3`, () => {
    console.log = jest.fn()
    const magArr = magazine.split(' ')
    const noteArr = note.split(' ')
    checkMagazine(magArr, noteArr)
    expect(console.log).toHaveBeenCalledWith('Yes')
  })
  it(`should correctly checkMagazine for the
    message - Test Case 4`, () => {
    console.log(new Date())
    console.log = jest.fn()
    const magArr = magazine2.split(' ')
    const noteArr = note2.split(' ')
    checkMagazine(magArr, noteArr)
    expect(console.log).toHaveBeenCalledWith('Yes')
    console.log(new Date())
  })
})
