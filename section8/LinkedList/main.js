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
    
    while(currentNode !== null ) {
        array.push(currentNode.value);
        currentNode = currentNode.next;
    }

    return array;
  }

}

const myLinkedList = new LinkedList(10);
console.log(myLinkedList);
myLinkedList.append(5);
console.log(myLinkedList);
myLinkedList.append(16);
console.log(myLinkedList);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
