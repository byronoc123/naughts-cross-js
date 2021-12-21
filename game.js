let board = [[null, null, null],[null, null, null],[null, null, null]];
let gameComplete = false;
let currentPlayer = "noughts";
let turn = 0;

function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if (board[row][column] === null){
        if (turn === 0){
            board[row][column] = "nought"
            turn ++
        } else if (turn === 1) {
            board[row][column] = "cross"
            turn --
        }
    } else {
        return null
    }
}

function checkWinner() {
    if (board[0][0]==="nought" && board[0][1]==="nought" && board[0][2]==="nought"){
            return "noughts"
    } else if  (board[0][0]==="cross" && board[0][1]==="cross" && board[0][2]==="cross") {
        return "crosses"
    }

    if (board[1][0]==="nought" && board[1][1]==="nought" && board[1][2]==="nought"){
            return "noughts"
    } else if (board[1][0]==="cross" && board[1][1]==="cross" && board[1][2]==="cross"){
        return "crosses"
    }

    if (board[2][0]==="nought" && board[2][1]==="nought" && board[2][2]==="nought"){
            return "noughts"
    } else if (board[2][0]==="cross" && board[2][1]==="cross" && board[2][2]==="cross"){
        return "crosses"
    }

    if (board[0][2]==="nought" && board[1][2]==="nought" && board[2][2]==="nought"){
            return "noughts"
    } else if (board[0][2]==="cross" && board[1][2]==="cross" && board[2][2]==="cross"){
            return "crosses"
    }

    if (board[0][1]==="nought" && board[1][1]==="nought" && board[2][1]==="nought"){
            return "noughts"
    } else if (board[0][1]==="cross" && board[1][1]==="cross" && board[2][1]==="cross"){
        return "crosses"
    }

    if (board[0][0]==="nought" && board[1][0]==="nought" && board[2][0]==="nought"){
            return "noughts"
    } else if (board[0][0]==="cross" && board[1][0]==="cross" && board[2][0]==="cross"){
        return "crosses"
    }

    if (board[0][0]==="nought" && board[1][1]==="nought" && board[2][2]==="nought"){
            return "noughts"
    } else if (board[0][0]==="cross" && board[1][1]==="cross" && board[2][2]==="cross"){
        return "crosses"
    }

    if (board[0][2]==="nought" && board[1][1]==="nought" && board[2][2]==="nought"){
            return "noughts"
    } else if (board[0][2]==="cross" && board[1][1]==="cross" && board[2][2]==="cross") {
        return "crosses"
    }
}

function resetGame() {
    console.log("resetGame was called");
    board = [[null, null, null],[null, null, null],[null, null, null]];
    gameComplete = false;
    currentPlayer = "noughts";
    
}

function getBoard() {
    console.log("getBoard was called");
    console.log(board)
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
