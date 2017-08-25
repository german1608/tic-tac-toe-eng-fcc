const test = require('tape')
const gameEngine = require('../index')

// All of this assuming that gameEngine.cpuSymbol = 'x'
gameEngine.cpuSymbol = 'x'

/****************************************************/
/** ** ** ** ** ** ** ** ROWS ** ** ** ** ** ** ** **/
/****************************************************/

// First Row

test(`
             o | o |                                  o | o | x 
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    |   |   
            ---+---+---                              ---+---+---
               |   |                                    |   |   `,
function (t) {
  gameEngine.gameState = [
    'o', 'o', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'oox      '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
             o |   | o                                o | x | o 
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    |   |   
            ---+---+---                              ---+---+---
               |   |                                    |   |   `,
function (t) {
  gameEngine.gameState = [
    'o', ' ', 'o',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'oxo      '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               | o | o                                x | o | o 
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    |   |   
            ---+---+---                              ---+---+---
               |   |                                    |   |   `,
function (t) {
  gameEngine.gameState = [
    ' ', 'o', 'o',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'xoo      '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

// Second Row

test(`
               |   |                                    |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(  o | o |    ) should change gameState to  o | o | x 
            ---+---+---                              ---+---+---
               |   |                                    |   |   `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'o', 'o', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '   oox   '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   |                                    |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(  o |   | o  ) should change gameState to  o | x | o 
            ---+---+---                              ---+---+---
               |   |                                    |   |   `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'o', ' ', 'o',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '   oxo   '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   |                                    |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(    | o | o  ) should change gameState to  x | o | o 
            ---+---+---                              ---+---+---
               |   |                                    |   |   `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'o', 'o',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '   xoo   '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

// Third Row

test(`
               |   |                                    |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    |   |   
            ---+---+---                              ---+---+---
             o | o |                                  o | o | x `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'o', 'o', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '      oox'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   |                                    |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    |   |   
            ---+---+---                              ---+---+---
             o |   | o                                o | x | o `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'o', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '      oxo'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   |                                    |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    |   |   
            ---+---+---                              ---+---+---
               | o | o                                x | o | o `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', 'o', 'o'
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '      xoo'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

/****************************************************/
/** ** ** ** ** ** ** ** COLS ** ** ** ** ** ** ** **/
/****************************************************/

// First Col

test(`
             o |   |                                  o |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(  o |   |    ) should change gameState to  o |   |   
            ---+---+---                              ---+---+---
               |   |                                  x |   |   `,
function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    'o', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'o  o  x  '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
             o |   |                                  o |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to  x |   |   
            ---+---+---                              ---+---+---
             o |   |                                  o |   |   `,
function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', ' ', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'o  x  o  '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   |                                  x |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(  o |   |    ) should change gameState to  o |   |   
            ---+---+---                              ---+---+---
             o |   |                                  o |   |   `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'o', ' ', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'x  o  o  '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

// Second Col

test(`
               | o |                                    | o |   
            ---+---+---                              ---+---+--- 
cpuDefends(    | o |    ) should change gameState to    | o |   
            ---+---+---                              ---+---+---
               |   |                                    | x |   `,
function (t) {
  gameEngine.gameState = [
    ' ', 'o', ' ',
    ' ', 'o', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = ' o  o  x '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               | o |                                    | o |   
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    | x |   
            ---+---+---                              ---+---+---
               | o |                                    | o |   `,
function (t) {
  gameEngine.gameState = [
    ' ', 'o', ' ',
    ' ', ' ', ' ',
    ' ', 'o', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = ' o  x  o '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   |                                    | x |   
            ---+---+---                              ---+---+--- 
cpuDefends(    | o |    ) should change gameState to    | o |   
            ---+---+---                              ---+---+---
               | o |                                    | o |   `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'o', ' ',
    ' ', 'o', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = ' x  o  o '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

// Third Col

test(`
               |   | o                                  |   | o 
            ---+---+---                              ---+---+--- 
cpuDefends(    |   | o  ) should change gameState to    |   | o 
            ---+---+---                              ---+---+---
               |   |                                    |   | x `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', ' ', 'o',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '  o  o  x'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   | o                                  |   | o 
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    |   | x 
            ---+---+---                              ---+---+---
               |   | o                                  |   | o `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', ' ', ' ',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '  o  x  o'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   |                                    |   | x 
            ---+---+---                              ---+---+--- 
cpuDefends(    |   | o  ) should change gameState to    |   | o 
            ---+---+---                              ---+---+---
               |   | o                                  |   | o `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', 'o',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '  x  o  o'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

/****************************************************/
/** ** ** ** ** ** ** ** DIAG ** ** ** ** ** ** ** **/
/****************************************************/

// Main Diag

test(`
             o |   |                                  o |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(    | o |    ) should change gameState to    | o |   
            ---+---+---                              ---+---+---
               |   |                                    |   | x `,
function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', 'o', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'o   o   x'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
             o |   |                                  o |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    | x |   
            ---+---+---                              ---+---+---
               |   | o                                  |   | o `,
function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'o   x   o'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   |                                  x |   |   
            ---+---+---                              ---+---+--- 
cpuDefends(    | o |    ) should change gameState to    | o |   
            ---+---+---                              ---+---+---
               |   | o                                  |   | o `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'o', ' ',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = 'x   o   o'

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

// Secondary Diag

test(`
               |   |                                    |   | x 
            ---+---+---                              ---+---+--- 
cpuDefends(    | o |    ) should change gameState to    | o |   
            ---+---+---                              ---+---+---
             o |   |                                  o |   |   `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'o', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '  x o o  '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   | o                                  |   | o 
            ---+---+---                              ---+---+--- 
cpuDefends(    |   |    ) should change gameState to    | x |   
            ---+---+---                              ---+---+---
             o |   |                                  o |   |   `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', ' ', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '  o x o  '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
  t.end()
})

test(`
               |   | o                                  |   | o 
            ---+---+---                              ---+---+--- 
cpuDefends(    | o |    ) should change gameState to    | o |   
            ---+---+---                              ---+---+---
               |   |                                  x |   |   `,
function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', 'o', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.cpuDefends()
  const gameState = gameEngine.gameState.join('')
  const expected = '  o o x  '

  // Checks that the gameState is what we expect
  t.deepEqual(gameState, expected, 'The cpu made the best play')
  console.log(gameEngine.print())

  // Checks that it defended itself
  t.deepEqual(bool, true, 'The cpu defended itself')
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
      console.log(gameEngine.print())
    } else {
      console.log('It\'s not necessary')
      t.equal(cpuDefends, humanWins, 'The cpu did anything itself')
      console.log(gameEngine.print())
    }
    t.end()
  })
}
