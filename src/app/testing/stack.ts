export class Stack {

  private stack: number[] = [];

  isEmpty() {
    return this.stack.length === 0;
  }

  push(element: number) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  clear() {
    this.stack.length = 0;
  }

}
