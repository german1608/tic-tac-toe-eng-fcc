module.exports = {
  gameWin (game) {
    /*
     * Description:
     *  Function that takes an array representing a tic-tac-toe
     *  game and determines if it's a winning game.
     *
     * Parameters:
     *  game: array of characters.
     *
     * Return:
     *  true if it's a winning game, false otherwise.
    */
    // Testing for rows matches
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
