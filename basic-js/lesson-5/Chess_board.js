
'use strict';

// Код получидся немного странным. Пытался автоматически генерировать пустые поля и пешки
// через цикл, но так не получалось раскарасить в Ч/Б. 
// Первую попытку добавлю файлом "Extra", прошу помотреть и подсказать, как можно было там 
// закрасить ячейки. Если вообще можно было.


//Создаём массив ячеек шахматной доски
const chessArr = [
    ' ', '1', '2', '3', '4', '5', '6', '7', '8', 'A', 'castle', 'bishop', 'knight', 'king',
    'queen', 'knight', 'bishop', 'castle', 'B', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn',
    'pawn', 'pawn', 'pawn', 'C', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'D', ' ', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', 'E', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'F', ' ', ' ',
    ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn',
    'pawn', 'pawn', 'H', 'castle', 'bishop', 'knight', 'king', 'queen', 'knight',
    'bishop', 'castle'
];


//Создаём шахматное поле
let chessboard = document.createElement('div');
chessboard.className = 'chessboard';
document.body.appendChild(chessboard);

//Создаём кнопку генерации шахматного поля с изображениями
let styleBtn = document.createElement('button');
styleBtn.className = 'styleBtn';
styleBtn.innerHTML = 'Создать поле с изображениями';
document.body.appendChild(styleBtn);

//Создаём кнопку генерации шахматного поля с буквенным обозначением
let textBtn = document.createElement('button');
textBtn.className = 'styleBtn';
textBtn.innerHTML = 'Создать текстовое поле';
document.body.appendChild(textBtn);



/**
 * Генерация шахматного поля с изображениями фигур.
 * Данные массива chessArr, передающие описание шахматной доски.
 * @param {string} piece наименование шахматной ячеки
 * @param {number} index индекс ячейки
 */
function chessImagePieceGeneration(piece, index) {
    let abbreviatedName = piece[0];

    let chessboardSquare = document.createElement('div');
    chessboardSquare.className = `chessboardSquare piece_${piece}`;
    chessboard.appendChild(chessboardSquare);
    if (index % 2) {
        chessboardSquare.classList.add('honest');
    } else {
        chessboardSquare.classList.add('odd');
    };

    if (piece == 'A' || piece == 'B' || piece == 'C' || piece == 'D' ||
        piece == 'E' || piece == 'F' || piece == 'G' || piece == 'H' ||
        piece == '1' || piece == '2' || piece == '3' || piece == '4' ||
        piece == '5' || piece == '6' || piece == '7' || piece == '8') {
        chessboardSquare.className = 'chessboardSquare odd';
        chessboardSquare.innerHTML = `<p>${abbreviatedName}</p>`;
    };
};


/**
 * Генерация шахматного поля с ткстовым оборажением фигур.
 * Данные массива chessArr, передающие описание шахматной доски.
 * @param {string} piece наименование шахматной ячеки
 * @param {number} index индекс ячейки
 */
function chessPieceGeneration(piece, index) {
    let abbreviatedName = piece[0];

    let chessboardSquare = document.createElement('div');
    chessboardSquare.className = `chessboardSquare`;
    chessboardSquare.innerHTML = `<p>${abbreviatedName}</p>`;
    chessboard.appendChild(chessboardSquare);
    if (index % 2) {
        chessboardSquare.classList.add('honest');
    } else {
        chessboardSquare.classList.add('odd');
    };

    if (piece == 'A' || piece == 'B' || piece == 'C' || piece == 'D' ||
        piece == 'E' || piece == 'F' || piece == 'G' || piece == 'H' ||
        piece == '1' || piece == '2' || piece == '3' || piece == '4' ||
        piece == '5' || piece == '6' || piece == '7' || piece == '8') {
        chessboardSquare.className = 'chessboardSquare odd';
    };
};


//Вызов обработчика forEach для создания шахматного поля бнз изображений
textBtn.addEventListener('click', function () {
    chessArr.forEach(chessPieceGeneration);
});

//Вызов обработчика forEach для создания шахматного поля с изображениями
styleBtn.addEventListener('click', function () {
    chessArr.forEach(chessImagePieceGeneration);
});