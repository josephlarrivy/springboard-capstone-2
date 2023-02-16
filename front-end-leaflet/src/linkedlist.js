class Item {
  constructor(event) {
    this.event = event;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor(event) {
    this.head = null;
    this.tail = null;
    this.prev = null;
    this.length = 0;
    this.append(event);
  }

  // push(event): add new value to end of list.
  append(event) {
    let newItem = new Item(event);

    if (!this.head) {
      this.head = newItem;
      this.tail = this.head;
      this.prev = null;
    } else {
      this.tail.next = newItem;
      newItem.prev = this.tail
      this.tail = newItem;
    }
    this.length += 1;
  }

  // console.log() all items
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current);
      current = current.next;
    }
  }

  // adds new item to front of list
  unshift(event) {
    let newItem = new Item(event);
    if (this.head === null) {
      this.head = newItem;
    } else {
      this.head.prev = newItem;
      newItem.next = this.head;
      this.head = newItem;
      this.head.prev = null;
    }
    if (this.length === 0) this.tail = this.head;
    this.length += 1;
  }




}



let list = new LinkedList(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.unshift(6)


// console.log(list)
list.print()

module.exports = LinkedList;