const quizData = [
  {
    question: 'What language establishes the content of a webpage?',
    a: 'HTML',
    b: 'CSS',
    c: 'JavaScript',
    d: 'Ham',
    correct: 'a',
  },

  {
    question: 'DOM is an abbreviation for',
    a: 'Data Object Mode',
    b: 'Dumb Old Man',
    c: 'Document Object Model',
    d: 'Dutle Opo Mipsy',
    correct: 'c',
  },

  {
    question: 'The condition in an if / else statement is inclosed within',
    a: 'quotes',
    b: 'curly brackets',
    c: 'parentheses',
    d: 'square brackets',
    correct: 'c',
  },

  {
    question: 'How would you console log Hello World?',
    a: `console('Hello World')`,
    b: `console.log('Hello World')`,
    c: `function.write('Hello World')`,
    d: `log.'Hello World'`,
    correct: 'a',
  },

  {
    question: 'Inside which HTML element do we put JavaScript?',
    a: '< javascript >',
    b: '< js >',
    c: '< script >',
    d: '< scripting >',
    correct: 'c',
  },

  {
    question: 'How do you call a function named myFunction?',
    a: 'call myFunction()',
    b: 'myFunction()',
    c: 'call function myFunction',
    d: 'Call.myFunction()',
    correct: 'b',
  },

  {
    question: 'What is the correct place to insert JavaScript into HTML?',
    a: '< head >',
    b: '< body >',
    c: 'Both',
    d: 'Neither',
    correct: 'c',
  },

  {
    question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    a: '< script src="xxx.js" >',
    b: '< script name="xxx.js" >',
    c: '< script href="xxx.js" >',
    d: 'None of the above',
    correct: 'a',
  },

  {
    question: 'How do you write a conditional statement for executing some statements only if i is equal to 5?',
    a: 'if i==5 then',
    b: 'if (i == 5)',
    c: 'if i=5 then',
    d: 'if i=5',
    correct: 'b',
  },

  {
    question: 'Which is NOT a JavaScript data type?',
    a: 'Number',
    b: 'String',
    c: 'Boolean',
    d: 'Undeclared',
    correct: 'd',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
  
    
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

