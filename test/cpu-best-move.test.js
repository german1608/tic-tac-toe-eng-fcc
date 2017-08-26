const test = require('tape')
const gameEngine = require('../index')

// Assuming that the cpu is 'x'

test('cpu plays at gameTurn #1', function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 1
  gameEngine.bestMove()
  const actual = gameEngine.gameState
  const expected = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', 'x'
  ]
  t.same(actual, expected, 'The cpu played in a corner')
  console.log(gameEngine.print())
  t.end()
})

test('cpu plays at gameTurn #2', function (t) {
  t.comment('Here begin some generic cases for when the human starts')

  t.test('If the human played in a corner, cpu should play in the center', st => {
    gameEngine.gameTurn = 2
    gameEngine.gameState = [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', 'o'
    ]
    gameEngine.bestMove()
    const actual = gameEngine.gameState
    const expected = [
      ' ', ' ', ' ',
      ' ', 'x', ' ',
      ' ', ' ', 'o'
    ]
    st.same(actual, expected, 'The cpu played well')
    console.log(gameEngine.print())
    console.log('From this move, the game will end in a draw (if both play well).')
    st.end()
  })

  t.test('If the human played in the center, cpu should play in the', st => {
    gameEngine.gameTurn = 2
    gameEngine.gameState = [
      ' ', ' ', ' ',
      ' ', 'o', ' ',
      ' ', ' ', ' '
    ]
    gameEngine.bestMove()
    const actual = gameEngine.gameState
    const expected = [
      ' ', ' ', ' ',
      ' ', 'o', ' ',
      ' ', ' ', ' '
    ]
    st.same(actual, expected, 'The cpu played well')
    console.log(gameEngine.print())
    st.end()
  })
  t.end()
})
