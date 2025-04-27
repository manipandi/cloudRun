export const questions = [
  {
    id: 1,
    question: "In JavaScript, which statement about the 'this' keyword is true?",
    options: [
      "In arrow functions, 'this' refers to the object that called it",
      "'this' always refers to the global object in strict mode",
      "In regular functions, 'this' depends on how the function is called",
      "'this' inside a class always refers to the class itself"
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which of the following is true about variable hoisting in JavaScript?",
    options: [
      "Only var is hoisted, let and const are not",
      "All declarations (var, let, const) are hoisted, but let and const remain uninitialized",
      "Functions are not hoisted",
      "Hoisting only happens inside functions, not globally"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Which of the following about JavaScript's event loop is correct?",
    options: [
      "setTimeout is a microtask",
      "Promises are handled in the macrotask queue",
      "The call stack must be empty before the event loop processes the microtask queue",
      "Event loop only processes DOM events, not asynchronous code"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What does the Symbol primitive type mainly provide?",
    options: [
      "It guarantees unique property keys",
      "It can replace Object.keys",
      "It converts to numbers automatically",
      "It allows deep cloning of objects"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which statement about closures is correct in JavaScript?",
    options: [
      "Closures can only access variables declared in their own function",
      "Closures lose reference to outer variables once the outer function exits",
      "Closures can maintain access to outer function variables even after the outer function has returned",
      "Closures are only possible with ES6 arrow functions"
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "Which of the following about JavaScript’s prototypal inheritance is true?",
    options: [
      "Every object can have multiple prototypes",
      "Methods are copied into child objects during inheritance",
      "Objects inherit directly from other objects via the prototype chain",
      "Only classes can create prototypes"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Regarding async/await, which statement is true?",
    options: [
      "await can only be used inside a promise constructor",
      "await pauses the entire JavaScript engine",
      "await pauses execution inside the function until the promise resolves",
      "await guarantees the order of execution across unrelated async functions"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Which feature best describes currying in JavaScript?",
    options: [
      "Dividing a function into multiple functions that each take one argument",
      "Executing a function immediately after it is defined",
      "Running multiple promises in parallel",
      "Modifying an existing function’s behavior at runtime"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "In JavaScript, a 'pure function' must:",
    options: [
      "Modify external variables but return consistent results",
      "Not modify external variables and always return the same output for the same input",
      "Not return anything",
      "Only be used with const declarations"
    ],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "In ES6, destructuring allows:",
    options: [
      "Breaking apart strings into character arrays automatically",
      "Deleting keys from an object during assignment",
      "Unpacking values from arrays or properties from objects into distinct variables",
      "Copying objects deeply by spreading properties"
    ],
    correctAnswer: 2
  }
]
