describe('insertNodeAtPosition', () => {
  const SinglyLinkedListNode = class {
    constructor(nodeData) {
      this.data = nodeData
      this.next = null
    }
  }
  const SinglyLinkedList = class {
    constructor() {
      this.head = null
      this.tail = null
    }

    insertNode(nodeData) {
      const node = new SinglyLinkedListNode(nodeData)

      if (this.head == null) {
        this.head = node
      } else {
        this.tail.next = node
      }

      this.tail = node
    }
  }

  const insertNodeAtPosition = (head, data, position) => {
    let currentNode = head
    for (let i = 0; i < position; i++) {
      currentNode = currentNode.next
    }
    Object.assign(currentNode, {
      next: {
        data: currentNode.data,
        next: currentNode.next,
      },
      data: data,
    })
    return head
  }

  const main = (inputArr) => {
    const llistCount = inputArr[0]

    const llist = new SinglyLinkedList()

    for (let i = 1; i <= llistCount; i++) {
      const llistItem = inputArr[i]
      llist.insertNode(llistItem)
    }

    const data = inputArr[llistCount + 1]

    const position = inputArr[llistCount + 2]

    const llist_head = insertNodeAtPosition(
        llist.head, data, position
    )
    return llist_head
  }
  it('should insertNodeAtPosition', () => {
    const input = `3
16
13
7
1
2`
    main(input.split('\n').map((i) => parseInt(i)))
  })
})
