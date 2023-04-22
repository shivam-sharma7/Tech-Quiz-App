const quizData = [

    {

        question:'1. Which is best Programming language for beginners?',
        a: 'C/C++',
        b: 'Java',
        c: 'Python',
        d: 'Javascript',
        correct: 'c'

    },

    {

        question:'2. What is best programming language in 2023?',
        a: 'C/C++',
        b: 'Java',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },

    {

        question:'3. What is HTML?',
        a: 'A Programming language',
        b: 'API',
        c: 'Hypertext Markup Language',
        d: 'JSON object',
        correct: 'c'

    },

    {

        question:'4. Which tech stack use to create a website UI?',
        a: 'HTML CSS',
        b: 'Python',
        c: 'Docker',
        d: 'Node.js',
        correct: 'a'

    },

    {

        question:'5. Which is the best front-end framework in 2023?',
        a: 'React',
        b: 'Angular',
        c: 'Vue',
        d: `jQuery`,
        correct: 'a'
    },

    {

        question:'6. Who is founder of Twitter?',
        a: 'Elon Musk',
        b: 'Mark Zuckerburge',
        c: 'Jack Dursey',
        d: 'Larry Page',
        correct: 'c'
    },

    {

        question:'7. Who is founder of facebook?',
        a: 'Elon Musk',
        b: 'Mark Zuckerburge',
        c: 'Jack Dursey',
        d: 'Larry Page',
        correct: 'b'
    },

    {

        question:'8. Who is founder of Google?',
        a: 'Elon Musk',
        b: 'Mark Zuckerburge',
        c: 'Jack Dursey',
        d: 'Larry Page',
        correct: 'd'
    },

    {

        question:'9. Who is founder of Tesla?',
        a: 'Elon Musk',
        b: 'Mark Zuckerburge',
        c: 'Jack Dursey',
        d: 'Larry Page',
        correct: 'a'
    },

    {

        question:'10. Who is founder of Apple?',
        a: 'Stev Jobs',
        b: 'Mark Zuckerburge',
        c: 'Jack Dursey',
        d: 'Larry Page',
        correct: 'a'
    },

    {

        question:'11. Who is founder of Tata?',
        a: 'Gautam Adani',
        b: 'Ratan Tata',
        c: 'Mukesh Ambani',
        d: 'Anil Ambani',
        correct: 'b'
    },

    {

        question:'12. Who is founder of Jio?',
        a: 'Gautam Adani',
        b: 'Ratan Tata',
        c: 'Anil Ambani',
        d: 'Mukesh Ambani',
        correct: 'd'
    },

    {

        question:'13. Who invented Java?',
        a: 'James Gosling',
        b: 'Brendan Eich',
        c: 'jack Dursey',
        d: 'Larry Page',
        correct: 'a'
    },

    {

        question:'14. Did Java invented in?',
        a: '1972',
        b: '1978',
        c: '1995',
        d: '2000',
        correct: 'c'
    },

    {

        question:'13. Who invented Windows?',
        a: 'James Gosling',
        b: 'Bill Gates',
        c: 'jack Dursey',
        d: 'Larry Page',
        correct: 'b'
    },

    {
        question: '15. OS computer abbreviation usually means?',
        a:'Order of Significance',
        b:'Open Software',
        c:'Operating System',
        d:'Optical Sensor',
        correct: 'c'
    },

    {
        question: '15. Is Windows 11 operating system?',
        a:'Yes',
        b:'No',
        c:'Maybe',
        d:'a and b',
        correct: 'a'
    }



];

 
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deselectAns = () => {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

}


const loadQuiz = () => {

    deselectAns();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

loadQuiz();


const getSelect = () => {

    let answer = undefined;

    answerEls.forEach((answerEl) => {

        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
};


submitBtn.addEventListener('click', () => {
    // check to see ans
    const answer = getSelect();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        } else if(answer != quizData[currentQuiz].correct){
            score--;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
             
            quiz.innerHTML = `
            <h2>Congratulation 🎉 you answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});