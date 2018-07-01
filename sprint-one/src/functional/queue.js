var Queue = function() {
  var someInstance = {};
  var count = 0;
  var indexArr = [];

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    
    storage[count] = value;
    indexArr.push(count++);
    var size = indexArr.length
    return result;

  };

  someInstance.dequeue = function() {
    
    result = storage[indexArr[0]]
    delete storage[indexArr.shift()]
    return result;

  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};