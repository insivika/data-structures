class Stack {
  // 
  constructor() {

    this.storage = {};

    this. counter = 0;

  }

  push(value){

    this.storage[this.counter] = value;

    this.result = this.storage[this.counter];

    this.counter++;

    return this.result;

  }

  pop(){

    this.counter--;

    this.result = this.storage[this.counter];

    delete this.storage[this.counter];

    return this.result;

  }

  size(){

    if(this.counter < 0){
    
      return 0;

    } else {

      return this.counter;

    }

  }

}