/* eslint-disable no-useless-return */

/**
 * Constructs and string representing `this.gameState`
 * @example
 * this.gameState = [
 *  'x', ' ', ' ',
 *  ' ', ' ', 'x',
 *  ' ', 'o', ' '
 * ]
 * console.log(this.print())
 * /* Output:
 *    x |   |
 *   ---+---+---
 *      |   | x
 *   ---+---+---
 *      | o |
 * *\/
 * @returns {string}
 */
function print () {
  const g = this.gameState
  return ` ${g[0]} | ${g[1]} | ${g[2]}\n---+---+---\n ${g[3]} | ${g[4]} | ${g[5]}\n---+---+---\n ${g[6]} | ${g[7]} | ${g[8]}`
}

/**
 * Function that takes an array representing a tic-tac-toe
 * game and determines if it's a winning game.
 * Returns true if it's a winning game, false otherwise.
 * @returns {boolean}
 * @example
 * this.gameState = [
 *   ' ', ' ', 'x',
 *   ' ', 'x', ' ',
 *   'x', ' ', ' '
 * ]
 * if (this.gameWin) console.log('I won!')
 */
function gameWin () {
  const game = this.gameState
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

/**
 * Function that determines if the cpu should defend itself. In that case,
 * it makes the move changing this.gameState
 * @returns {boolean} Boolean representing if the cpu should defend
 * @example
 * // Assuming the cpu is 'x'
 * this.gameState = [
 *   ' ', 'o', 'x',
 *   ' ', ' ', ' ',
 *   ' ', 'o', ' '
 * ]
 * if (this.cpuDefends()) console.log('The cpu defended itself')
 * // Output: The cpu defended itself
 */
function cpuDefends () {
  /* istanbul ignore next */
  const playerSymbol = this.cpuSymbol === 'o' ? 'x' : 'o'
  for (let i = 0; i < 9; ++i) {
    if (this.gameState[i] === ' ') {
      this.gameState[i] = playerSymbol
      if (this.gameWin()) {
        this.gameState[i] = this.cpuSymbol
        this.gameTurn++
        return true
      }
      this.gameState[i] = ' '
    }
  }
  return false
}

/**
 * Function that determines the best move for the cpu.
 * Changes `this.gameState`. This method doesn't compute a move by analizing
 * `this.gameState`. It is following an strategy. If you change the gameState
 * it may not work properly
 * @returns {undefined} Changes this.gameState
 * @example
 * // See test/cpu-best-move.test.js
 */
function bestMove () {
  if (this.checkForWinMove() || this.cpuDefends()) { return }

  const {gameState, cpuSymbol, humanStartPosition} = this
  /* istanbul ignore next */
  const humanSymbol = cpuSymbol === 'x' ? 'o' : 'x'
  const playedInTheCenter = gameState[4] === humanSymbol
  const playedInAnEdge = gameState[1] === humanSymbol ||
    gameState[3] === humanSymbol ||
    gameState[5] === humanSymbol ||
    gameState[7] === humanSymbol
  const playedInACorner = !playedInTheCenter && !playedInAnEdge
  let numCorners = 0
  gameState.forEach((box, i) => {
    if (box === humanSymbol) {
      if (i === 0 || i === 2 || i === 6 || i === 8) {
        numCorners++
      }
    }
  })
  let i = 0
  switch (this.gameTurn) {
    case 1:
      i = 8
      break
    case 2:
      if (playedInAnEdge) {
        this.humanStartPosition = 'edg'
        i = gameState[1] === humanSymbol || gameState[3] === humanSymbol
          ? 0
          : 8
      } else {
        this.humanStartPosition = playedInTheCenter ? 'cen' : 'cor'
        i = playedInTheCenter ? 8 : 4
      }
      break
    case 3:
      if (playedInAnEdge) {
        this.humanStartPosition = 'edg'
        i = 4
      } else if (playedInACorner) {
        this.humanStartPosition = 'cor'
        i = gameState[0] === humanSymbol
          ? 2
          : 0
      } else {
        i = 0
        this.humanStartPosition = 'cen'
      }
      break
    case 4:
      if (humanStartPosition === 'cor') {
        if (numCorners === 2) {
          i = 1
        } else {
          if (gameState[0] === humanSymbol) {
            i = 8
          } else if (gameState[2] === humanSymbol) {
            i = 6
          } else if (gameState[6] === humanSymbol) {
            i = 2
          } else {
            i = 0
          }
        }
      } else i = 4
      break
    case 5:
      if (humanStartPosition === 'edg') {
        i = gameState[5] === humanSymbol ? 7 : 5
      } else i = 6
      break
    case 6:
      if (humanStartPosition === 'edg' || humanStartPosition === 'cen' ||
        numCorners === 2) {
        i = gameState.indexOf(' ')
      } else {
        i = gameState[2] === humanSymbol || gameState[6] === humanSymbol
          ? 0
          : 2
      }
      break
    default:
      i = gameState.indexOf(' ')
      break
  }
  gameState[i] = cpuSymbol
  this.gameTurn++
}

/**
 * Function that checks if the cpu can win at that the current turn
 * Returns true if the computer can win at that turn. Also change
 * `this.gameState` . Otherwise, returns false and doesn't do anything
 *  False otherwise
 * @returns {boolean}
 * @example
 * this.gameState = [
 *   ' ', ' ', ' ',
 *   ' ', ' ', ' ',
 *   ' ', ' ', ' '
 * ]
 * if (this.checkForWinMove()) console.log('The cpu won')
 * // Output: The cpu won
 */
function checkForWinMove () {
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
}

/**
 * Function that determines who'll be the first player between
 * the CPU or the human
 * If the random number is less or equal than 2 (75% prob) the
 * first player will be the CPU. Otherwise, the human will start.
 * @returns {boolean}
 */
function cpuFirstPlayer () {
  const num = Math.floor(Math.random() * 4)
  return num <= 2
}

module.exports = {
  gameTurn: 1,
  cpuSymbol: '',
  humanStartPosition: '',
  // Default gameState
  gameState: [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ],
  print,
  bestMove,
  cpuDefends,
  checkForWinMove,
  cpuFirstPlayer,
  gameWin
}
/* eslint-disable no-useless-return */
