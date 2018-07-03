var Queue = function() {

  this.storage = {};

  this.indexArr = [];

  this.counter = 0;

};

Queue.prototype.enqueue = function(value){

  this.storage[this.counter] = value;

  this.result = this.storage[this.counter];

  this.indexArr.push(this.counter);

  this.counter++;

  return this.result;

};

Queue.prototype.dequeue = function(){

  this.result = this.storage[this.indexArr[0]];

  delete this.storage[this.indexArr.shift()];

  return this.result;
  
};

Queue.prototype.size = function(){

  if(this.indexArr.length < 0){
    
    return 0;

  } else {

    return this.indexArr.length;

  }
  
};
