class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    /** @var LinkedListNode */
    this.head = null;

    /** @var LinkedListNode */
    this.tail = null;
  }

  prepend(value) {
    // Make a new node to the head
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    // If there is no tail, let's make new node a tail
    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value) {
    //Make a new node
    const newNode = new LinkedListNode(value);

    // If there is no head, make this node head
    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
      return this;
    }

    // Set the next property of our last node to be new node
    const currentTail = this.tail;
    currentTail.next = newNode;

    // set this.tail to be the new node
    this.tail = newNode;

    return this;
  }

  delete(value) {
    // check if the linked is null
    if (!this.head) {
      return null;
    }

    let deleteNode = null;

    // check if the head is the item to delete
    if (this.head && this.head.value === value) {
      deleteNode = this.head;
      this.head.next = this.head.next;
    }

    // traverse our list
    let currentNode = this.head;
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deleteNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        }
      }
    }
  }
}
