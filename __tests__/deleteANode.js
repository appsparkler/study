describe('deleteNode', () => {
  const deleteNode = (head, position) => {
    let currentNode = head
    for (let i = 0; i < position; i++) {
      currentNode = currentNode.next
    }
    Object.assign(currentNode, {
      data: currentNode.next.data,
      next: currentNode.next.next,
    })
    return head
  }
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

  function main(inputArr) {
    const llistCount = inputArr[0]

    const llist = new SinglyLinkedList()

    for (let i = 1; i <= llistCount; i++) {
      const llistItem = inputArr[i]
      llist.insertNode(llistItem)
    }
    const position = inputArr[1 + llistCount]
    const llist1 = deleteNode(llist.head, position)
    return llist1
  }

  it('should correctly deleteNode', () => {
    const input = `8
20
6
2
19
7
4
15
9
3`
    const result = main(input.split('\n').map((i) => parseInt(i)))
    const output = '20 6 2 7 4 15 9'.split(' ')
        .map((i) => parseInt(i))
    expect(result).toEqual(output)
  })
})
