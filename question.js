let questions = [
  {
    num: 1,
    question: "Is Javascript an Object Oriented Language",
    answer: "Yes",
    Option: ["No", "Maybe", "Yes", "False"],
  },

  {
    num: 2,
    question: "Which symbol is used for single-line comments in JavaScript?",
    answer: "//",
    Option: ["#", "$", "%", "//"],
  },

  {
    num: 3,
    question: "How do you declare a variable in JavaScript?",
    answer: "var variableName;",
    Option: [
      "var variableName;",
      "variable variableName;",
      "declare variableName;",
      "let variableName;",
    ],
  },

  {
    num: 4,
    question: "What is the correct way to create a function in JavaScript?",
    answer: "function myFunction() {}",
    Option: [
      "create function myFunction() {}",
      "function myFunction() {}",
      "func myFunction() {}",
      "function:myFunction() {}",
    ],
  },

  {
    num: 5,
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    answer: "push()",
    Option: ["add()", "append()", "push()", "insert()"],
  },

  //   {
  //     num: 6,
  //     question: "How can you convert a string to an integer in JavaScript?",
  //     answer: "parseInt()",
  //     Option: ["parseInt()", "toInteger()", "parseString()", "convert()"],
  //   },

  //   {
  //     num: 7,
  //     question: "Which of the following is NOT a JavaScript data type?",
  //     answer: "Character",
  //     Option: ["Boolean", "Number", "Object", "Character"],
  //   },

  //   {
  //     num: 8,
  //     question: "What does the typeof operator do in JavaScript?",
  //     answer: "Checks the type of a variable",
  //     Option: [
  //       "Checks the type of a variable",
  //       "Converts a variable to a type",
  //       "Changes the type of a variable",
  //       "Deletes a variable",
  //     ],
  //   },

  //   {
  //     num: 9,
  //     question: "How do you declare a constant in JavaScript?",
  //     answer: "const constantName;",
  //     Option: [
  //       "const constantName;",
  //       "constant constantName;",
  //       "let constantName;",
  //       "var constantName;",
  //     ],
  //   },

  //   {
  //     num: 10,
  //     question: "What will console.log(2 + '2') output in JavaScript?",
  //     answer: "'22'",
  //     Option: ["4", "'22'", "NaN", "'4'"],
  //   },

  //   {
  //     num: 11,
  //     question: "Which method is used to remove the last element from an array?",
  //     answer: "pop()",
  //     Option: ["pop()", "shift()", "slice()", "splice()"],
  //   },

  //   {
  //     num: 12,
  //     question: "How can you check if a variable is an array?",
  //     answer: "Array.isArray()",
  //     Option: [
  //       "Array.isArray()",
  //       "variable.isArray()",
  //       "typeof variable === 'array'",
  //       "variable instanceof Array",
  //     ],
  //   },

  //   {
  //     num: 13,
  //     question:
  //       "Which operator is used to compare both value and type in JavaScript?",
  //     answer: "===",
  //     Option: ["==", "===", "!=", "!=="],
  //   },

  //   {
  //     num: 14,
  //     question: "What will console.log(0 == '0') output?",
  //     answer: "true",
  //     Option: ["true", "false", "undefined", "NaN"],
  //   },

  //   {
  //     num: 15,
  //     question: "What is the purpose of the return statement in a function?",
  //     answer: "To return a value from the function",
  //     Option: [
  //       "To exit the function",
  //       "To return a value from the function",
  //       "To start the function",
  //       "To log a message",
  //     ],
  //   },

  //   {
  //     num: 16,
  //     question: "Which statement is used to handle errors in JavaScript?",
  //     answer: "try",
  //     Option: ["catch", "error", "throw", "try"],
  //   },

  //   {
  //     num: 17,
  //     question: "How do you create a new object in JavaScript?",
  //     answer: "var obj = new Object();",
  //     Option: [
  //       "var obj = new Object();",
  //       "var obj = Object.create();",
  //       "var obj = {};",
  //       "Both a and c",
  //     ],
  //   },

  //   {
  //     num: 18,
  //     question: "Which function can be used to find the length of an array?",
  //     answer: "length",
  //     Option: ["length()", "size()", "getLength()", "length"],
  //   },

  //   {
  //     num: 19,
  //     question: "How can you concatenate two strings in JavaScript?",
  //     answer: "string1 + string2",
  //     Option: [
  //       "string1 + string2",
  //       "string1.concat(string2)",
  //       "string1.append(string2)",
  //       "Both a and b",
  //     ],
  //   },

  //   {
  //     num: 20,
  //     question:
  //       "Which method is used to join all elements of an array into a single string?",
  //     answer: "join()",
  //     Option: ["join()", "combine()", "merge()", "concat()"],
  //   },

  //   {
  //     num: 21,
  //     question: "How do you create a class in JavaScript?",
  //     answer: "class MyClass {}",
  //     Option: [
  //       "class MyClass {}",
  //       "function MyClass() {}",
  //       "var MyClass = new Class() {}",
  //       "create class MyClass {}",
  //     ],
  //   },

  //   {
  //     num: 22,
  //     question: "What does the this keyword refer to in JavaScript?",
  //     answer: "The current object",
  //     Option: [
  //       "The global object",
  //       "The current object",
  //       "The previous object",
  //       "The function object",
  //     ],
  //   },

  //   {
  //     num: 23,
  //     question: "How can you prevent a form from submitting in JavaScript?",
  //     answer: "event.preventDefault()",
  //     Option: [
  //       "event.preventDefault()",
  //       "return false;",
  //       "form.cancel()",
  //       "form.stop()",
  //     ],
  //   },

  //   {
  //     num: 24,
  //     question:
  //       "Which method is used to find the first index of a value in an array?",
  //     answer: "indexOf()",
  //     Option: ["findIndex()", "indexOf()", "search()", "locate()"],
  //   },

  //   {
  //     num: 25,
  //     question: "How can you check if a function exists in JavaScript?",
  //     answer: "typeof functionName === 'function'",
  //     Option: [
  //       "typeof functionName === 'function'",
  //       "functionName.exists()",
  //       "functionName.check()",
  //       "functionName !== undefined",
  //     ],
  //   },

  //   {
  //     num: 26,
  //     question: "Which operator is used for logical AND in JavaScript?",
  //     answer: "&&",
  //     Option: ["&&", "||", "&", "and"],
  //   },

  //   {
  //     num: 27,
  //     question: "What does the map() method do in JavaScript?",
  //     answer: "Transforms each element of an array",
  //     Option: [
  //       "Transforms each element of an array",
  //       "Filters elements of an array",
  //       "Reduces elements of an array",
  //       "Joins elements of an array",
  //     ],
  //   },

  //   {
  //     num: 28,
  //     question: "What is the output of console.log(5 == '5')?",
  //     answer: "true",
  //     Option: ["true", "false", "undefined", "NaN"],
  //   },

  //   {
  //     num: 29,
  //     question: "How do you access the first element of an array named arr?",
  //     answer: "arr[0]",
  //     Option: ["arr[0]", "arr.first()", "arr.get(0)", "arr.firstElement()"],
  //   },

  //   {
  //     num: 30,
  //     question: "What is the result of typeof NaN in JavaScript?",
  //     answer: "number",
  //     Option: ["number", "NaN", "undefined", "object"],
  //   },

  //   {
  //     num: 31,
  //     question: "How do you create a new array with 1, 2, 3 in JavaScript?",
  //     answer: "var arr = [1, 2, 3];",
  //     Option: [
  //       "var arr = [1, 2, 3];",
  //       "var arr = (1, 2, 3);",
  //       "var arr = new Array(1, 2, 3);",
  //       "Both a and c",
  //     ],
  //   },

  //   {
  //     num: 32,
  //     question: "Which method removes the first element from an array?",
  //     answer: "shift()",
  //     Option: ["shift()", "pop()", "unshift()", "slice()"],
  //   },

  //   {
  //     num: 33,
  //     question:
  //       "What is the default value of a variable that is declared but not initialized?",
  //     answer: "undefined",
  //     Option: ["null", "undefined", "0", "false"],
  //   },

  //   {
  //     num: 34,
  //     question: "What is the purpose of the break statement in JavaScript?",
  //     answer: "To exit from a loop or switch statement",
  //     Option: [
  //       "To exit from a loop or switch statement",
  //       "To pause the execution",
  //       "To restart the loop",
  //       "To continue with the next iteration",
  //     ],
  //   },

  //   {
  //     num: 35,
  //     question: "How can you check if an object has a specific property?",
  //     answer: "object.hasOwnProperty(property)",
  //     Option: [
  //       "object.hasOwnProperty(property)",
  //       "object.includes(property)",
  //       "object.contains(property)",
  //       "object.check(property)",
  //     ],
  //   },

  //   {
  //     num: 36,
  //     question:
  //       "Which keyword is used to define a variable that can be reassigned?",
  //     answer: "let",
  //     Option: ["const", "let", "var", "define"],
  //   },

  //   {
  //     num: 37,
  //     question: "What is the result of console.log(4 * '2')?",
  //     answer: "8",
  //     Option: ["8", "'8'", "NaN", "undefined"],
  //   },

  //   {
  //     num: 38,
  //     question: "Which method will sort an array in ascending order?",
  //     answer: "sort()",
  //     Option: ["sort()", "order()", "arrange()", "sequence()"],
  //   },

  //   {
  //     num: 39,
  //     question: "How do you make an HTTP request in JavaScript?",
  //     answer: "fetch()",
  //     Option: ["fetch()", "request()", "xhr()", "http()"],
  //   },

  //   {
  //     num: 40,
  //     question: "What does JSON.stringify() do?",
  //     answer: "Converts a JavaScript object into a JSON string",
  //     Option: [
  //       "Converts a JavaScript object into a JSON string",
  //       "Parses a JSON string into a JavaScript object",
  //       "Converts a JSON string into an array",
  //       "Converts an array into a JSON string",
  //     ],
  //   },

  //   {
  //     num: 41,
  //     question:
  //       "Which method is used to add an element to the beginning of an array?",
  //     answer: "unshift()",
  //     Option: ["unshift()", "push()", "prepend()", "insert()"],
  //   },

  //   {
  //     num: 42,
  //     question: "How do you declare a function expression in JavaScript?",
  //     answer: "const myFunc = function() {};",
  //     Option: [
  //       "const myFunc = function() {};",
  //       "function myFunc() {};",
  //       "const myFunc() = function {};",
  //       "function: myFunc() {};",
  //     ],
  //   },

  //   {
  //     num: 43,
  //     question: "What will console.log([] == ![]) output?",
  //     answer: "true",
  //     Option: ["true", "false", "undefined", "NaN"],
  //   },

  //   {
  //     num: 44,
  //     question: "How can you remove whitespace from both ends of a string?",
  //     answer: "trim()",
  //     Option: ["trim()", "strip()", "clean()", "cut()"],
  //   },

  //   {
  //     num: 45,
  //     question: "Which function is used to get the current date and time?",
  //     answer: "Date.now()",
  //     Option: ["Date.now()", "Date.get()", "Date.time()", "Date.current()"],
  //   },

  //   {
  //     num: 46,
  //     question: "What is the purpose of the continue statement in a loop?",
  //     answer: "To skip the current iteration and continue with the next one",
  //     Option: [
  //       "To skip the current iteration and continue with the next one",
  //       "To exit the loop",
  //       "To pause the loop execution",
  //       "To restart the loop",
  //     ],
  //   },

  //   {
  //     num: 47,
  //     question: "Which method will remove specific elements from an array?",
  //     answer: "splice()",
  //     Option: ["splice()", "pop()", "shift()", "slice()"],
  //   },

  //   {
  //     num: 48,
  //     question: "What does the for...in loop iterate over?",
  //     answer: "Object properties",
  //     Option: [
  //       "Array elements",
  //       "Object properties",
  //       "Function arguments",
  //       "String characters",
  //     ],
  //   },

  //   {
  //     num: 49,
  //     question: "How can you check if a number is an integer in JavaScript?",
  //     answer: "Number.isInteger()",
  //     Option: [
  //       "Number.isInteger()",
  //       "Number.isInt()",
  //       "Number.checkInteger()",
  //       "Number.integer()",
  //     ],
  //   },

  //   {
  //     num: 50,
  //     question: "What is the result of console.log(10 / 0)?",
  //     answer: "Infinity",
  //     Option: ["Infinity", "NaN", "undefined", "0"],
  //   },
];
