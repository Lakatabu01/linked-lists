class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedLists {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Append value to the end of the list
  append(value) {
    let current;
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  //Prepend value to the start of the list
  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      this.head = new Node(value, this.head);
    }
    this.size++;
  }

  //Return the total number of nodes in the list (size)
  nodeSize() {
    let listSize = this.size;
    return listSize;
  }

  //Returns the first node in the list (head)
  firstNode() {
    let nodeHead = this.head;
    return nodeHead;
  }

  //Returns the last node in the list (tail)
  tail() {
    let current = this.head;
    if (!current.next) {
      return null;
    } else {
      while (current.next) {
        current = current.next;
      }
      return current;
    }
  }

  //At index, returns the node at the given index
  at(index) {
    let count = 0;
    let current = this.head;

    if (index == 0) {
      return this.head;
    } else if (index > this.size) {
      return null;
    } else {
      while (count < index) {
        count++;
        current = current.next;
      }
      return current;
    }
  }

  //Pop removes the last element from the list
  pop() {
    let current = this.head;
    let previous;
    if (!this.head) return null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.size--;
    return (previous.next = null);
  }

  //contains(value) returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let current = this.head;
    if (!this.head) return false;

    while (current.next) {
      if (value == current.data) return true;
      current = current.next;
    }

    if (current.data == value) {
      return true;
    } else {
      return false;
    }
  }

  //find(value) returns the index of the node containing value, or null if not found.
  find(value) {
    let current = this.head;
    let count = 0;

    while (current.next) {
      count++;
      if (value == current.data) return count - 1;
      current = current.next;
    }

    if (current.data == value) {
      return this.size - 1;
    } else {
      return null;
    }
  }

  //toString represents your LinkedList objects as strings,
  //so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let current = this.head;
    let string = "";

    while (current) {
      string += "(" + current.data + ")";
      string += "->";
      current = current.next;
    }
    console.log(string);
  }

  //Extra credit
  //insertAt(value, index) that inserts a new node with the provided value
  //at the given index.
  insertAt(value, index) {
    let current = this.head;
    let count = 0;
    let previous;
    let node = new Node(value);

    //if index is out of range
    if (index > 0 && index > this.size) return;

    if (index == 0) {
      this.head = new Node(value, this.head);
      this.size++;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      node.next = current;
      previous.next = node;
      this.size++;
    }
  }

  //removeAt(index) that removes the node at the given index.
  removeAt(index) {
    let count = 0;
    let current = this.head;
    let previous;

    if (index > 0 && index > this.size) return;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
}

const newLink = new LinkedLists();

newLink.append("man");
newLink.append("fan");
newLink.prepend("van");
newLink.insertAt("fish", 0);
//console.log(newLink.nodeSize());
//console.log(newLink.firstNode());
//console.log(newLink.tail());
//newLink.pop();
//console.log(newLink.contains(100));
//console.log(newLink.find(10));
//newLink.removeAt(0);
console.log(newLink);
//console.log(newLink.at(2));
//newLink.toString();
