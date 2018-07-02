var Stack = function() {

  var newStack = Object.create(Stack.prototype);

  newStack.storage = {};

  newStack.counter = 0;

  return newStack;
};

var stackMethods = {};

Stack.prototype = {};

Stack.prototype.push = function(value){

  this.storage[this.counter] = value;

  this.result = this.storage[this.counter];

  this.counter++;

  return this.result;

};

Stack.prototype.pop = function(){

  this.counter--;

  this.result = this.storage[this.counter];

  delete this.storage[this.counter];

  return this.result;

};

Stack.prototype.size = function(){

  if(this.counter < 0){
    return 0;
  }
  return this.counter;

};