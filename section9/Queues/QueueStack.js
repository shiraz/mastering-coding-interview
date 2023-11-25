class Stack {
  constructor() {
    this.arr = [];
  }

  peek() {
    if (this.arr.length === 0) {
      return null;
    }

    return this.arr[this.arr.length - 1];
  }

  push(value) {
    this.arr.push(value);
    return this;
  }

  pop() {
    if (this.arr.length === 0) {
      return null;
    }

    return this.arr.pop();
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

class Queue {
  constructor() {
    this.stack = new Stack();
  }

  peek() {
    return this.stack.peek();
  }

  enqueue(value) {
    this.stack.push(value);
    return this;
  }

  dequeue() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
console.log(myQueue);
myQueue.enqueue(2);
console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.isEmpty());