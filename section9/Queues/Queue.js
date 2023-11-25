class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first.value;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0 || !this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log('Current Queue: ', myQueue, '\n');

const dq1 = myQueue.dequeue();
console.log('Dequeue 1: ', dq1);
const dq2 = myQueue.dequeue();
console.log('Dequeue 2: ', dq2, '\n');

console.log('Peek: ', myQueue.peek());

console.log('isEmpty: ', myQueue.isEmpty(), '\n');

const dq3 = myQueue.dequeue();
console.log('Dequeue 3: ', dq3);
const dq4 = myQueue.dequeue();
console.log('Dequeue 4: ', dq4);
const dq5 = myQueue.dequeue();
console.log('Dequeue 5: ', dq5);
