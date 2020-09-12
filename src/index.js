const Regex_Pattern_1 = /^.{3}\..{3}\..{3}\..{3}/g
const Regex_Pattern_2 = /\S{2}\s\S{2}\s\S{2}/g
// Do not delete '/' and 'g'. Replace __________ with your regex.

export function processData(patternID, Test_String) {
  let matches
  switch (patternID) {
    case 1:
      matches = Test_String.match(Regex_Pattern_1)
      break
    case 2:
      matches = Test_String.match(Regex_Pattern_2)
    default:
  }
  const result = matches != null && matches.length > 0
  console.log(matches)
  return result
}

// process.stdin.resume()
// process.stdin.setEncoding('ascii')
// _input = ''
// process.stdin.on('data', function(input) {
//   _input += input.trim()
// })
//
// process.stdin.on('end', function() {
//   processData(_input)
// })
