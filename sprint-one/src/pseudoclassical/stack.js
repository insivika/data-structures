var Stack = function() {

  this.storage = {};

  this.counter = 0;

};

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

  } else {

    return this.counter;

  }
};

