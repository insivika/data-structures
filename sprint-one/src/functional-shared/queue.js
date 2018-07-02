var Queue = function() {
  var newQueue = {};

  newQueue.storage = {};

  newQueue.counter = 0;

  newQueue.indexArr = [];

  _.extend(newQueue, Queue.queueMethods);

  return newQueue;
};

Queue.queueMethods = {};

Queue.queueMethods.enqueue = function(value){
   this.indexArr.push(this.counter);

   this.storage[this.counter] = value;

   this.result = this.storage[this.counter]
  
   this.counter++;

   return this.result;

};

Queue.queueMethods.dequeue = function(){
   this.result = this.storage[this.indexArr[0]];

   delete this.storage[this.indexArr[0]];

   this.indexArr.shift(this.indexArr[0]);

   return this.result;

};

Queue.queueMethods.size = function(){
   return this.indexArr.length;
};