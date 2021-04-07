const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.list = {};
    this.counter = 0;
    const nodeTest = new ListNode();
    nodeTest.value = 1;
  }

  get size() {
    return this.counter;
  }

  enqueue(el) {
    const newNode = {
      value: el,
      next: null,
    };

    if (!this.tail) {
      this.tail = newNode;
    }

    if (!this.list.value) {
      this.list = newNode;
      this.counter++;
    } else {
      this.tail.next = newNode;
      this.counter++;
    }
    this.tail = newNode;
  }

  dequeue() {
    const deletedEl = this.list.value;
    if (this.list.next) {
      this.list.value = this.list.next.value;
      this.list.next = this.list.next.next;
    } else {
      this.list.value = null;
    }
    return deletedEl;
  }
}

module.exports = Queue;
