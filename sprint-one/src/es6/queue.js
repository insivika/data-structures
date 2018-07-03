class Queue {
  
  constructor() {
  
    this.counter = 0;

    this.indexArr = [];

    this.storage = {};

  }

  enqueue(value){

    this.storage[this.counter] = value;

    this.indexArr.push(this.counter);

    this.result = this.storage[this.counter];

    this.counter++;

    return this.result;

  }

  dequeue(){

    this.result = this.storage[this.indexArr[0]];

    delete this.storage[this.indexArr.shift()];

    return this.result;

  }

  size(){

    if(this.indexArr.length < 0){

      return 0;

    } else {

      return this.indexArr.length;

    }

  }

}
