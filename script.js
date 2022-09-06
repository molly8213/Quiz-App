const quizData = [
    {
        question: 'How old is florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'java',
        b: 'C',
        c: 'Python',
        d: 'javascript',
        correct: 'd'
    },
    {
        question:'Who is the president of US?',
        a: 'florin pop',
        b: 'Donald trump',
        c: 'ivan saldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question:'What does HTML stand for?',
        a: 'Hypertext Markup language',
        b: 'Cascading style sheet',
        c: 'Jason object notation',
        d: 'Helicopter Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question:'What year was Javascript created?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'none of the above',
        correct: 'b'
    }
]
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answersEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let answer = undefined;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;
}
function getSelected () {
   
    let answer = undefined;
    answersEls.forEach( (answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
        console.log(answerEl.value);
    });
    return  answer;
}
function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].
            correct){
                score++;
            }

            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();
            } else{
                quiz.innerHTML = `<h2>You answered
                correctly ${score}/${quizData.
                length} questions.</h2>
                <buttononClick="location.reload()
                ">Reload</button>`;
        }
    }
});
