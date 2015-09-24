var curry = require('./curry');

function calculate (arg) {
  return function (operator) {

    switch (operator) {
      case '+' :
      case 'add':
        return function (arg2) {
          return arg + arg2;
        };

      case '-' :
      case 'subtract':
        return function (arg2) {
          return arg - arg2;
        };

      case '*' :
      case 'multiply':
        return function (arg2) {
          return arg * arg2;
        };

      case '/' :
      case 'divide':
        return function (arg2) {
          return arg / arg2;
        };

      case '%' :
      case 'modulo':
        return function (arg2) {
          return arg % arg2;
        };

      case '^' :
      case 'power of':
        return function (arg2) {
          return Math.pow(arg, arg2);
        };

      default :
        return 'use a mathematical operator';
    }
  };
}

function random (start) {
  return { to : function (end) { return Math.floor(Math.random() * (end - start)) + start },
          toInclude : function (end) { return Math.floor(Math.random() * ((end + 1) - start) + start) } };
}

function concat(one, two) {
  return one + two;
}

var prependGreeting = function (yo) {
  return concat('Hello ',yo);
};


function add (one, two, three) {
  return one + two + three;
}

var add4and5 = function (sweet) {
  return add(4, 5, sweet);
};

function calculator(operation) {
  switch (operation) {
    case '+' :
    case 'add':
      return function (op1, op2) {
        return op1 + op2;
      };

    case '-' :
    case 'subtract':
      return function (op1, op2) {
        return op2 - op1;
      };

    case '*' :
    case 'multiply':
      return function (op1, op2) {
        return op1 * op2;
      };

    case '/' :
    case 'divide':
      return function (op1, op2) {
        return op2 / op1;
      };

    case '%' :
    case 'modulo':
      return function (op1, op2) {
        return op2 % op1;
      };

    case '^' :
    case 'power of':
      return function (op1, op2) {
        return Math.pow(op2, op1);
      };

    default :
      return 'use a mathematical operator';
  }
}

var add5 =  function (woot) {
  return calculator('+')(woot, 5);
};
var sub5 = function (woot) {
  return calculator('-')(5, woot);
};
var multiply5 = function (woot) {
  return calculator('*')(5, woot);
};
var divide5 = function (woot) {
  return calculator('/')(5, woot);
};
var mod5 = function (woot) {
  return calculator('%')(5, woot);
};
var pow3 = function (woot) {
  return calculator('^')(3, woot);
};

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};