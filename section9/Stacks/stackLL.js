class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top.value;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0 || !this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    return holdingPointer.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();
console.log('isEmpty: ', myStack.isEmpty());
myStack.push('google');
myStack.push('Udemy');
myStack.push('Discord');
console.log('Stack: ', myStack);

let currentValue = myStack.pop();
console.log('Current pop: ', currentValue, '\n');

console.log('Peek: ', myStack.peek());
console.log('isEmpty: ', myStack.isEmpty());

currentValue = myStack.pop();
console.log('Current pop II: ', currentValue);

currentValue = myStack.pop();
console.log('Current pop III: ', currentValue);

console.log('Stack: ', myStack);
