class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    // Tail in this case is a reference to the head, and not a copy of the head.
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value, next: null };
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

    const newNode = { value, next: null };
    const traversedNode = this.traverseToIndex(index - 1);

    if (traversedNode) {
      const origNextNode = traversedNode.next;
      traversedNode.next = newNode;
      newNode.next = origNextNode;
      this.length++;
      return this;
    }

    return null;
  }

  prepend(value) {
    const newNode = { value, next: null };
    newNode.next = this.head;
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
      this.length--;
      return this;
    }

    const traversedNode = this.traverseToIndex(index - 1);

    if (traversedNode) {
      const nextTraversedNode = this.traverseToIndex(index + 1);
      delete traversedNode.next;
      traversedNode.next = nextTraversedNode;
      this.length--;

      if (this.length === index) {
        this.tail = {
          value: traversedNode.value,
          next: null,
        };
      }

      return this;
    }
  }

  reverse() {
    // My solution.
    /*
    if (this.length === 1) {
        return this;
    }

    let currentNode = this.head;
    let currentIndex = 0;
    const newLinkedList = new this.constructor(this.head.value);

    while (currentIndex < this.length) {
      if (currentIndex > 0) {
          newLinkedList.prepend(currentNode.value);
      }
      currentNode = currentNode.next;
      currentIndex++;
    }

    this.head = newLinkedList.head;
    this.tail = newLinkedList.tail;

    return this;
    */

    // Instructor solution.
    if (!this.head.next) {
        return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second) {
        const temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    this.head.next = null;
    this.head = first;
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
//   myLinkedList.insert(2, 99);
//   console.log(myLinkedList.printList());
//   myLinkedList.insert(200, 100);
//   console.log(myLinkedList.printList());
//   myLinkedList.remove(2);
//   console.log(myLinkedList.printList());
//   myLinkedList.remove(4);
//   console.log(myLinkedList.printList());
//   myLinkedList.remove(0);
//   console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
