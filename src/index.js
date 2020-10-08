const Regex_Pattern_1 = /^.{3}\..{3}\..{3}\..{3}/g
const Regex_Pattern_2 = /\S{2}\s\S{2}\s\S{2}/g
const Regex_Pattern_3 = /\w{3}\W\w{10}\W\w{3}/g
const Regex_Pattern_4 = /^\d\w{4}.$/g
const Regex_Pattern_5 = /^[123][120][xs0][30Aa][xsu][.,]$/g
const Regex_Pattern_6 = /^[^0-9][^aeiou][^bcDF][^\s][^AEIOU][^\.,]$/g
const Regex_Pattern_7 = /^[a-z][1-9][^a-z][^A-Z][A-Z]/
// ^[123][120][xs0][30Aa][xsu][.,]$

// Do not delete '/' and 'g'. Replace __________ with your regex.

export function processData(patternID, Test_String) {
  let matches
  switch (patternID) {
    case 1:
      matches = Test_String.match(Regex_Pattern_1)
      break
    case 2:
      matches = Test_String.match(Regex_Pattern_2)
      break
    case 3:
      matches = Test_String.match(Regex_Pattern_3)
      break
    case 4:
      matches = Test_String.match(Regex_Pattern_4)
      break
    case 5:
      matches = Test_String.match(Regex_Pattern_5)
      break
    case 6:
      matches = Test_String.match(Regex_Pattern_6)
      break
    case 7:
      matches = Test_String.match(Regex_Pattern_7)
      break
  }
  const result = matches != null && matches.length > 0
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
