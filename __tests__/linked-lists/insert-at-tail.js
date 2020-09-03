// import {
//   getArrayFromInput,
// } from '../../utils'
import {main} from '../../question.js'
// import fs from 'fs'

describe('insertAtTail', () => {
  const insertNodeAtTail = (...args) => {
    console.log(args)
  }
  /*
  *
  **/
  const SinglyLinkedList = class {
    /***/
    constructor() {
      this.head = null
    }
  }

  const init = (input) => {
    const llist = new SinglyLinkedList()
    const llistCount = input[0]

    for (let i = 1; i < llistCount; i++) {
      const llistItem = input[i]
      const llist_head = insertNodeAtTail(llist.head, llistItem)
      llist.head = llist_head
    }
  }

  it('should correctly insert at tail', () => {
    const input = `5
141
302
164
530
474`
    // const ws = fs.createWriteStream('./question')
    // ws.write(input)
    // ws.end()
    // init(input)
    const result = main(input)
    console.log(result)
    expect.assertions(0)
  })
})
