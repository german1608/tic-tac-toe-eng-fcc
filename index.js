module.exports = {
  gameTurn: 1,
  cpuSymbol: '',
  cpuStart: true,
  // Default gameState
  gameState: [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ],
  print () {
    const g = this.gameState
    return ` ${g[0]} | ${g[1]} | ${g[2]}\n---+---+---\n ${g[3]} | ${g[4]} | ${g[5]}\n---+---+---\n ${g[6]} | ${g[7]} | ${g[8]}`
  },
  cpuDefends () {
    /*
     * Description:
     *  Function that determines if the cpu should defend itself. In that case,
     *  it makes the move changing this.gameState
     *
     * Parameters:
     *  none
     *
     * Return:
     *  True if the cpu has to defend itself, false otherwise
     */
    /* istanbul ignore next */
    const playerSymbol = this.cpuSymbol === 'o' ? 'x' : 'o'
    for (let i = 0; i < 9; ++i) {
      if (this.gameState[i] === ' ') {
        this.gameState[i] = playerSymbol
        if (this.gameWin()) {
          this.gameState[i] = this.cpuSymbol
          return true
        }
        this.gameState[i] = ' '
      }
    }
    return false
  },
  checkForWinMove () {
    /*
     * Description:
     *  Function that checks if the cpu can win at that the current turn
     *
     * Parameters:
     *  None
     *
     * Return:
     *  True if the computer can win at that turn. Also change this.gameState
     *  False otherwise
     */
    for (let i = 0; i < 9; ++i) {
      if (this.gameState[i] === ' ') {
        this.gameState[i] = this.cpuSymbol
        if (this.gameWin()) {
          return true
        }
        this.gameState[i] = ' '
      }
    }
    return false
  },
  /* istanbul ignore next */
  cpufirstPlayer () {
    /*
     * Description
     *  Function that determines who'll be the first player between
     *  the CPU or the human
     *
     * Parameters:
     *  none
     *
     * Return:
     *  if the random number is less or equal than 2 (75% prob) the
     *  first player will be the CPU. Otherwise, the human.
     */
    /* istanbul ignore next */
    const num = Math.floor(Math.random() * 4)
    /* istanbul ignore next */
    return num <= 2
  },

  gameWin () {
    /*
     * Description:
     *  Function that takes an array representing a tic-tac-toe
     *  game and determines if it's a winning game.
     *
     * Parameters:
     *  none
     *
     * Return:
     *  true if it's a winning game, false otherwise.
    */
    // Testing for rows matches
    const game = this.gameState
    return (game[0] === 'x' && game[1] === 'x' && game[2] === 'x') ||
      (game[3] === 'x' && game[4] === 'x' && game[5] === 'x') ||
      (game[6] === 'x' && game[7] === 'x' && game[8] === 'x') ||
      (game[0] === 'o' && game[1] === 'o' && game[2] === 'o') ||
      (game[3] === 'o' && game[4] === 'o' && game[5] === 'o') ||
      (game[6] === 'o' && game[7] === 'o' && game[8] === 'o') ||
    // Testing for diagonal matches
      (game[0] === 'x' && game[4] === 'x' && game[8] === 'x') ||
      (game[2] === 'x' && game[4] === 'x' && game[6] === 'x') ||
      (game[0] === 'o' && game[4] === 'o' && game[8] === 'o') ||
      (game[2] === 'o' && game[4] === 'o' && game[6] === 'o') ||
    // Testing for columns
      (game[0] === 'x' && game[3] === 'x' && game[6] === 'x') ||
      (game[1] === 'x' && game[4] === 'x' && game[7] === 'x') ||
      (game[2] === 'x' && game[5] === 'x' && game[8] === 'x') ||
      (game[0] === 'o' && game[3] === 'o' && game[6] === 'o') ||
      (game[1] === 'o' && game[4] === 'o' && game[7] === 'o') ||
      (game[2] === 'o' && game[5] === 'o' && game[8] === 'o')
  }
}
