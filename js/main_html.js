// Array of all questions
const questionsHtml = [
  // Question 1
  {
    questions: "What does HTML stand for?",
    answers: [
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyperlink and Text Markup Language", correct: false },
      { text: "Hyper Transfer Meta Language", correct: false },
    ],
    incorrect_explanation:
      "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page.",
    resources: [
      {
        text: '<a href="https://bit.ly/2YkIBqu" target="_blank">W3 Schools</a>',
      },
      { text: '<a href="https://mzl.la/3pu6c3N" target="_blank">Mozilla</a>' },
    ],
  },
  // Question 2
  {
    questions: "Who makes the web standards?",
    answers: [
      { text: "Google", correct: false },
      { text: "Mozilla", correct: false },
      { text: "The World Wide Web Consortium", correct: true },
      { text: "There are no web standards", correct: false },
    ],
    incorrect_explanation:
      "The World Wide Web Consortium (W3C) is an international community where Member organizations, a full-time staff, and the public work together to develop Web standards.",
    resources: [
      { text: '<a href="https://www.w3.org/" target="_blank">W3 Schools</a>' },
      { text: '<a href="https://mzl.la/3iXCnpK" target="_blank">Mozilla</a>' },
    ],
  },
  // Question 3
  {
    questions: "What is the correct element to specify a heading on a page?",
    answers: [
      { text: "&lt;heading&gt;", correct: false },
      { text: "&lt;h1&gt;", correct: true },
      { text: "&lt;h6&gt;", correct: false },
      { text: "&lt;head&gt;", correct: false },
    ],
    incorrect_explanation:
      "The header element represents a container for introductory content or a set of navigational links. A header element typically contains: one or more heading elements – &lt;h1>, &lt;h6>, a logo or icon.",
    resources: [
      {
        text: '<a href="https://bit.ly/39nyR54" target="_blank">W3 Schools</a>',
      },
      { text: '<a href="https://developer.mozilla.org/en-us/docs/Web/HTML/Element/Heading_Elements" target="_blank">Mozilla</a>' },
    ],
  },
  // Question 4
  {
    questions: "What is the correct HTML element for inserting a line break?",
    answers: [
      { text: "&lt;br>", correct: true },
      { text: "&lt;break>", correct: false },
      { text: "&lt;lb>", correct: false },
      { text: "&lt;break-here>", correct: false },
    ],
    incorrect_explanation: "In HTML, the &lt;br> tag is used for line break.",
    resources: [
      {
        text: '<a href="https://bit.ly/3pr0r6Y" target="_blank">W3 Schools</a>',
      },
      { text: '<a href="https://mzl.la/2NLcyxS" target="_blank">Mozilla</a>' },
    ],
  },
  // Question 5
  {
    questions: "What is the correct HTML tag for adding a background color?",
    answers: [
      { text: '&lt;body style="background-color:yellow;">', correct: true },
      { text: '&lt;body bg="yellow">', correct: false },
      { text: "&lt;background>yellow&lt;/background>", correct: false },
      { text: "&lt;body style=&lt;yellow>", correct: false },
    ],
    incorrect_explanation:
      'The correct format to style something inline is &lt;h1 style="color:blue;"&gt;A Blue Heading&lt;/h1&gt;.',
    resources: [
      {
        text:
          '<a href="https://www.w3schools.com/html/html_css.asp" target="_blank">W3 Schools</a>',
      },
    ],
  }
  // // Question 6
  {
    questions: "Choose the correct HTML element to define important text",
    answers: [
      { text: "&lt;i>", correct: false },
      { text: "&lt;strong>", correct: true },
      { text: "&lt;important>", correct: false },
      { text: "&lt;b>", correct: false },
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
    questions: "Choose the correct HTML element to define emphasized text",
    answers: [
      { text: "&lt;i>", correct: false },
      { text: "&lt;italic>", correct: false },
      { text: "&lt;em>", correct: true },
      { text: "&lt;b>", correct: false },
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
    questions: "What is the correct format for creating a hyperlink?",
    answers: [
      { text: "&lt;a>http://www.company.com&lt;/a>", correct: false },
      {
        text: '&lt;a href="http://www.company.com">Company Name&lt;/a>',
        correct: true,
      },
      {
        text: '&lt;a url="http://www.company.com">Company Name&lt;/a>',
        correct: false,
      },
      {
        text: '&lt;a link="http://www.company.com">Company Name&lt;/a>',
        correct: false,
      },
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
    questions: "Which character is used to indicate an end tag?",
    answers: [
      { text: "&lt;", correct: false },
      { text: "&lt;end>", correct: false },
      { text: "/", correct: true },
      { text: "*", correct: false },
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
    questions: "How can you open a link in a new tab / browser window?",
    answers: [
      { text: '&lt;a href="http://www.company.com" new>', correct: false },
      {
        text: '&lt;a href="http://www.company.com" target="_blank">',
        correct: true,
      },
      {
        text: '&lt;a href="http://www.company.com" target="new">',
        correct: false,
      },
      {
        text: '&lt;a href="http://www.company.com" new="_blank">',
        correct: false,
      },
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
    questions: "Which of these elements are all &lt;table> elements?",
    answers: [
      { text: "&lt;table>&lt;tr>&lt;td>", correct: true },
      { text: "&lt;thead>&lt;body>&lt;tr>", correct: false },
      { text: "&lt;table>&lt;tr>&lt;tt>", correct: false },
      { text: "&lt;table>&lt;head>&lt;tfoot>", correct: false },
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
    questions: "Inline elements are displayed without starting a new line",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
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
    questions: "What tag is used to make a numbered list?",
    answers: [
      { text: "&lt;ol>", correct: true },
      { text: "&lt;list>", correct: false },
      { text: "&lt;ul>", correct: false },
      { text: "&lt;dl>", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // Question 14
  {
    questions: "What tag is used to create a bulleted list?",
    answers: [
      { text: "&lt;ul>", correct: true },
      { text: "&lt;ol>", correct: false },
      { text: "&lt;list>", correct: false },
      { text: "&lt;dl>", correct: false },
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
    questions: "What is the correct tag for making a checkbox?",
    answers: [
      { text: "&lt;check>", correct: false },
      { text: '&lt;input type="checkbox">', correct: true },
      { text: "&lt;checkbox>", correct: false },
      { text: '&lt;input type="check">', correct: false },
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
    questions: "What is the correct tag for creating a text input field?",
    answers: [
      { text: "&lt;check>", correct: false },
      { text: '&lt;textinput type="text">', correct: false },
      { text: '&lt;text type="textfield">', correct: false },
      { text: '&lt;input type="text">', correct: true },
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
    questions: "What is the correct tag for making a drop-down list?",
    answers: [
      { text: '&lt;input type="list">', correct: false },
      { text: "&lt;select>", correct: true },
      { text: '&lt;input type="dropdown">', correct: false },
      { text: "&lt;list>", correct: false },
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
    questions: "What is the correct tag for creating a text area?",
    answers: [
      { text: "&lt;textarea>", correct: true },
      { text: "&lt;select>", correct: false },
      { text: '&lt;input type="textbox">', correct: false },
      { text: '&lt;input type="textarea">', correct: false },
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
    questions: "What is the correct tag for inserting an image?",
    answers: [
      { text: '&lt;image src="image.gif" alt="MyImage">', correct: false },
      { text: '&lt;img alt="MyImage">image.gif&lt;/img>', correct: false },
      { text: '&lt;img href="image.gif" alt="MyImage">', correct: false },
      { text: '&lt;img src="image.gif" alt="MyImage">', correct: true },
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
    questions: "What is the correct tag for inserting a background image?",
    answers: [
      { text: '&lt;background img="background.gif">', correct: false },
      {
        text: '&lt;body style="background-image: url("background.gif")">',
        correct: true,
      },
      { text: '&lt;body bg="background.gif">', correct: false },
      { text: '&lt;body img="background.gif">', correct: false },
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
    questions: "An &lt;iframe> is used to display a web page within a web page",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
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
    questions: "HTML comments start with &lt;!-- and end with -->",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
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
    questions: "Block elements are displayed without starting a new line",
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
  // // Question 24
  {
    questions: "Which element defines the title of a document?",
    answers: [
      { text: "&lt;head>", correct: false },
      { text: "&lt;title>", correct: true },
      { text: "&lt;meta>", correct: false },
      { text: "&lt;style>", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 25
  {
    questions: "Which attribute specifies an alternate text for an image?",
    answers: [
      { text: "long-desc", correct: false },
      { text: "alt", correct: true },
      { text: "src", correct: false },
      { text: "title", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 26
  {
    questions: "Which doctype is correct for HTML5?",
    answers: [
      { text: "&lt;!DOCTYPE HTML5>", correct: false },
      { text: "&lt;!DOCTYPE http://www.company.com>", correct: false },
      { text: "&lt;!DOCTYPE html>", correct: true },
      { text: "&lt;!DOCTYPE html:true>", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 27
  {
    questions: "Which element is used to specify a footer for a document?",
    answers: [
      { text: "&lt;footer>", correct: true },
      { text: "&lt;section>", correct: false },
      { text: "&lt;bottom>", correct: false },
      { text: "&lt;bottom_head>", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 28
  {
    questions: "You can embed SVG elements directly into an HTML page",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 29
  {
    questions: "What is the correct HTML element for embedding video files?",
    answers: [
      { text: "&lt;media>", correct: false },
      { text: "&lt;video>", correct: true },
      { text: "&lt;movie>", correct: false },
      { text: "&lt;play>", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 30
  {
    questions: "What is the correct HTML element for embedding audio files?",
    answers: [
      { text: "&lt;video>", correct: true },
      { text: "&lt;sound>", correct: false },
      { text: "&lt;mp3>", correct: false },
      { text: "&lt;music>", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 31
  {
    questions: 'The HTML global attribute, "contenteditable" is used to:',
    answers: [
      { text: "Specifies a context menu for an element", correct: false },
      {
        text: "Returns the first found occurrence of content inside a string",
        correct: false,
      },
      {
        text:
          "Specify whether the content of an element should be editable or not",
        correct: true,
      },
      { text: "Update content from the server", correct: false },
    ],
    incorrect_explanation: "This is why it was wrong",
    resources: [
      { text: "W3 Schools - w3schools.com" },
      { text: "Mozilla - developer.mozilla.org" },
      { text: "CSS Tricks - css-tricks.com" },
    ],
  },
  // // Question 32
  // {
  //   questions: "In HTML, onblur and onfocus are:",
  //   answers: [
  //     { text: "Event attributes", correct: true },
  //     { text: "Style attributes", correct: false },
  //     { text: "Link attributes", correct: false },
  //     { text: "HTML elements", correct: false },
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
  //   questions: "Graphics defined by SVG are in which format?",
  //   answers: [
  //     { text: "HTML", correct: false },
  //     { text: "CSS", correct: false },
  //     { text: "XML", correct: true },
  //     { text: "SVG", correct: false },
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
  //   questions: "The HTML &lt;canvas> element is used to:",
  //   answers: [
  //     { text: "Manipulate data in MySQL", correct: false },
  //     { text: "Create draggable elements", correct: false },
  //     { text: "Display database elements", correct: false },
  //     { text: "Draw graphics", correct: true },
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
  //   questions:
  //     "Which attribute is used when an input field MUST be filled out?",
  //   answers: [
  //     { text: "Validate", correct: false },
  //     { text: "Required", correct: true },
  //     { text: "Form_validate", correct: false },
  //     { text: "Placeholder", correct: false },
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
  //   questions: "Which input type defines a slider control?",
  //   answers: [
  //     { text: "controls", correct: false },
  //     { text: "slider", correct: false },
  //     { text: "range", correct: true },
  //     { text: "search", correct: false },
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
  //   questions: "How do we display a scalar measurement within a range?",
  //   answers: [
  //     { text: "&lt;meter>", correct: true },
  //     { text: "&lt;measure>", correct: false },
  //     { text: "&lt;gauge>", correct: false },
  //     { text: "&lt;range>", correct: false },
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
  //   questions: "Which element defines navigation links?",
  //   answers: [
  //     { text: "&lt;nav>", correct: true },
  //     { text: "&lt;navigate>", correct: false },
  //     { text: "&lt;navigation>", correct: false },
  //     { text: "&lt;directions>", correct: false },
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
  //   questions: "In HTML, what does the &lt;aside> element define?",
  //   answers: [
  //     {
  //       text: "Information sent between computers on the internet",
  //       correct: false,
  //     },
  //     { text: "Content aside from the page content", correct: true },
  //     {
  //       text: "A navigation list to be shown at the left side of the page",
  //       correct: false,
  //     },
  //     { text: "Content that is not important", correct: false },
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
  //   questions: "Which element is used to specify a header for a document?",
  //   answers: [
  //     { text: "&lt;head>", correct: false },
  //     { text: "&lt;header>", correct: true },
  //     { text: "&lt;section>", correct: false },
  //     { text: "&lt;top>", correct: false },
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
  //   questions: "What type of tag is this: &lt;body>",
  //   answers: [
  //     { text: "A opening tag", correct: true },
  //     { text: "A closing tag", correct: false },
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
  //   questions: "What should values always be enclosed in?",
  //   answers: [
  //     { text: "Quotation marks", correct: true },
  //     { text: "Commas", correct: false },
  //     { text: "Parenthesis", correct: false },
  //     { text: "Forward slash and back slash", correct: false },
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
  //   questions: "Where do all items for the same web site need to be saved?",
  //   answers: [
  //     { text: "In the same folder", correct: true },
  //     { text: "Anywhere, as long as they are linked", correct: false },
  //     { text: "In different folders", correct: false },
  //     { text: "All in one file", correct: false },
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
  //   questions: "What is the correct tag to make text italic",
  //   answers: [
  //     { text: "&lt;strong>", correct: false },
  //     { text: "&lt;br>", correct: false },
  //     { text: "&lt;em>", correct: false },
  //     { text: "&lt;i>", correct: true },
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
  //   questions: "The box model consists of:",
  //   answers: [
  //     { text: "The content, padding, border, and margin", correct: true },
  //     { text: "The content and border", correct: false },
  //     { text: "All the styles", correct: false },
  //     { text: "Anything we add to it", correct: false },
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
  //   questions: "What are Semantic Elements?",
  //   answers: [
  //     {
  //       text: "An element that describes its meaning to browser and developer",
  //       correct: true,
  //     },
  //     { text: "An element with a lot of pixels", correct: false },
  //     { text: "An element tha we only use in HTML3 and above", correct: false },
  //     { text: "Any element that we select to make semantic", correct: false },
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
  //   questions: "The best tag to use for a large block of text is:",
  //   answers: [
  //     { text: "&lt;p>", correct: true },
  //     { text: "&lt;text_block>", correct: false },
  //     { text: "&lt;paragraph>", correct: false },
  //     { text: "&lt;text>", correct: false },
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
  //   questions: "An &lt;h1> tag will always be followed by a &lt;p> tag?",
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
  // // Question 49
  // {
  //   questions: "What does the &lt;abbr> tag define?",
  //   answers: [
  //     { text: "An abbreviation or an acronym", correct: true },
  //     { text: "Content in the body tag", correct: false },
  //     { text: "Content we don't want to user to see", correct: false },
  //     { text: "Content at the bottom of the page", correct: false },
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
  //   questions:
  //     'The &lt;meta charset="UTF-8"> tag is used display a page correctly?',
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
];
// **--------------------------------------------** //
let answerValue;
let questionIndex;

function buildQuizHtml() {
  // Pick a random question
  
  if (sessionStorage.getItem("isComplete") == "true") {
    sessionStorage.setItem("index",0);
    sessionStorage.setItem("score_points",0);
    sessionStorage.setItem("isComplete","false");
  }

  let currentQuestionIndex = parseInt(sessionStorage.getItem("index")) || 0;
  questionIndex = currentQuestionIndex;

  if (currentQuestionIndex >= questionsHtml.length) {
    sessionStorage.setItem("isComplete","true");
    window.location.assign("./complete.html");
  }

  const question = questionsHtml[currentQuestionIndex];

  renderQuestion(question);
  updateScore();
}

buildQuizHtml();

function renderQuestion(question) {
  console.log(question);

  // grab container
  const questionContainer = document.getElementById("html_quiz");

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
      document.getElementById("incorrect_explanation").innerHTML = question.incorrect_explanation;
      let listOfResources = document.createElement("ul");
      listOfResources.style.padding = "0px";
      for(let i=0;i<question.resources.length;i++){
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

  let numberOfQuestions = questionsHtml.length;
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
