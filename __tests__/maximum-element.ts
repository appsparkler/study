
const executeQuery = (input: string) => {
  const [, ...items] = input.split('\n')
  items.reduce((loop: number[], item) => {
    const [query, value] = item
        .split(' ')
        .map((x) => Number(x))
    if (query === 1) loop.push(value)
    else if (query === 2) loop.pop()
    else if (query === 3) console.log(Math.max.apply(null, loop))
    return loop
  }, [])
}

describe('maximum-element', () => {
  const consoleLog = console.log
  console.log = jest.fn()
  it('should correctly execute the steps', () => {
    const input = `10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3
`
    executeQuery(input)
    expect(console.log).toHaveBeenNthCalledWith(1, 26)
    expect(console.log).toHaveBeenNthCalledWith(2, 91)
    console.log = consoleLog
  })
})
