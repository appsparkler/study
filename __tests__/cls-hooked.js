// export {}
const {promises: fs} = require('fs')

const runSession = () => new Promise((resolve, reject) => {
  const createNamespace = require('cls-hooked').createNamespace
  const session = createNamespace('session')
  session.run(() => {
    fs.readFile('package.json', 'utf-8')
        .then(resolve)
  })
})

describe('CLS tests', () => {
  test('Can test CLS', async () => {
    const result = await runSession()
    console.log('hello')
    console.log(result)
    expect(result).toBeTruthy()
    console.log('after expect...')
  })
})
