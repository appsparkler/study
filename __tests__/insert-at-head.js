describe('Insert a node at the head of a linked list', () => {
  const SinglyLinkedList = class {
    constructor() {
      this.head = null
      this.tail = null
    }
  }

  const insertNodeAtHead = (head, data) => {
    const isEmpty = head === null
    if (isEmpty) {
      head = {
        next: null,
        data,
      }
      return head
    }
    const newHead = {
      next: head,
      data: data,
    }
    return newHead
  }

  const main = (arr) => {
    const llistCount = arr[0]
    const llist = new SinglyLinkedList()
    for (let i = 1; i <= llistCount; i++) {
      const llistItem = arr[i]
      const llist_head = insertNodeAtHead(llist.head, llistItem)
      llist.head = llist_head
    }
    return llist.head
  }

  it('should correctly insert at head', () => {
    const input = `5
383
484
392
975
321`
    const arr = input.split('\n')
    main(arr)
  })
})
