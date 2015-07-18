'use strict';

var random = require('random-ext');

function bubbleSortReqursion(array) {
  function coupleChange(a, b) {
    return a > b;
  }

  function change(arr, index) {
    var indexedValue = arr[index];
    var nextValue = arr[index + 1];

    arr[index] = nextValue;
    arr[index + 1] = indexedValue;

    return arr;
  }

  function isValidArray(_x) {
    var _again = true;

    _function: while (_again) {
      var index = _x;
      _again = false;

      if (coupleChange(array[index], array[index + 1])) {
        return false;
      }

      if (!array[index + 1]) {
        return true;
      }

      _x = index + 1;
      _again = true;
      continue _function;
    }
  }

  function indexOfNextIterate(_x2) {
    var _again2 = true;

    _function2: while (_again2) {
      var index = _x2;
      _again2 = false;

      if (!array[index + 1]) {

        if (isValidArray(0)) {
          return false;
        }

        _x2 = 0;
        _again2 = true;
        continue _function2;
      }

      if (array[index + 1] && coupleChange(array[index], array[index + 1])) {
        return index;
      }

      _x2 = index + 1;
      _again2 = true;
      continue _function2;
    }
  }

  function iterate(_x3, _x4) {
    var _again3 = true;

    _function3: while (_again3) {
      var isIterate = _x3,
          index = _x4;
      nextIndex = undefined;
      _again3 = false;

      var nextIndex;

      if (!isIterate) {
        return array;
      }

      nextIndex = indexOfNextIterate(index);

      if (nextIndex !== false) {
        change(array, nextIndex);
        _x3 = true;
        _x4 = nextIndex;
        _again3 = true;
        continue _function3;
      }

      _x3 = false;
      _x4 = index + 1;
      _again3 = true;
      continue _function3;
    }
  }

  return iterate(true, 0);
}

function bubbleSortLoop(array) {
  for (var i = 0; i < array.length; i++) {
    for (var c = 0; c < array.length; c++) {
      var a = array[c],
          b = array[i];
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

