var Stack = function() {
  
  var newStack = {};

  newStack.count = 0;

  newStack.storage = {};

  newStack.result

  _.extend(newStack, Stack.stackMethods)

  return newStack;
};

Stack.stackMethods = {}

Stack.stackMethods.push = function(value){
  this.storage[this.count] = value; 
  
  this.result = this.storage[this.count];

  this.count++;
  
  return this.result;
   
};

Stack.stackMethods.pop = function(){
  
  this.count--;

  this.result = this.storage[this.count];

  delete this.storage[this.count]

  return this.result;

};

Stack.stackMethods.size = function(){
  if(this.count < 0){
    return 0;
  }
  return this.count;
};
