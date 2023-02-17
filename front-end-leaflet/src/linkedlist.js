export class Item {
  constructor(event) {
    this.event = event;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor(event) {
    this.head = null;
    this.tail = null;
    this.prev = null;
    this.length = 0;
    this.append(event);
  }

  // console.log() all items
  printAll() {
    let current = this.head;
    while (current !== null) {
      console.log(current);
      current = current.next;
    }
  }

  returnAll() {
    let array = [];
    let current = this.head;
    while (current !== null) {
      array.push(current)
      current = current.next;
    }
    return array
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

  // returns an event by index
  returnByIdx(idx) {
    let current = this.head;
    let count = 0;
    while (current !== null && count != idx) {
      count += 1;
      current = current.next;
    }
    return current;
  }

  // creates linked list from all unresolved event in db
  createEventsLinkedListFromDB() {
    console.log('test')
  }

}


const date1 = "2023-02-11T22:43:14.977Z"
const date2 = "2023-02-12T22:43:14.977Z"
const date3 = "2023-02-13T22:43:14.977Z"
const date4 = "2023-02-16T22:42:49.141Z"

// console.log(date1 < date2) //true


export let testingData = new LinkedList({
  "indicent_id": "1",
  "initialization_time": date1,
  "nature_code": "xxx",
  "location": {
    "address": {
      "street": "xxx",
      "city": "xxx",
      "state": "xxx",
      "zip": "xxx"
    },
    "point": {
      "latitude": 46.798031,
      "longitude": -92.150649
    }
  },
  "outcome_status": "xxx",
  "responders": []
})
testingData.append({
  "indicent_id": "2",
  "initialization_time": date2,
  "nature_code": "xxx",
  "location": {
    "address": {
      "street": "xxx",
      "city": "xxx",
      "state": "xxx",
      "zip": "xxx"
    },
    "point": {
      "latitude": 46.779225,
      "longitude": -92.204929
    }
  },
  "outcome_status": "xxx",
  "responders": []
})
testingData.append({
  "indicent_id": "3",
  "initialization_time": date3,
  "nature_code": "xxx",
  "location": {
    "address": {
      "street": "xxx",
      "city": "xxx",
      "state": "xxx",
      "zip": "xxx"
    },
    "point": {
      "latitude": 46.738300,
      "longitude": -92.185690
    }
  },
  "outcome_status": "xxx",
  "responders": []
})
testingData.append({
  "indicent_id": "4",
  "initialization_time": date4,
  "nature_code": "xxx",
  "location": {
    "address": {
      "street": "xxx",
      "city": "xxx",
      "state": "xxx",
      "zip": "xxx"
    },
    "point": {
      "latitude": 46.825287,
      "longitude": -92.035217
    }
  },
  "outcome_status": "xxx",
  "responders": []
})


// export default LinkedList;
// module.exports = LinkedList;