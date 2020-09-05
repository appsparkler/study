describe('insert-at-tail', () => {
  const insertNodeAtTail = (head, data) => {
    const isListEmpty = head === null
    if (isListEmpty) {
      head = {
        next: null,
        data,
      }
      return head
    }
    const isEndOfList = head.next === null
    if (isEndOfList) {
      const headNext = {
        next: null,
        data,
      }
      head.next = headNext
      return head
    } else {
      const headNext = insertNodeAtTail(head.next, data)
      head.next = headNext
      return head
    }
  }

  const SinglyLinkedList = class {
    constructor() {
      this.head = null
    }
  }

  function main(input) {
    console.log(input)
    const llistCount = input[0]
    const llist = new SinglyLinkedList()
    for (let i = 1; i <= llistCount; i++) {
      const llistItem = input[i]
      const llist_head = insertNodeAtTail(llist.head, llistItem)
      llist.head = llist_head
    }
    return llist.head
  }

  it('should correctly insert at tail', () => {
    const input = `5
141
302
164
530
474`
    const output = main(input.split('\n'))
    expect(output).toEqual({
      'next': {
        'next': {
          'next': {
            'next': {
              'next': null,
              'data': '474',
            },
            'data': '530',
          },
          'data': '164',
        },
        'data': '302',
      },
      'data': '141',
    })
  })
})
