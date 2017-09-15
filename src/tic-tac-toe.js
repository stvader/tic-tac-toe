class TicTacToe { 
    constructor() {
        this.symbol = 'x';
        this.matrix = [[null, null, null], 
                        [null, null, null], 
                        [null, null, null]];
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {        

        rowIndex = parseInt(rowIndex);
        columnIndex = parseInt(columnIndex);

        if (this.matrix[rowIndex][columnIndex] !== null) return;
        this.matrix[rowIndex][columnIndex] = this.symbol;

         if (this.symbol === 'o') {
            this.symbol = 'x';
        } else {
            this.symbol = 'o';
        }
    }

    isFinished() {
        if (this.getWinner() !== null 
            || this.isDraw()) return true;
        return false;
    }

    getWinner() {
        if (
            ((this.matrix[0][0] === this.matrix[1][1]) 
                && (this.matrix[1][1] === this.matrix[2][2])) ||
            ((this.matrix[2][0] === this.matrix[1][1]) 
                && (this.matrix[1][1] === this.matrix[0][2]))
        ) {
            return this.matrix[1][1];
        }

        for (let i=0; i<=2; i++) {
            if ((this.matrix[0][i] === this.matrix[1][i]) 
                && (this.matrix[1][i] === this.matrix[2][i])) {
                return this.matrix[0][i];
            }
            if ((this.matrix[i][0] === this.matrix[i][1]) 
                && (this.matrix[i][1] === this.matrix[i][2])) {
                return this.matrix[i][0];
            }
        }

        return null;
    }

    noMoreTurns() {
        for (let i=0; i<this.matrix.length; i++) {
            let row = this.matrix[i];
            for (let j=0; j<row.length; j++) {
                if (row[j] === null) return false;                
            }
        }

        return true;
    }

    isDraw() {
        if (this.noMoreTurns() === true 
            && this.getWinner() === null) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        rowIndex = parseInt(rowIndex);
        colIndex = parseInt(colIndex);

        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
