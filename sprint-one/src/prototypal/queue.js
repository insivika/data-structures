var Queue = function() {

  var newQueue = Object.create(queueMethods);
  
  newQueue.counter = 0;

  newQueue.storage = {};

  newQueue.indexArr = [];

  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function(value){

  this.indexArr.push(this.counter);

  this.storage[this.counter] = value;

  this.result = this.storage[this.counter];

  this.counter++;

  return this.result;

};

queueMethods.dequeue = function(){

  this.result = this.storage[this.indexArr[0]];

  delete this.storage[this.indexArr.shift()];
  
  return this.result;

};

queueMethods.size = function(){
  if(this.indexArr < 0){
    return 0;
  } else {
    return this.indexArr.length;
  }
};

