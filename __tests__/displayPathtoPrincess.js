describe('displayPathtoPrincess method', () => {
  const displayPathtoPrincess = (dimension, grid) => {
    const whereArePAndM = grid.reduce((r, gridItem, idx, arr) => {
      const idxOfP = gridItem.indexOf('p')
      const isPInGridItem = idxOfP > -1
      if (isPInGridItem) {
        r = {
          p: {
            onGrid: idx + 1,
            onGridItem: idxOfP + 1,
          },
          m: {
            onGrid: Math.ceil(gridItem.length/2),
            onGridItem: Math.ceil(arr.length/2),
          },
        }
      }
      return r
    }, {})
    console.log(JSON.stringify(whereArePAndM, null, 2))
  }

  function processData(input) {
    const lines = input.split('\n')
    const dimension = parseInt(lines[0])
    const grid = []
    for (let i = 1; i <= dimension; ++i) {
      grid.push(lines[i])
    }
    displayPathtoPrincess(dimension, grid)
  }
  it('should correctly displayPathtoPrincess', () => {
    const input = `3
---
-m-
p--`
    processData(input)
    expect.assertions(0)
  })
})
