class Board {
  public state: string[];
  // Initializing the board
  constructor(state: string[] = ['', '', '', '', '', '', '', '', '']) {
    this.state = state;
  }
  // Logs a visualised board with the current state to the console
  public printFormattedBoard(): void {
    // let formattedString: string = '';
    // this.state.forEach((cell: any, index: any) => {
    //   formattedString += cell ? ` ${cell} |` : '   |';
    //   if ((index + 1) % 3 === 0) {
    //     formattedString = formattedString.slice(0, -1);
    //     if (index < 8) {
    //       formattedString +=
    //         '\n\u2015\u2015\u2015 \u2015\u2015\u2015 \u2015\u2015\u2015\n';
    //     }
    //   }
    // });
    // console.log('%c' + formattedString, 'color: #6d4e42;font-size:16px');
  }
  // Checks if board has no symbols yet
  public isEmpty(): boolean {
    return this.state.every((cell: string) => !cell);
  }
  // Check if board has no spaces available
  public isFull(): boolean {
    // @ts-ignore
    return this.state.every((cell: string) => cell);
  }
  /**
   * Inserts a new symbol(x,o) into
   * @param {String} symbol
   * @param {Number} position
   * @return {Boolean} boolean represent success of the operation
   */
  public insert(symbol: any, position: any): boolean {
    if (position > 15 || this.state[position]) {
      return false;
    }
    this.state[position] = symbol;
    return true;
  }
  // Returns an array containing available moves for the current state
  public getAvailableMoves(): any {
    const moves: any[] = [];
    this.state.forEach((cell: any, index: any) => {
      if (!cell) {
        moves.push(index);
      }
    });
    return moves;
  }
  /**
   * Checks if the board has a terminal state ie. a player wins or the board is full with no winner
   * @return {Object} an object containing the winner, direction of winning and row number
   */
  public isTerminal(): any {
    // Return False if board in empty
    if (this.isEmpty()) {
      return false;
    }

    // Checking Horizontal Wins
    if (
      this.state[0] === this.state[1] &&
      this.state[0] === this.state[2] &&
      this.state[0]
    ) {
      return { winner: this.state[0], direction: 'H', row: 1 };
    }
    if (
      this.state[3] === this.state[4] &&
      this.state[3] === this.state[5] &&
      this.state[3]
    ) {
      return { winner: this.state[3], direction: 'H', row: 2 };
    }
    if (
      this.state[6] === this.state[7] &&
      this.state[6] === this.state[8] &&
      this.state[6]
    ) {
      return { winner: this.state[6], direction: 'H', row: 3 };
    }

    // Checking Vertical Wins
    if (
      this.state[0] === this.state[3] &&
      this.state[0] === this.state[6] &&
      this.state[0]
    ) {
      return { winner: this.state[0], direction: 'V', row: 1 };
    }
    if (
      this.state[1] === this.state[4] &&
      this.state[1] === this.state[7] &&
      this.state[1]
    ) {
      return { winner: this.state[1], direction: 'V', row: 2 };
    }
    if (
      this.state[2] === this.state[5] &&
      this.state[2] === this.state[8] &&
      this.state[2]
    ) {
      return { winner: this.state[2], direction: 'V', row: 3 };
    }

    // Checking Diagonal Wins
    if (
      this.state[0] === this.state[4] &&
      this.state[0] === this.state[8] &&
      this.state[0]
    ) {
      return { winner: this.state[0], direction: 'D', row: 1 };
    }
    if (
      this.state[2] === this.state[4] &&
      this.state[2] === this.state[6] &&
      this.state[2]
    ) {
      return { winner: this.state[2], direction: 'D', row: 2 };
    }

    // If no winner but the board is full, then it's a draw
    if (this.isFull()) {
      return { winner: 'draw' };
    }

    // return false otherwise
    return false;
  }
}

export default Board;
