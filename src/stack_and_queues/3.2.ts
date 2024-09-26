class List {
  val: number;
  minVal: number;
  next: List | null;

  constructor(val, prevMin = Number.MAX_SAFE_INTEGER) {
    this.val = val;
    this.minVal = Math.min(val, prevMin);
    this.next = null;
  }
}

class Stack {   
  stack: List | null;
  length: number;

  constructor() {
    this.stack = null;
    this.length = 0;
  }

  push(val: number) {
    const item = new List(val, this.stack?.minVal);
    item.next = this.stack;

    this.stack = item;
    this.length++;
  }

  pop() {
    if (this.stack) {
      this.stack = this.stack.next;
      this.length --;
    }
  }

  min() {
    if (this.stack) {
      return this.stack.minVal;
    } else {
      return Number.MAX_SAFE_INTEGER;
    }
  }
}

const stack1 = new Stack();

stack1.push(1);

console.log(stack1.length);
console.log(stack1.min());

stack1.push(-1);

console.log(stack1.length);
console.log(stack1.min());

stack1.push(2);
stack1.push(-5);
stack1.push(-4);
stack1.push(-6);

console.log(stack1.min());

stack1.pop();
stack1.pop();

console.log(stack1.min());
