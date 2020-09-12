const reduceCharArrToNextMove = (nextMove, item, idx, arr) => {
  if (!nextMove) {
    const idxOfP = item.indexOf('p')
    const idxOfM = item.indexOf('m')
    const hasP = idxOfP > -1
    const hasM = idxOfM > -1
    const hasBoth = hasP && hasM
    const hasOnlyP = !hasBoth && hasP
    const hasOnlyM = !hasBoth && hasM
    const isPBeforeM = hasBoth && (idxOfP < idxOfM)
    const isMBeforeP = hasBoth && (idxOfP > idxOfM)
    if (isPBeforeM) {
      nextMove = 'LEFT'
    } else if (isMBeforeP) {
      nextMove = 'RIGHT'
    } else if (hasOnlyM) {
      nextMove = 'DOWN'
    } else if (hasOnlyP) {
      nextMove = 'UP'
    }
  }
  return nextMove
}

export function processData(
    input
) {
  const [,, ...charArr] = input
      .split('\n')
  const nextMove = charArr
      .reduce(reduceCharArrToNextMove, '')
  return nextMove
}
//
// process.stdin.resume()
// process.stdin.setEncoding('ascii')
// _input = ''
// process.stdin.on('data', function(input) {
//   _input += input
// })
//
// process.stdin.on('end', function() {
//   processData(_input)
// })
