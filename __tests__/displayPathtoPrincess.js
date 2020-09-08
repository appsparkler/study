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
    const {p, m} = whereArePAndM
    const onGridDiff = m.onGrid - p.onGrid
    const onGridItemDiff = m.onGridItem - p.onGridItem
    const neutralizedOnGridDiff = onGridDiff < 0 ? -onGridDiff: onGridDiff
    const neutralizedOnGridItemDiff = onGridItemDiff < 0 ?
    -onGridItemDiff : onGridItemDiff
    const moves = []
    for (let i = 0; i < neutralizedOnGridDiff; i++) {
      if (onGridDiff > 0) {
        moves.push('UP')
      } else {
        moves.push('DOWN')
      }
    }
    for (let i = 0; i < neutralizedOnGridItemDiff; i++) {
      if (onGridItemDiff > 0) {
        moves.push('LEFT')
      } else {
        moves.push('RIGHT')
      }
    }
    return moves
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
