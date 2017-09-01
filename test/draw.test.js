const test = require('tape')
const gameEngine = require('../index')

// In all cases, gameEngine.gameTurn refers to the turn AFTER the play
test('draw() should return true when the game is a draw', function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 10
  gameEngine.gameState = [
    'x', 'x', 'o',
    'o', 'o', 'x',
    'x', 'o', 'x'
  ]
  t.ok(gameEngine.draw(), 'The game is a draw')
  t.end()
})

test("draw() should return false when the game isn't finished", function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 8
  gameEngine.gameState = [
    ' ', 'o', 'x',
    'x', 'o', 'o',
    'o', 'x', 'x'
  ]
  t.notOk(gameEngine.draw(), 'The game is not a draw')
  t.end()
})

test('draw() should return false when someone wins', function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 8
  gameEngine.gameState = [
    'x', ' ', ' ',
    'o', 'x', 'o',
    'x', 'o', 'x'
  ]
  t.notOk(gameEngine.draw(), 'The game is not a draw')

  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 10
  gameEngine.gameState = [
    'x', 'x', 'x',
    'o', 'o', 'x',
    'x', 'o', 'o'
  ]
  t.notOk(gameEngine.draw(), 'The game is not a draw')
  t.end()
})
