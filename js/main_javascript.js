// Array of all questions
const questionsJavascript = [
  // Question 1
  {
    questions: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "&lt;script>", correct: true },
      { text: "&lt;scripting>", correct: false },
      { text: "&lt;js>", correct: false },
      { text: "&lt;javascript>", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // Question 2
  {
    questions: "How do we change the content of a HTML element?",
    answers: [
      { text: '#demo.innerHTML = "Hello World!";', correct: false },
      {
        text: 'document.getElementByName("p").innerHTML = "Hello World!";',
        correct: false,
      },
      {
        text: 'document.getElement("p").innerHTML = "Hello World!";',
        correct: false,
      },
      {
        text: 'document.getElementById("demo").innerHTML = "Hello World!";',
        correct: true,
      },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // Question 3
  {
    questions: "Where is the correct place to insert a JavaScript script?",
    answers: [
      {
        text: "Both the &lt;head> section and the &lt;body> section are correct",
        correct: true,
      },
      { text: "The &lt;body> section", correct: false },
      { text: "The &lt;head> section", correct: false },
      { text: "The &lt;footer> section", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // Question 4
  {
    questions:
      "What is the correct syntax for referring to an external script?",
    answers: [
      { text: '&lt;script src="xxx.js">', correct: true },
      { text: '&lt;script name="xxx.js">', correct: false },
      { text: '&lt;script href="xxx.js">', correct: false },
      { text: '&lt;script src="xxx.js">', correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // Question 5
  {
    questions: "The external JavaScript file must contain the &lt;script> tag?",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 6
  {
    questions: 'How do you write "Hello World" in an alert box?',
    answers: [
      { text: 'alert("Hello World");', correct: true },
      { text: 'msgBox("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false },
      { text: 'msg("Hello World");', correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 7
  {
    questions: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFunction()", correct: true },
      { text: "function:myFunction()", correct: false },
      { text: "function = myFunction()", correct: false },
      { text: "function:()", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 8
  {
    questions: 'How do you call a function named "myFunction"?',
    answers: [
      { text: "myFunction()", correct: true },
      { text: "call myFunction()", correct: false },
      { text: "call function myFunction()", correct: false },
      { text: "function myFunction()", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 9
  {
    questions: "How to write an IF statement in JavaScript?",
    answers: [
      { text: "if i == 5 then", correct: false },
      { text: "if (i == 5)", correct: true },
      { text: "if i = 5", correct: false },
      { text: "if i = 5 then", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 10
  {
    questions: 'How do we write an IF statement if "i" is NOT equal to 5?',
    answers: [
      { text: "if i &lt;> 5", correct: false },
      { text: "if i =! 5 then", correct: false },
      { text: "if (i != 5)", correct: true },
      { text: "if (i &lt;> 5)", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 11
  {
    questions: "How does a WHILE loop start?",
    answers: [
      { text: "while (i &lt;= 10; i++)", correct: false },
      { text: "while (i &lt;= 10)", correct: true },
      { text: "while i = 1 to 10", correct: false },
      { text: "loop i = 1 to 10", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 12
  {
    questions: "How does a FOR loop start?",
    answers: [
      { text: "for (i = 0; i &lt;= 5; i++)", correct: true },
      { text: "for (i = 0; i &lt;= 5)", correct: false },
      { text: "for (i &lt;= 5; i++)", correct: false },
      { text: "for i = 1 to 5", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 13
  {
    questions: "How can you add a comment in a JavaScript?",
    answers: [
      { text: "//This is a comment", correct: true },
      { text: "&lt;!--This is a comment-->", correct: false },
      { text: "'This is a comment", correct: false },
      { text: "*This is a comment*", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 14
  {
    questions: "How to insert a comment that has more than one line?",
    answers: [
      { text: "//This comment has more than one line//", correct: false },
      { text: "&lt;!--This comment has more than one line-->", correct: false },
      { text: "/*This comment has more than one line*/", correct: true },
      { text: "*This comment has more than one line*", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 15
  {
    questions: "What is the correct way to write a JavaScript array?",
    answers: [
      { text: 'var colors = ["red", "green", "blue"]', correct: true },
      { text: 'var colors = "red", "green", "blue"', correct: false },
      {
        text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        correct: false,
      },
      { text: "*This comment has more than one line*", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 16
  {
    questions: "How do you round the number 7.25, to the nearest integer?",
    answers: [
      { text: "Math.round(7.25)", correct: true },
      { text: "round(7.25)", correct: false },
      { text: "Math.rnd(7.25)", correct: false },
      { text: "rnd(7.25)", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 17
  {
    questions: "How do you find the number with the highest value of x and y?",
    answers: [
      { text: "Math.ceil(x, y)", correct: false },
      { text: "Math.max(x, y)", correct: true },
      { text: "top(x, y)", correct: false },
      { text: "ceil(x, y)", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 18
  {
    questions: 'What is the syntax to open a new window called "company"?',
    answers: [
      {
        text: 'company = window.new("http://www.company.com");',
        correct: false,
      },
      {
        text: 'company = window.open("http://www.company.com");',
        correct: true,
      },
      { text: 'window.new("http://www.company.com");', correct: false },
      { text: 'company:new("http://www.company.com");', correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 19
  {
    questions: "JavaScript is the same as Java",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 20
  {
    questions: "How can you detect the client's browser name?",
    answers: [
      { text: "browser.name", correct: false },
      { text: "client.navName", correct: false },
      { text: "navigator.appName", correct: true },
      { text: "client.browser", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 21
  {
    questions: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onclick", correct: true },
      { text: "onmouseclick", correct: false },
      { text: "onchange", correct: false },
      { text: "onmouseover", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 22
  {
    questions: "How do you declare a JavaScript variable?",
    answers: [
      { text: "variable carName;", correct: false },
      { text: "v carName;", correct: false },
      { text: "var carName;", correct: true },
      { text: "store carName;", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 23
  {
    questions: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "=", correct: true },
      { text: "*", correct: false },
      { text: "-", correct: false },
      { text: "X", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 24
  // {
  //   questions: "What will the following code return: Boolean(10 > 9)?",
  //   answers: [
  //     { text: "true", correct: true },
  //     { text: "NaN", correct: false },
  //     { text: "false", correct: false },
  //     { text: "boolean", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 25
  // {
  //   questions: "JavaScript is case-sensitive?",
  //   answers: [
  //     { text: "True", correct: true },
  //     { text: "False", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 26
  // {
  //   questions: "JavaScript is a ___-side language",
  //   answers: [
  //     { text: "client", correct: false },
  //     { text: "server", correct: false },
  //     { text: "both", correct: true },
  //     { text: "neither", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 27
  // {
  //   questions: "How do you find the minimum of x and y using JavaScript?",
  //   answers: [
  //     { text: "min(x,y);", correct: false },
  //     { text: "Math.min(x,y)", correct: true },
  //     { text: "Math.min(xy)", correct: false },
  //     { text: "min(xy);", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 28
  // {
  //   questions:
  //     "Which label catches all the values, except for the ones specified?",
  //   answers: [
  //     { text: "catch", correct: false },
  //     { text: "label", correct: false },
  //     { text: "try", correct: false },
  //     { text: "default", correct: true },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 29
  // {
  //   questions:
  //     "Which is the correct syntax to execute code if “x” is equal to 2?",
  //   answers: [
  //     { text: "if(x 2)", correct: false },
  //     { text: "if(x = 2)", correct: false },
  //     { text: "if(x == 2)", correct: true },
  //     { text: "if(x != 2 )", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 30
  // {
  //   questions: "The five most primitive datatypes in JavaScript are?",
  //   answers: [
  //     {
  //       text: "strings, numbers, booleans, undefined, and null",
  //       correct: true,
  //     },
  //     {
  //       text: "strings, floats, booleans, undefined, and Nan",
  //       correct: false,
  //     },
  //     {
  //       text: "strings, numbers, Nan, undefined, and null",
  //       correct: false,
  //     },
  //     {
  //       text: "strings, arrays, booleans, undefined, and null",
  //       correct: false,
  //     },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 31
  // {
  //   questions: "What will the following code return?: Boolean(3&lt;7)",
  //   answers: [
  //     { text: "true", correct: true },
  //     { text: "false", correct: false },
  //     { text: "Nan", correct: false },
  //     { text: "SyntaxError", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 32
  // {
  //   questions: "What is the correct syntax to print “Company” in the console?",
  //   answers: [
  //     { text: "print(“Company”);", correct: false },
  //     { text: "console.print(“Company”);", correct: false },
  //     { text: "log.console(“Company”);", correct: false },
  //     { text: "console.log(“Company”);", correct: true },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 33
  // {
  //   questions: "Which of the following print content on the browser window?",
  //   answers: [
  //     { text: "document.write(“print content”);", correct: true },
  //     { text: "response.write(“print content”);", correct: false },
  //     { text: "document.write(print content);", correct: false },
  //     { text: "write(“print content”);", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 34
  // {
  //   questions: "Which method will round 24.76 to the nearest integer?",
  //   answers: [
  //     { text: "round(24.76);", correct: false },
  //     { text: "rnd(24.76);", correct: false },
  //     { text: "Math.round(24.76);", correct: true },
  //     { text: "Math.rnd(24.76);", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 35
  // {
  //   questions: "Which of the following show a message and ask for input?",
  //   answers: [
  //     { text: "alert()", correct: false },
  //     { text: "prompt()", correct: true },
  //     { text: "confirm()", correct: false },
  //     { text: "message()", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 36
  // {
  //   questions: "Which of the following is an event listener in JavaScript?",
  //   answers: [
  //     { text: "onclick", correct: false },
  //     { text: "blur", correct: false },
  //     { text: "click", correct: true },
  //     { text: "click()", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 37
  // {
  //   questions: "Which of the given options is an incorrect variable name?",
  //   answers: [
  //     { text: "javascript", correct: false },
  //     { text: "_javascript", correct: false },
  //     { text: "$javascript", correct: false },
  //     { text: "-javascript", correct: true },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 38
  // {
  //   questions:
  //     "Which method returns the characters in a string starting at the specified location?",
  //   answers: [
  //     { text: "substr()", correct: true },
  //     { text: "getSubstring()", correct: false },
  //     { text: "slice()", correct: false },
  //     { text: "None of the above", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 39
  // {
  //   questions: "What defines how many digits to display of a number?",
  //   answers: [
  //     { text: "toExponential()", correct: false },
  //     { text: "toFixed()", correct: false },
  //     { text: "toLocaleString()", correct: false },
  //     { text: "toPrecision()", correct: true },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 40
  // {
  //   questions: "What returns the characters in a string between two indexes?",
  //   answers: [
  //     { text: "slice()", correct: false },
  //     { text: "split()", correct: false },
  //     { text: "substring()", correct: true },
  //     { text: "substr()", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 41
  // {
  //   questions:
  //     "Which of the following removes the first element from an array?",
  //   answers: [
  //     { text: "reverse()", correct: false },
  //     { text: "shift()", correct: true },
  //     { text: "slice()", correct: false },
  //     { text: "some()", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 42
  // {
  //   questions: "Which of the following is not a reserved word in JavaScript?",
  //   answers: [
  //     { text: "Interface", correct: false },
  //     { text: "Throws", correct: false },
  //     { text: "Program", correct: true },
  //     { text: "Short", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 43
  // {
  //   questions:
  //     "It's valid to pass a function as an argument to another function?",
  //   answers: [
  //     { text: "True", correct: true },
  //     { text: "False", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 44
  // {
  //   questions: "Which of the following compares an expression with a string?",
  //   answers: [
  //     { text: "match()", correct: true },
  //     { text: "concat()", correct: false },
  //     { text: "replace()", correct: false },
  //     { text: "search()", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 45
  // {
  //   questions: "What function runs through each element of the array?",
  //   answers: [
  //     { text: "match()", correct: false },
  //     { text: "forEach()", correct: true },
  //     { text: "concat()", correct: false },
  //     { text: "replace()", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 46
  // {
  //   questions:
  //     "What returns an array comprised of the current array or its value?",
  //   answers: [
  //     { text: "push()", correct: false },
  //     { text: "some()", correct: true },
  //     { text: "concat()", correct: false },
  //     { text: "pop()", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 47
  // {
  //   questions:
  //     "Which of the following returns the type of the arguments passed?",
  //   answers: [
  //     { text: "Using the typeof operator", correct: true },
  //     { text: "Using the getType function", correct: false },
  //     { text: "None", correct: false },
  //     { text: "The first two options above", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 48
  // {
  //   questions: "The % (Modulus) operator gives us the division remainder?",
  //   answers: [
  //     { text: "True", correct: true },
  //     { text: "False", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 49
  // {
  //   questions: "The === is known as a strict equality comparison operator?",
  //   answers: [
  //     { text: "True", correct: true },
  //     { text: "False", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 50
  // {
  //   questions: "The attr.name method will return the value of the attribute?",
  //   answers: [
  //     { text: "True", correct: false },
  //     { text: "False", correct: true },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
];
// **--------------------------------------------** //
let answerValue;
let questionIndex;

function buildQuizJavascript() {
  // Pick a random question
  if (sessionStorage.getItem("isComplete") == "true") {
    sessionStorage.setItem("index", 0);
    sessionStorage.setItem("score_points", 0);
    sessionStorage.setItem("isComplete", "false");
  }

  let currentQuestionIndex = parseInt(sessionStorage.getItem("index")) || 0;
  questionIndex = currentQuestionIndex;

  if (currentQuestionIndex >= questionsJavascript.length) {
    sessionStorage.setItem("isComplete", "true");
    window.location.assign("./complete.html");
  }

  const question = questionsJavascript[currentQuestionIndex];

  renderQuestion(question);
  updateScore();
}

buildQuizJavascript();

function renderQuestion(question) {
  console.log(question);

  // grab container
  const questionContainer = document.getElementById("javascript_quiz");

  // create p tag for question text
  const questionText = document.createElement("p");

  // add text to p tag
  questionText.innerHTML = question.questions;
  questionText.setAttribute("class", "text-bold");

  // loop through answers and create a button for each of them
  question.answers.forEach((answer) => {
    const answerButton = document.createElement("button");
    answerButton.innerHTML = answer.text;
    answerButton.setAttribute("class", "btn btn-question");
    answerButton.onclick = function () {
      answerValue = answer.correct;

      // this removes selected tags from any previous selections and adds the tag to the one selected after
      const answerButtons = document.querySelectorAll(".btn-question");
      Array.from(answerButtons).forEach((button) => {
        button.removeAttribute("id");
      });

      // adds selected id
      answerButton.setAttribute("id", "selected");
    };

    questionContainer.prepend(answerButton);
  });
  questionContainer.prepend(questionText);

  // Submit button logic
  const button = document.getElementById("submit");

  button.onclick = function () {
    // inside this function, set the icon
    const answer = document.getElementById("selected");
    const contentRight = document.getElementById("contentRight");
    const span = document.createElement("span");
    const icon = document.createElement("i");
    span.appendChild(icon);
    if (answerValue === true) {
      // answer is correct
      answer.setAttribute("class", "btn btn-question btn-question-correct");
      // create icon and set into answer button html and add icon class
      icon.setAttribute("class", "fa fa-check-circle");
    } else {
      answer.setAttribute("class", "btn btn-question btn-question-incorrect");
      // create icon and set into answer button html and add icon class
      icon.setAttribute("class", "fa fa-times-circle");
      // Removes the hide class if user gets the answer incorrect
      document.getElementById("incorrect_explanation").innerHTML =
        question.incorrect_explanation;
      let listOfResources = document.createElement("ul");
      listOfResources.style.padding = "0px";
      for (let i = 0; i < question.resources.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = question.resources[i].text;
        listOfResources.appendChild(li);
      }
      document.getElementById("resources").innerHTML = "";
      document.getElementById("resources").appendChild(listOfResources);
      contentRight.classList.remove("hide");
    }
    answer.appendChild(span);

    button.disabled = true;

    // Score Tally **--------------------------------------------** //
    function tallyScore() {
      let score_points = sessionStorage.getItem("score_points");
      if (answerValue === true) {
        score_points++;
        console.log("Right answer");
      } else {
        console.log("Wrong answer");
      }
      // Save data to sessionStorage
      sessionStorage.setItem("score_points", score_points);
    }

    tallyScore();
    // **--------------------------------------------** //
  };
}

// Update the score
function updateScore() {
  let score = sessionStorage.getItem("score_points");
  if (score == null) {
    score = 0;
  }
  document.getElementById("results").innerHTML = score;
  sessionStorage.setItem("score_points", score);

  let numberOfQuestions = questionsJavascript.length;
  document.getElementById("numberOfQuestions").innerHTML = numberOfQuestions;
}

// Reload page - go to next question
function refreshPage() {
  sessionStorage.setItem("index", questionIndex + 1);
  window.location.reload();
}

const nextBtn = document.getElementById("nextBtn");
nextBtn.onclick = refreshPage;

// Generate Quote
const api = "https://type.fit/api/quotes";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
window.addEventListener("load", getQuote, true);
function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      let quoteIndex = Math.floor(Math.random() * (data.length - 1));
      quote.innerHTML = `" ${data[quoteIndex].text} "`;
      author.innerHTML = `&#8212; ${data[quoteIndex].author}`;
    });
}
// **--------------------------------------------** //
