
var random = require('random-ext');

function bubbleSort(array) {
  var whileLoop = true, newArr = [], loopedArray = array;

  function compareNumber(a, b) {
    return a < b;
  }

  function getBiggest(bigarr) {
    return bigarr.reduce(function (first, item, value, arr, index) {
      if (first && compareNumber(item, first)) {
        return first;
      }

      if (first && compareNumber(first, item)) {
        return item;
      }

      return item;
    }, null);
  }

  while(whileLoop) {
    var pushedValue = getBiggest(loopedArray);

    newArr.unshift(pushedValue);
    loopedArray = loopedArray.filter(function (v) { return v !== pushedValue });
    if (!loopedArray.length) { whileLoop = false; }
  }

  return newArr;
}

console.time('bubble');
bubbleSort(random.integerArray(999, 999, 0));
console.timeEnd('bubble');
