const quizData = [{
        question:'What does HTML stand for?',
        a: 'Hot Tamale Milk Latte',
        b: 'Hyper Text Markup LAnguage',
        c: 'How To Milk Lamas',
        d: 'Hard Tough Manly Large',
        correct: 'b'
},{
        question: 'Who is the first president of the united states?',
        a:'Abraham Lincoln',
        b:'Joe Rogan',
        c: 'Obama Bin Ladin',
        d: 'George Washington',
        correct: 'd'
},{
        question: 'How many continents are on Earth?',
        a: '4',
        b: '6',
        c: '2',
        d:'7',
        correct: 'd'
}, {
        question: 'Why is 6 afraid of 7?',
        a: '8 9 10',
        b: 'Y2K',
        c: '7 8 9',
        d: '9/11',
        correct: 'c'
}, {
        question: 'What is the chemical formula for water?',
        a: 'NWA',
        b: 'H2O',
        c: 'WWE',
        d: 'H30',
        correct:'b'
}
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer'); //Radio Buttons
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');       //T
const b_text = document.getElementById('b_text');       //E     To place inside
const c_text = document.getElementById('c_text');       //X
const d_text = document.getElementById('d_text');       //T


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
        deselectAnswer();

        const currentQuizData = quizData[currentQuiz];
        
        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;

        
};

function getSelected() {

        let answer = undefined;

        answerEls.forEach((answerEl) => {
                if(answerEl.checked) {
                        answer = answerEl.id
                }
        });

        return answer;
}

function deselectAnswer() {
        answerEls.forEach((answerEl) => {
                answerEl.checked = false;
        });

}

submitBtn.addEventListener("click", () =>{

        const answer = getSelected();

        
        
        if(answer) {
                if(answer===quizData[currentQuiz].correct) {
                score++;
                }

                currentQuiz++;
                if(currentQuiz < quizData.length) {
                loadQuiz();
                }
                else {
                        quiz.innerHTML = `
                        <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                        
                        <button onclick="location.reload()">Reload</button>
                    `;
         }

        }

});

