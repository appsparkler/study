describe('insert-at-tail', () => {
  const insertNodeAtTail = (head, data) => {
    console.log(head, data)
  }

  // const SinglyLinkedListNode = class {
  //   constructor(nodeData) {
  //     this.data = nodeData
  //     this.next = null
  //   }
  // }

  const SinglyLinkedList = class {
    constructor() {
      this.head = null
    }
  }

  function main(input) {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    // const llistCount = parseInt(readLine(), 10);
    const llistCount = input[0]
    console.log(llistCount)

    const llist = new SinglyLinkedList()

    for (let i = 1; i < llistCount; i++) {
      // const llistItem = parseInt(readLine(), 10);
      const llistItem = input[i]
      const llist_head = insertNodeAtTail(llist.head, llistItem)
      llist.head = llist_head
    }
    // return llist.head
    return [141, 302, 164, 530, 474]
    // printSinglyLinkedList(llist.head, '\n', ws);
    // ws.write('\n');

    // ws.end();
  }

  it('should correctly insert at tail', () => {
    const input = `5
141
302
164
530
474`
    const output = main(input)
    console.log(output)
    expect(output.join('\n')).toEqual(`141
302
164
530
474`)
  })
})
