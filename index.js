const quiz=[
    {
        question: 'この中で1番遅刻する人は？',
        answers: [
            '放送作家',
    'ミズキバック',
    '練馬春日町（w）',
    '角刈りくん'
        ],
        correct: '練馬春日町（w）'
    },
    {
        question: 'この中で一番梅園先生に怯えているのは誰？',
        answers: [
            '立川在住男',
    '放送作家',
    'はやしくん',
    '練馬春日町くん'
        ],
        correct: 'はやしくん'
    },
    {
        question: 'この中で中３のときにポロリしたのは誰？',
        answers: [
            '温泉労働者くん',
    '角刈りくん',
    '最近太ってるくん',
    'サイコパスくん'
        ],
        correct: 'サイコパスくん'
    }
];

const quizLength=quiz.length;
let quizIndex=0;
let score=0;



//クイズの問題文、選択肢を定義する
const $button=document.getElementsByTagName('button');
const setupQuiz=() => {
document.getElementById('js-question').textContent=quiz[quizIndex].question;
let buttonIndex=0;
const buttonLength=$button.length;
while (buttonIndex<buttonLength) {
    $button[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
}
}

setupQuiz();

const clickHandler=(e) => {
    if(quiz[quizIndex].correct===e.target.textContent){
        window.alert('正解');
        score++;
        }
        else{
        window.alert('不正解');
        }

quizIndex++;

if(quizIndex<quizLength){
setupQuiz();
}
else{
    window.alert('終了！あなたの正解数は'+score+'/'+quizLength+'です！');
}

};

//クリックしたときの正誤判定

let handlerIndex = 0;
const buttonLength= $button.length;
while (handlerIndex<buttonLength) {
    $button[handlerIndex].addEventListener('click',(e) =>{
        clickHandler(e);
    })
    handlerIndex++;
}

