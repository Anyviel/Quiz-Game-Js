let lastQuestion = window.questions.length - 1;
let actualQuestion = 0;

//Seleciona uma Questão
function runningQuestion() {
    let q = questions[actualQuestion];
    question.innerHTML = `<p>${q.question}</p>`;
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//Inicia o Quiz
start.addEventListener("click", startQuiz);

let TIMER;
function startQuiz() {
    start.style.display = "none";
    runningQuestion();
    quiz.style.display = "block";
    progressRender();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}

//Faz a contagem das questões
function progressRender() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += `<div class='acertos' id='${qIndex}'></div>`
    }
}

//Faz o tempo de resposta funcionar
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timerGauge.style.width = `${count * gaugeUnit}px`;
        count++;
    } else {
        checkAnswer(false);
        /*count = 0;
        wrongAnswer();
        if (actualQuestion < lastQuestion) {
            actualQuestion++;
            runningQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }*/
    }
}

//Calcula a quantidade de acertos
let score = 0;

function checkAnswer(answer) {
    if (answer == questions[actualQuestion].correct) {
        //Se a resposta estiver Correta
        score++
        correctAnswer()
    } else {
        //Se a resposta estiver errada
        wrongAnswer()
    }
    count = 0; // Reinicia o Counter para a próxima pergunta
    if (actualQuestion < lastQuestion) {
        //Verifica a posição da questão
        actualQuestion++;
        runningQuestion();
    } else {
        //Finaliza o Quiz caso não haja mais perguntas
        clearInterval(TIMER);
        scoreRender();
    }
}

function correctAnswer() {
    document.getElementById(actualQuestion).classList.add('bg-correct');
    renderCounter();
    //document.getElementById(actualQuestion).classList.remove('bg-wrong');
    //document.getElementById(actualQuestion).style.background = "#0f0";
}
function wrongAnswer() {
    document.getElementById(actualQuestion).classList.add('bg-wrong');
    renderCounter();
    //document.getElementById(actualQuestion).classList.remove('bg-correct');
    //document.getElementById(actualQuestion).style.background = "#f00";
}

function scoreRender() {
    scoreDiv.style.display = "block";

    // Calcula a quantidade de acertos em porcentagem
    const scorePerCent = Math.round(100 * score / questions.length);

    // Escolhe uma imagem de acordo com a porcentagem de Acertos
    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
            (scorePerCent >= 40) ? "img/3.png" :
                (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}