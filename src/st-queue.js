const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
function accumulateNodes(value,buffer){
if (buffer.next==null) {
  buffer.next =  new ListNode(value);
  return buffer;
} else {
  buffer.next =  accumulateNodes(value, buffer.next);
  return buffer;
}

 
}


/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
constructor(){
  this.head=null;
  
}

 
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.head==null){
      this.head=new ListNode(value);
      
    } else {
      let buffer = this.head;
      
       
      this.head = accumulateNodes(value,buffer);
  
    }
  }

  dequeue() {
    if (this.head==null) return null;
    else{
    let deleteItem = this.head.value;
    
    this.head=this.head.next;
    
    
    return deleteItem;
    }
  }

}
