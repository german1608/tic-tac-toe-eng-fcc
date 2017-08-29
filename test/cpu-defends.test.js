const test = require('tape')
const gameEngine = require('../index')

// All of this assuming that gameEngine.cpuSymbol = 'x'
gameEngine.cpuSymbol = 'x'

/****************************************************/
/** ** ** ** ** ** ** ** ROWS ** ** ** ** ** ** ** **/
/****************************************************/

// First Row

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    'o', 'o', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, `The cpu defended itself:`)
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    'o', ' ', 'o',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', 'o', 'o',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

// Second Row

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'o', 'o', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'o', ' ', 'o',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'o', 'o',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

// Third Row

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'o', 'o', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'o', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', 'o', 'o'
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

/****************************************************/
/** ** ** ** ** ** ** ** COLS ** ** ** ** ** ** ** **/
/****************************************************/

// First Col

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    'o', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', ' ', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'o', ' ', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

// Second Col

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', 'o', ' ',
    ' ', 'o', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', 'o', ' ',
    ' ', ' ', ' ',
    ' ', 'o', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'o', ' ',
    ' ', 'o', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

// Third Col

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', ' ', 'o',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', ' ', ' ',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', 'o',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

/****************************************************/
/** ** ** ** ** ** ** ** DIAG ** ** ** ** ** ** ** **/
/****************************************************/

// Main Diag

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', 'o', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'o', ' ',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

// Secondary Diag

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'o', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', ' ', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

test('The cpu should defend itself of this:', function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', 'o', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()

  // Checks that it defended itself
  t.ok(bool, 'The cpu defended itself')
  t.end()
})

/****************************************************/
/** ** ** ** ** ** ** ** RAND ** ** ** ** ** ** ** **/
/****************************************************/

function randomBoard () {
  /*
   * Description:
   *  Function that generate two circles anywhere in the table. Both circles
   *  can be at same spot.
   *
   * Parameters:
   *  none
   *
   * Return:
   *  If the random game generated is a win for the human, returns true. False
   *  otherwise
   */
  const rand1 = Math.floor(Math.random() * 9)
  const rand2 = Math.floor(Math.random() * 9)
  gameEngine.gameState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  gameEngine.gameState[rand1] = 'o'
  gameEngine.gameState[rand2] = 'o'
  gameEngine.cpuSymbol = 'o'
  if (gameEngine.checkForWinMove()) {
    gameEngine.gameState = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    gameEngine.gameState[rand1] = 'o'
    gameEngine.gameState[rand2] = 'o'
    gameEngine.cpuSymbol = 'x'
    return true
  }
  gameEngine.cpuSymbol = 'x'
  return false
}

const numTest = 10
for (let i = 0; i < numTest; i++) {
  test(`The cpu should defend this?`, function (t) {
    let humanWins = randomBoard()
    console.log(gameEngine.print())
    const cpuDefends = gameEngine.cpuDefends()
    if (humanWins) {
      console.log('ANS: It should')
      t.equal(cpuDefends, humanWins, 'The cpu defended itself')
    } else {
      console.log('It\'s not necessary')
      t.equal(cpuDefends, humanWins, 'The cpu did anything itself')
    }
    t.end()
  })
}
