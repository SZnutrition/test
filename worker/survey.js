class SurveyStateMachine {
    constructor(state) {
        this.state = state;
    }
    performTransition(targetState) {
        let transition = TRANSITIONS.find((t) => {
            return ((t.FROM == this.state) && (t.TO == targetState));
        });
        if (transition) {
            this.state = targetState;
            console.log(this.state);
            transition.ACTIONS.forEach((a)=> {
                a(transition);
            })
        }
        else {
            console.log(`No transition found`);
        }
    }
}

let machine = new SurveyStateMachine('INIT');

const UserActions = {
    'INIT': `<button id="test-button-start" onclick="machine.performTransition('ANSWERING')">Начать</button>`,
    'ANSWERING': `<button class="test-answer" data-answer="0" onclick="machine.performTransition('ANSWERING')">Да</button><button class="test-answer" data-answer="1"  onclick="machine.performTransition('ANSWERING')">Нет</button>`,
    'ENDING': `<button id="test-button-end" onclick="machine.performTransition('END')">Закончить</button>`,
    'END': `<button id="test-button-again" onclick="machine.performTransition('RES')">Результат</button>`,
    'RES': `<a href="../../main.html"><button id="test-button-again" >Раздел анализов</button></a>`,
}

const DOM_MANIPULATIONS = {
    loadText(text) {
        document.querySelector(".test-container-card-text").innerHTML = text;
    },
    loadQuestion(text) {
        document.querySelector(".test-container-card-text").innerHTML = text;
    },
    loadButtons() {
        document.querySelector(".test-container-button").innerHTML = UserActions[machine.state];
    },
    loadAllNums() {
        for (let i = 0; i < Object.keys(questions).length; i+=1) {
            let num = document.createElement('span');
            num.className = "test-container-question_number";
            num.innerText = i+1;
            document.querySelector(".test-container-question_numbers").appendChild(num);
        }
    },
    loadActiveNum(num) {
        document.querySelectorAll(".test-container-question_number")[num-1].style.background = "rgba(0,0,0,.38)";
        document.querySelectorAll(".test-container-question_number")[num].style.background = 'red';
    }
};
const Questions  = {
    QUESTION_ID: 0,
    answers: { },
    score: 0
}
const Actions = {
    loadQuestion() {
        if (event.target.dataset.answer) {
            Questions.answers[Questions.QUESTION_ID] = event.target.dataset.answer;
            if (event.target.dataset.answer == 0) {
                Questions.score += score[Questions.QUESTION_ID];
            }
            Questions.QUESTION_ID +=1;
            DOM_MANIPULATIONS.loadActiveNum(Questions.QUESTION_ID);
        }

        if (Questions.QUESTION_ID == Object.keys(questions).length-1) {
            DOM_MANIPULATIONS.loadQuestion(questions[Questions.QUESTION_ID]);
            machine.performTransition('ENDING');
            DOM_MANIPULATIONS.loadButtons();
        }
        else {
            DOM_MANIPULATIONS.loadQuestion(questions[Questions.QUESTION_ID]);
            DOM_MANIPULATIONS.loadButtons();
        }
    },
    reloadSurvey() {
        Questions.QUESTION_ID = 0;
        console.log(`Reload survey`);
        DOM_MANIPULATIONS.loadText("Здравствуйте! Предлагаем Вам пройти простой тест на выявление основных признаков");
        DOM_MANIPULATIONS.loadButtons();
    },
    finishingSurvey() {
        console.log(`Finishing survey`);
    },
    finishSurvey() {
        console.log(`Finish survey`);
        Questions.QUESTION_ID = 0;
        DOM_MANIPULATIONS.loadText("Получить результаты тестирования?");
        DOM_MANIPULATIONS.loadButtons();
    },
    getContact() {
        if (Questions.score >= scoreTotal) {
            DOM_MANIPULATIONS.loadText(badResult);
        }
        else {
            DOM_MANIPULATIONS.loadText(goodResult);
        }
        DOM_MANIPULATIONS.loadButtons();
    }
};

const TRANSITIONS = [
    {  FROM: 'INIT', TO: 'ANSWERING', ACTIONS: [Actions.loadQuestion] },
    {  FROM: 'ANSWERING', TO: 'ANSWERING', ACTIONS: [Actions.loadQuestion] },
    {  FROM: 'ANSWERING', TO: 'ENDING', ACTIONS: [Actions.finishingSurvey] },
    {  FROM: 'ENDING', TO: 'END', ACTIONS: [Actions.finishSurvey] },
    {  FROM: 'END', TO: 'RES', ACTIONS: [Actions.getContact] },
    {  FROM: 'END', TO: 'INIT', ACTIONS: [Actions.reloadSurvey] }
];

DOM_MANIPULATIONS.loadAllNums()


