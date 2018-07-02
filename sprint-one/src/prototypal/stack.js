Stack.stackMethods = {};
  
Stack.stackMethods.push = function(value){

    this.storage[this.counter] = value;

    this.result = this.storage[this.counter];

    this.counter++;

    return this.result;

  };

  Stack.stackMethods.pop = function(){

    this.counter--;

    this.result = this.storage[this.counter];

    delete this.storage[this.counter];

    return this.result;

  };

  Stack.stackMethods.size = function(){

    return this.counter;

  };
