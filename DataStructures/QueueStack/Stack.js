class Stack {
  constructor(maxItems = Infinity) {
    this.items = [];
    this.maxItems = maxItems;
  }

  pop() {
    // Underflow if stack is empty
    if (this.empty())
      return "Underflow";
    return this.items.pop();
  }

  push(item) {
    if (this.items.length === this.maxItems) {
      throw new Error("Stack was already full!");
    }
    this.items.push(item);
  }

  empty() {
    return this.items.length === 0;
  }

  peek() {
    if (this.empty()) {
      throw new Error("Operation not allowed!");
    }
    return this.items[this.items.length - 1];
  }
}