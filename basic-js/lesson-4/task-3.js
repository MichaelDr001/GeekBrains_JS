// task 3

// На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
// Ссылка на JsFiddle: https://jsfiddle.net/MotorGopher/sz5o2k1L/1/


'use strict';

/* Массив хранит загадки, с описанием их номера, сложности и стоимости */
const allQuestions = [
    [1, 'Легко', 100, 'Какое колесо не крутится при правом развороте?', 'Запасное'],
    [2, 'Легко', 100, 'Чем их больше, тем вес меньше. Что это?', 'Дырки'],
    [3, 'Легко', 100, 'Каким будет гнедой конь, если его искупать?', 'Мокрым'],
    [4, 'Средне', 250, 'Что идет из города в город, но при этом не движется?', 'Дорога'],
    [5, 'Средне', 250, 'Какой колокольчик не может звенеть?', 'Цветочный'],
    [6, 'Средне', 250, 'Сами не горят, а их гасить все равно приходится.', 'Долги'],
    [7, 'Сложно', 500, 'Какую ленту нельзя вплести в косичку?', 'Пулеметную'],
    [8, 'Сложно', 500, 'Что можно увидеть с закрытыми глазами?', 'Сон'],
    [9, 'Сложно', 500, 'Какой узел нельзя развязать?', 'Железнодорожный'],
];

class QuestionForUser {
    /**
     * Создаёт объект выводимого на экран вопроса
     * @param {number} id - уникальный номер вопроса
     * @param {string} difficulty - сложность вопроса
     * @param {number} cost - стоимость вопроса в баллах
     * @param {string} task - текст вопроса
     * @param {string} result - ответ на вопрос
     */
    constructor (id, difficulty, cost, task, result){
        this.id = id;
        this.difficulty = difficulty;
        this.cost = cost;
        this.task = task;
        this.result = result;
    };
};

/* Переменные для начала игры и счётчик выводимого вопроса */
let userWelcome = confirm('Добро пожаловать в игру "Кто хочет стать миллениалом". \nДля начала игры, начните игру');
let userScore = 0;

/* 
Проверяем, начал ли пользователь игру.
Цикл выводит вопрос, соответствующий активному счётчику.
*/
if (userWelcome) {
    for (let i = 0; i < 9; i++){
        let outputQuestion = new QuestionForUser (allQuestions[i][0],allQuestions[i][1],allQuestions[i][2],allQuestions[i][3],allQuestions[i][4]);
        let userAnswer = prompt(`Вопрос № ${outputQuestion.id}, \nсложность: ${outputQuestion.difficulty}, \nстоимость: ${outputQuestion.cost}. \n\n${outputQuestion.task} \n\nВаш ответ:`);
        if (userAnswer == outputQuestion.result){
            userScore += outputQuestion.cost;
            alert (`Вы угадали, ваш счёт: ${userScore}`);
            continue;
        }else{
            alert (`Вы проиграли, ваш счёт: ${userScore}. \nПравильный ответ на этот вопрос: ${outputQuestion.result}`);
            break;
        }
    };
}else{
    alert ('До свидания, приходите ещё.');
};
