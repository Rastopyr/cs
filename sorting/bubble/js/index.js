
var random = require('random-ext');

function bubbleSortReqursion(array) {
  function coupleChange (a, b) {
    return a > b;
  }

  function change(arr, index) {
    var indexedValue = arr[index];
    var nextValue = arr[index+1];

    arr[index] = nextValue;
    arr[index+1] = indexedValue;

    return arr
  }

  function isValidArray (index) {
    if (coupleChange(array[index], array[index+1])) {
      return false;
    }

    if (!array[index+1]) {
      return true;
    }

    return isValidArray(index+1);
  }

  function indexOfNextIterate(index) {
    if (!array[index+1]) {

      if( isValidArray(0) ) {
        return false;
      }

      return indexOfNextIterate(0);
    }

    if (array[index + 1] && coupleChange(array[index], array[index+1])) {
      return index;
    }

    return indexOfNextIterate(index+1);
  }

  function iterate (isIterate, index) {
    var nextIndex;

    if(!isIterate) {
      return array;
    }

    nextIndex = indexOfNextIterate(index);

    if (nextIndex !== false) {
      change(array, nextIndex);
      return iterate(true, nextIndex);
    }

    return iterate(false, index+1);
  }

  return iterate(true, 0);
}

function bubbleSortLoop(array) {
  for(var i = 0; i < array.length; i++) {
    for(var c = 0; c < array.length; c++) {
      var a = array[c], b = array[i];
      if (a > b) {
        array[i] = a;
        array[c] = b;
      }
    }
  }

  return array;
}

var array = random.integerArray(1000, 999, 0);

console.time('bubble');
bubbleSortLoop(array);
console.timeEnd('bubble');

console.time('bubble');
bubbleSortReqursion(array);
console.timeEnd('bubble');
