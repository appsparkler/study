import {magazine, note} from '../data'

describe('checkMagazine', () => {
  // const reduceNoteArrV0 = ({
  //   filteredMagArr, noteItem, idx, magArr, noteArr,
  // }) => {
  //   filteredMagArr = filteredMagArr
  //       .filter((magItem) => magItem !== noteItem)
  //   return filteredMagArr
  // }
  // const checkMagazineV0 = (magArr, noteArr) => {
  //   const filteredMagArr = noteArr.reduce(
  //       (filteredMagArr, noteItem, idx, noteArr) => reduceNoteArr({
  //         filteredMagArr, noteItem, idx, noteArr,
  //       }),
  //       magArr
  //   )
  //   const areAllWordsAvailable = noteArr.length === (
  //     magArr.length - filteredMagArr.length
  //   )
  //   const result = areAllWordsAvailable ? 'Yes': 'No'
  //   return result
  // }

  const checkMagazine = (magArr, noteArr) => {
    let result = 'Yes'
    let magArrRef = [...magArr]
    for (let i = 0; i < noteArr.length; i++) {
      const magArrRefInitialLength = magArrRef.length
      magArrRef = magArrRef.filter((item) => item !== noteArr[i])
      const wasAvailable = magArrRefInitialLength !== magArrRef.length
      if (!wasAvailable) {
        console.info(noteArr[i])
        result = 'No'
        break
      }
    }
    console.log(result)
  }
  xit(`should correctly checkMagazine for the
    message - Test Case 1`, () => {
    const magazine = 'two times three is not four'
    const note = 'two times two is four'
    const magArr = magazine.split(' ')
    const noteArr = note.split(' ')
    const result = checkMagazine(magArr, noteArr)
    expect(result).toBe('No')
  })
  it(`should correctly checkMagazine for the
    message - Test Case 2`, () => {
    const magazine = 'give me one grand today night'
    const note = 'give one grand today'
    // const consoleLog = console.log
    console.log = jest.fn()
    const magArr = magazine.split(' ')
    const noteArr = note.split(' ')
    checkMagazine(magArr, noteArr)
    // expect(result).toBe('Yes')
    expect(console.log).toHaveBeenCalledWith('Yes')
  })
  it(`should correctly checkMagazine for the
    message - Test Case 3`, () => {
    // const magazine = 'give me one grand today night'
    // const note = 'give one grand today'
    console.log = jest.fn()
    const magArr = magazine.split(' ')
    const noteArr = note.split(' ')
    checkMagazine(magArr, noteArr)
    expect(console.log).toHaveBeenCalledWith('Yes')
  })
})
