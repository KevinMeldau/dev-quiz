// Array of all questions
const questionsCss = [
  // Question 1
  {
    questions: "What does CSS stand for?",
    answers: [
      { text: "Creative Style Sheets", correct: false },
      { text: "Computer Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Colorful Style Sheets", correct: false },
    ],
    incorrect_explanation:
      "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages.",
    resources: [
      {
        text: '<a href="https://www.w3.org/standards/webdesign/htmlcss.html" target="_blank">W3 Schools</a>',
      },
    ],
  },
  // Question 2
  {
    questions:
      "What is the correct HTML tag to link to an external style sheet?",
    answers: [
      { text: "&lt;stylesheet>mystyle.css&lt;/stylesheet>", correct: false },
      { text: '&lt;style src="mystyle.css">', correct: false },
      {
        text: '&lt;link rel="stylesheet" type="text/css" href="mystyle.css">',
        correct: true,
      },
      { text: '&lt;link src="mystyle.css">', correct: false },
    ],
    incorrect_explanation:
      "The &lt;link> tag defines the relationship between the current document and an external resource. The &lt;link> tag is most often used to link to external style sheets.",
    resources: [
      {
        text: '<a href="https://www.w3schools.com/tags/tag_link.asp" target="_blank">W3 Schools</a>',
      },
    ],
  },
  // Question 3
  {
    questions:
      "Where is the correct place to refer to an external style sheet?",
    answers: [
      { text: "At the end of the document", correct: false },
      { text: "In the &lt;body> section", correct: false },
      { text: "In the &lt;head> section  ", correct: true },
      { text: '&lt;link src="mystyle.css">', correct: false },
    ],
    incorrect_explanation:
      "Each HTML page must include a reference to the external style sheet file inside the &lt;link> element, inside the head section.",
    resources: [
      {
        text: '<a href="https://www.w3schools.com/css/css_howto.asp" target="_blank">W3 Schools</a>',
      },
    ],
  },
  // Question 4
  {
    questions: "Which HTML tag is used to define an internal style sheet?",
    answers: [
      { text: "&lt;style>", correct: true },
      { text: "&lt;script>", correct: false },
      { text: "&lt;css>", correct: false },
      { text: '&lt;src="mystyle.css">', correct: false },
    ],
    incorrect_explanation:
      "An internal CSS is used to define a style for a single HTML page. An internal CSS is defined in the &lt;head> section of an HTML page, within a &lt;style> element.",
    resources: [
      {
        text: '<a href="https://www.w3schools.com/html/html_css.asp" target="_blank">W3 Schools</a>',
      },
    ],
  },
  // Question 5
  {
    questions: "Which HTML attribute is used to define inline styles?",
    answers: [
      { text: "style", correct: true },
      { text: "class", correct: false },
      { text: "styles", correct: false },
      { text: "font", correct: false },
    ],
    incorrect_explanation:
      "The style attribute specifies an inline style for an element. The style attribute will override any style set globally, e.g. styles specified in the &lt;style> tag or in an external style sheet.",
    resources: [
      {
        text: '<a href="https://www.w3schools.com/tags/ref_standardattributes.asp" target="_blank">W3 Schools</a>',
      },
    ],
  },
  // Question 6
  {
    questions: "Which is the correct CSS syntax?",
    answers: [
      { text: "body {color: black;}", correct: true },
      { text: "body:color=black;", correct: false },
      { text: "{body;color:black;}", correct: false },
      { text: "{body:color=black;}", correct: false },
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
    questions: "How do you insert a comment in a CSS file?",
    answers: [
      { text: "// this is a comment", correct: false },
      { text: "' this is a comment", correct: false },
      { text: "/* this is a comment */", correct: true },
      { text: "// this is a comment //", correct: false },
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
    questions: "Which property is used to change the background color?",
    answers: [
      { text: "color", correct: false },
      { text: "bgcolor", correct: false },
      { text: "background-color", correct: true },
      { text: "background", correct: false },
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
    questions: "The only way to define a color is by Hexadecimal code?",
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
  // // Question 10
  {
    questions: "There are two units of measurements – em and rem?",
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
  // // Question 11
  {
    questions: "What property do you use to create spacing between elements?",
    answers: [
      { text: "Margin", correct: true },
      { text: "Spacing", correct: false },
      { text: "Padding", correct: false },
      { text: "Border", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 12
  // {
  //   questions: "What property creates space between the border and content?",
  //   answers: [
  //     { text: "Margin", correct: false },
  //     { text: "Spacing", correct: false },
  //     { text: "Padding", correct: true },
  //     { text: "Border", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 13
  // {
  //   questions: "In what way can you NOT reference CSS?",
  //   answers: [
  //     { text: "Inline Styling", correct: false },
  //     { text: "Internal Style Sheet", correct: false },
  //     { text: "External Style Sheet", correct: false },
  //     { text: "All three are correct", correct: true },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 9
  // {
  //   questions: "Which property is used to change the text color of an element?",
  //   answers: [
  //     { text: "Color", correct: true },
  //     { text: "fgcolor", correct: false },
  //     { text: "text-color", correct: false },
  //     { text: "all-text", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 10
  // {
  //   questions: "Which CSS property controls the text size?",
  //   answers: [
  //     { text: "Text-size", correct: false },
  //     { text: "Font-size", correct: true },
  //     { text: "Text-style", correct: false },
  //     { text: "Font-style", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 11
  // {
  //   questions:
  //     "What is the correct CSS syntax for making all &lt;p> tags bold?",
  //   answers: [
  //     { text: '&lt;p style="text-size:bold;">', correct: false },
  //     { text: "p {font-weight:bold;}", correct: true },
  //     { text: '&lt;p style="font-size:bold;">', correct: false },
  //     { text: "p {text-size:bold;}", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 12
  // {
  //   questions: "How do you display hyperlinks without an underline?",
  //   answers: [
  //     { text: "a {decoration:no-underline;}", correct: false },
  //     { text: "a {text-decoration:none;}", correct: true },
  //     { text: "a {text-decoration:no-underline;}", correct: false },
  //     { text: "a {underline:none;}", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 13
  // {
  //   questions:
  //     "How do you make each word in a text start with a capital letter?",
  //   answers: [
  //     { text: "text-transform:capitalize", correct: true },
  //     { text: "text-style:capitalize", correct: false },
  //     { text: "You can't do that with only CSS", correct: false },
  //     { text: "transform:capitalize", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 14
  // {
  //   questions: "Which property is used to change the font of an element?",
  //   answers: [
  //     { text: "font-weight", correct: false },
  //     { text: "font-family", correct: true },
  //     { text: "font-style", correct: false },
  //     { text: "font-style-family", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 15
  // {
  //   questions: "How do you make the text bold?",
  //   answers: [
  //     { text: "style:bold;", correct: false },
  //     { text: "font-weight:bold;", correct: true },
  //     { text: "font:bold;", correct: false },
  //     { text: "font-style:bold;", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 16
  // {
  //   questions:
  //     "Which property is used to change the left margin of an element?",
  //   answers: [
  //     { text: "padding-left", correct: false },
  //     { text: "indent", correct: false },
  //     { text: "margin-left", correct: true },
  //     { text: "margin-indent-left", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 17
  // {
  //   questions: "The padding property allows negative values",
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
  // // Question 18
  // {
  //   questions: "How do you make a list that lists its items with squares?",
  //   answers: [
  //     { text: "list: square;", correct: false },
  //     { text: "list-type: square;", correct: false },
  //     { text: "list-style-type: square;", correct: true },
  //     { text: "list-method: square;", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 19
  // {
  //   questions: "How do you select an element with id 'demo'?",
  //   answers: [
  //     { text: "*demo", correct: false },
  //     { text: "#demo", correct: true },
  //     { text: "demo", correct: false },
  //     { text: ".demo", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 20
  // {
  //   questions: "How do you select elements with class name 'test'?",
  //   answers: [
  //     { text: "test", correct: false },
  //     { text: "*test", correct: false },
  //     { text: ".test", correct: true },
  //     { text: "#test", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 21
  // {
  //   questions: "How do you select all p elements inside a div element?",
  //   answers: [
  //     { text: "div + p", correct: false },
  //     { text: "div.p", correct: false },
  //     { text: "div p", correct: true },
  //     { text: "p + div", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 22
  // {
  //   questions: "How do you group selectors?",
  //   answers: [
  //     { text: "Separate each selector with a comma", correct: true },
  //     { text: "Separate each selector with a space", correct: false },
  //     { text: "Separate each selector with a plus sign", correct: false },
  //     { text: "There is no need to group selectors", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 23
  // {
  //   questions: "What is the default value of the position property?",
  //   answers: [
  //     { text: "absolute", correct: false },
  //     { text: "static", correct: true },
  //     { text: "fixed", correct: false },
  //     { text: "relative", correct: false },
  //   ],
  //   incorrect_explanation: "This is why it was wrong",
  //   resources: [
  //     { text: "W3 Schools - w3schools.com" },
  //     { text: "Mozilla - developer.mozilla.org" },
  //     { text: "CSS Tricks - css-tricks.com" },
  //   ],
  // },
  // // Question 24
  // {
  //   questions: "Which of the following defines a measurement in screen pixels?",
  //   answers: [
  //     { text: "px", correct: true },
  //     { text: "vh", correct: false },
  //     { text: "em", correct: false },
  //     { text: "rem", correct: false },
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
  //   questions:
  //     "Which of the following properties specifies the width of a border?",
  //   answers: [
  //     { text: ":border-color", correct: false },
  //     { text: ":border-style", correct: false },
  //     { text: ":border-width", correct: true },
  //     { text: ":border-bottom-color", correct: false },
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
  //   questions:
  //     "Which of the following property changes the color of top border?",
  //   answers: [
  //     { text: ":border-top-color", correct: true },
  //     { text: ":border", correct: false },
  //     { text: ":border-above", correct: false },
  //     { text: ":border-above-color", correct: false },
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
  //   questions: "How do we control the appearance of the marker of a list?",
  //   answers: [
  //     { text: "list-style-type", correct: true },
  //     { text: "list-style-position", correct: false },
  //     { text: "list-style-image", correct: false },
  //     { text: "list-style", correct: false },
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
  //   questions: "Which property gives you control the marker of a list?",
  //   answers: [
  //     { text: "list-style-type", correct: true },
  //     { text: "list-style-position", correct: false },
  //     { text: "list-style-image", correct: false },
  //     { text: "list-style", correct: false },
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
  //   questions: "How many times can the same ID be used on a page?",
  //   answers: [
  //     { text: "A maximum of 5", correct: false },
  //     { text: "As many times as you like", correct: false },
  //     { text: "A maximum of 3", correct: false },
  //     { text: "A maximum of 1", correct: true },
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
  //   questions: "How many times can the same class be used on a page?",
  //   answers: [
  //     { text: "A maximum of 5", correct: false },
  //     { text: "As many times as you like", correct: true },
  //     { text: "A maximum of 3", correct: false },
  //     { text: "A maximum of 1", correct: false },
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
  //   questions: "A class has a high specificity than an ID?",
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
  // // Question 32
  // {
  //   questions: "Inline styles have a high specificity than an ID?",
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
  // // Question 33
  // {
  //   questions: "Pseudo-classes have a high specificity than an ID?",
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
  // // Question 34
  // {
  //   questions:
  //     "Classes, attributes, and pseudo-classes have the same specificity?",
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
  // // Question 35
  // {
  //   questions: "What property will give an element rounded corners?",
  //   answers: [
  //     { text: "border-round", correct: false },
  //     { text: "corner-round", correct: false },
  //     { text: "border-radius", correct: true },
  //     { text: "radius-corner", correct: false },
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
  //   questions: "An element can have more than one background image",
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
  // // Question 37
  // {
  //   questions: 'The keyword "cover" is used to scale background images?',
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
  // // Question 38
  // {
  //   questions:
  //     "linear-gradient(red, yellow); gives you a gradient of 45%, from red to yellow?",
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
  // // Question 39
  // {
  //   questions: "How do we give an element a box shadow of 10px?",
  //   answers: [
  //     { text: "box-shadow: 10px 10px;", correct: true },
  //     { text: "shadow: 10px;", correct: false },
  //     { text: "shadow-box: 10px;", correct: false },
  //     { text: "shadow-box: 10px 10px 10px 10px;", correct: false },
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
  //   questions: "How do we give an element a box shadow of 10px?",
  //   answers: [
  //     { text: "box-shadow: 10px 10px;", correct: true },
  //     { text: "shadow: 10px;", correct: false },
  //     { text: "shadow-box: 10px;", correct: false },
  //     { text: "shadow-box: 10px 10px 10px 10px;", correct: false },
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
  //   questions: "CSS does allow multi-column layouts?",
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
  // // Question 42
  // {
  //   questions: 'Making a page "responsive" cannot be done in CSS?',
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
  // // Question 43
  // {
  //   questions: "input[type=text] will only select text fields?",
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
  //   questions: "How do we setup a media query for a screen that is 600px?",
  //   answers: [
  //     { text: "@media screen and (max-width: 600px)", correct: true },
  //     { text: "@screen media and (max-width: 600px)", correct: false },
  //     { text: "@(max-width: 600px)", correct: false },
  //     { text: "screen: max-width: 600px", correct: false },
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
  //   questions: "Flexbox is a way to work with layouts and positioning",
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
  // // Question 46
  // {
  //   questions:
  //     'To start using flexbox all you need to do is add "display: flex" to the container element?',
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
  // // Question 47
  // {
  //   questions:
  //     "Using css grid is a way to work with grid-based layouts, making positioning easier?",
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
  // // Question 48
  // {
  //   questions:
  //     'To start using css grid all you need to do is add "display: grid" to the container element?',
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
  //   questions: "How do we select all elements with a target attribute?",
  //   answers: [
  //     { text: "[target]", correct: true },
  //     { text: "target:", correct: false },
  //     { text: "target-only:", correct: false },
  //     { text: "{target:}", correct: false },
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
  //   questions: "How do we select all select links on mouse over?",
  //   answers: [
  //     { text: "hover", correct: true },
  //     { text: "a:hover", correct: true },
  //     { text: "link:hover", correct: false },
  //     { text: "hover:link", correct: false },
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

function buildQuizCss() {
  // Pick a random question
  if (sessionStorage.getItem("isComplete") == "true") {
    sessionStorage.setItem("index", 0);
    sessionStorage.setItem("score_points", 0);
    sessionStorage.setItem("isComplete", "false");
  }

  let currentQuestionIndex = parseInt(sessionStorage.getItem("index")) || 0;
  questionIndex = currentQuestionIndex;

  if (currentQuestionIndex >= questionsCss.length) {
    sessionStorage.setItem("isComplete", "true");
    window.location.assign("./complete.html");
  }

  const question = questionsCss[currentQuestionIndex];

  renderQuestion(question);
  updateScore();
}

buildQuizCss();

function renderQuestion(question) {
  console.log(question);

  // grab container
  const questionContainer = document.getElementById("css_quiz");

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

  let numberOfQuestions = questionsCss.length;
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
