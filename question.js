'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', (inputStdin) => {
  console.log(inputStdin)
  inputString += inputStdin
})

process.stdin.on('end', function() {
  inputString = inputString.replace(/\s*$/, '')
      .split('\n')
      .map((str) => str.replace(/\s*$/, ''))

  main()
})
function readLine() {
  return inputString[currentLine++]
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
  }
}

function printSinglyLinkedList(node, sep, ws) {
  while (node != null) {
    ws.write(String(node.data))

    node = node.next

    if (node != null) {
      ws.write(sep)
    }
  }
}

// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
  console.log(head, data)
  // const isEmpty = head === null
  // const node = {}
  // if (isEmpty) {
  //   node.data = data
  //   node.next = null
  //   head = node
  //   return head
  // }
  // const isTail = head.next === null
  // if (isTail) {
  //   const node = {}
  //   head.next = node
  //   node.data = data
  //   node.next = null
  //   return head
  // } else {
  //   const nextHead = head.next
  //   const newHead = insertNodeAtTail(nextHead, data)
  //   return newHead
  // }
  return 'hello'
}

export function main(str) {
  // const ws = fs.createWriteStream(outputPath)
  inputString = str
  const llistCount = parseInt(readLine(), 10)
  console.log('list count', typeof llistCount)
  const llist = new SinglyLinkedList()

  for (let i = 0; i < llistCount; i++) {
    const llistItem = parseInt(readLine(), 10)
    const llist_head = insertNodeAtTail(llist.head, llistItem)
    llist.head = llist_head
  }

  return llist.head
  // printSinglyLinkedList(llist.head, '\n', ws)
  // ws.write('\n')

  // ws.end()
}
