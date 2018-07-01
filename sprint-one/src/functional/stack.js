var Stack = function() {
  var someInstance = {};
  var count = 0;

  // Use an object with numeric keys to store values
  var storage = {'count' : ''};
  
  // Implement the methods below
  
  someInstance.push = function(value) {
    count++;
    console.log(value)
    storage[count] = value;
  };
  console.log(storage)
  
  someInstance.pop = function() {
     count--;
     
  };

  someInstance.size = function() {
  if(count < 0 ){
      return 0;
    }
  return count;
   
  }
  
  return someInstance;
};
