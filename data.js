window.questions = [
    {
        question: "Quem é este Cavaleiro?",
        imgSrc: "img/rans.png",
        choiceA: "Milo de Escorpião",
        choiceB: "Aldebaran de Touro",
        choiceC: "Aiolia de Peixes",
        correct: "A"
    },
    {
        question: "Qual é o Mano do Cásulo mais Top?",
        imgSrc: "img/casulo.png",
        choiceA: "Carlos o mais Pica",
        choiceB: "Raquel Gente boa",
        choiceC: "Diego Mano Top",
        correct: "A"
    },
    {
        question: "Qual Habilidade foi usada para derrotar Shaka na Saga de Hades (Santuário)?",
        imgSrc: "img/shaks.gif",
        choiceA: "Ondas do Inferno",
        choiceB: "Outra Dimensão",
        choiceC: "Constelação de Athena",
        correct: "C"
    },
    {
        question: "Respeitar o PHP é necessário porquê:",
        imgSrc: "img/thinking.png",
        choiceA: "É uma ótima linguagem.",
        choiceB: "Quebra galho com Gamabiarra.",
        choiceC: "A Raquel gosta e é isso.",
        correct: "C"
    }
].sort(() => Math.random() - 0.5).slice(0, 3); //Faz a randomização das questões.
