var Stack = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {};
  
  // Implement the methods below
  
  someInstance.push = function(value) {
    storage[count] = value;
    var result = storage[count]
    count++;
    return result;
  
  };
  console.log(storage)
  
  someInstance.pop = function() {
     count--;
     result = storage[count];
     delete storage[count];
     return result;
     
  };

  someInstance.size = function() {
  if(count < 0 ){
      return 0;
    }
  return count;
   
  }
  
  return someInstance;
};
