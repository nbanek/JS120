class CircularQueue {
  constructor(queueSize) {
    this.queueSize = queueSize
    this.queue = new Array(queueSize).fill(null);
    this.next = 0;
    this.oldest = 0;
  }
  enqueue(obj) {

    if(this.queue[this.next] !== null){
      this.oldest = this.increment(this.next);
    }
    this.queue[this.next] = obj;
    this.next = this.increment(this.next);


  }
  dequeue(obj) {
    let value = this.queue[this.oldest];
    this.queue[this.oldest] = null;
    if (value !== null) {
      this.oldest = this.increment(this.oldest);
    }
    return value;
  }
  

  getQueue() {
    console.log(this.queue);
  }

  increment(position) {
    return (position + 1) % this.queue.length;
  }
}

let queue = new CircularQueue(3);
console.log(queue.dequeue() === null);

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue() === 1);

queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue() === 2);

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue() === 5);
console.log(queue.dequeue() === 6);
console.log(queue.dequeue() === 7);
console.log(queue.dequeue() === null);

let anotherQueue = new CircularQueue(4);
console.log(anotherQueue.dequeue() === null);

anotherQueue.enqueue(1)
anotherQueue.enqueue(2)
console.log(anotherQueue.dequeue() === 1);

anotherQueue.enqueue(3)
anotherQueue.enqueue(4)
console.log(anotherQueue.dequeue() === 2);

anotherQueue.enqueue(5)
anotherQueue.enqueue(6)
anotherQueue.enqueue(7)
console.log(anotherQueue.dequeue() === 4);
console.log(anotherQueue.dequeue() === 5);
console.log(anotherQueue.dequeue() === 6);
console.log(anotherQueue.dequeue() === 7);
console.log(anotherQueue.dequeue() === null);