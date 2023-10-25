class DoublyLinkedList {
  constructor(value) {
    this.head = { value, prev: null, next: null };
    // Tail in this case is a reference to the head, and not a copy of the head.
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value, prev: null, next: null };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    // Return the whole linked list.
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = { value, next: null, prev: null };
    const traversedNode = this.traverseToIndex(index - 1);

    if (traversedNode) {
      const origNextNode = traversedNode.next;
      traversedNode.next = newNode;
      newNode.next = origNextNode;
      newNode.prev = traversedNode;
      this.length++;
      return this;
    }

    return null;

    // Instructor solution.
    /*
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {value, prev: null, next: null };
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this;
    */
  }

  prepend(value) {
    const newNode = { value, next: null, prev: null };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return {
      outputArray: array,
      linkedList: this,
    };
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return this;
    }

    const traversedNode = this.traverseToIndex(index - 1);

    if (traversedNode) {
      const nextTraversedNode = this.traverseToIndex(index + 1);
      delete traversedNode.next;
      traversedNode.next = nextTraversedNode;
      //nextTraversedNode.prev = traversedNode;
      this.length--;

      if (this.length === index) {
        this.tail = {
          value: traversedNode.value,
          prev: traversedNode.prev,
          next: null,
        };
      }

      return this;
    }
  }

  traverseToIndex(index) {
    if (index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }

    return currentNode;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
myLinkedList.insert(200, 100);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.remove(4);
console.log(myLinkedList.printList());
myLinkedList.remove(0);
console.log(myLinkedList.printList());
