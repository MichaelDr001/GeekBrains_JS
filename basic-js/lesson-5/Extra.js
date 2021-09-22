
'use strict';

const chessArr = [
    ' ',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    'A',
    'castle',
    'bishop',
    'knight',
    'king',
    'queen',
    'knight',
    'bishop',
    'castle',
    'B',
    'pawn',
    'C',
    'space',
    'D',
    'space',
    'E',
    'space',
    'F',
    'space',
    'G',
    'pawn',
    'H',
    'castle',
    'bishop',
    'knight',
    'king',
    'queen',
    'knight',
    'bishop',
    'castle'
];

let chessboard = document.createElement('div');
chessboard.className = 'chessboard';
document.body.appendChild(chessboard);

function chessPieceGeneration(piece, index) {
    let abbreviatedName = piece[0];

    if (piece == 'space') {
        for (let i = 0; i < 8; i++) {
            let chessboardSquare = document.createElement('div');
            chessboardSquare.className = 'chessboardSquare';
            chessboard.appendChild(chessboardSquare);
            if (index % 2) {
                chessboardSquare.classList.add('honest');
            } else {
                chessboardSquare.classList.add('odd');
            }
        };
    } else if (piece == 'pawn') {
        for (let i = 0; i < 8; i++) {
            let chessboardSquare = document.createElement('div');
            chessboardSquare.className = 'chessboardSquare piece_pawn';
            chessboardSquare.innerHTML = `<p>${abbreviatedName}</p>`;
            chessboard.appendChild(chessboardSquare);
            if (index % 2) {
                chessboardSquare.classList.add('honest');
            } else {
                chessboardSquare.classList.add('odd');
            }
        };
    } else {
        let chessboardSquare = document.createElement('div');
        chessboardSquare.className = `chessboardSquare piece_${piece}`;
        chessboardSquare.innerHTML = `<p>${abbreviatedName}</p>`;
        chessboard.appendChild(chessboardSquare);
        if (index % 2) {
            chessboardSquare.classList.add('honest');
        } else {
            chessboardSquare.classList.add('odd');
        }
    };
};

chessArr.forEach(chessPieceGeneration);