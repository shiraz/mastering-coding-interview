class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

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
