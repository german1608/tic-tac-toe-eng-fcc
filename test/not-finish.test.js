const test = require('tape')
const gameEngine = require('../index')

// In all cases, gameEngine.gameTurn refers to the turn AFTER the play
test('isFinish() should return true when the game is a draw', function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 10
  gameEngine.gameState = [
    'x', 'x', 'o',
    'o', 'o', 'x',
    'x', 'o', 'x'
  ]
  t.ok(gameEngine.isFinish(), 'The game is finished')
  t.end()
})

test("isFinish() should return false when the game isn't finished", function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 9
  gameEngine.gameState = [
    ' ', 'o', 'x',
    'x', 'o', 'o',
    'o', 'x', 'x'
  ]
  t.notOk(gameEngine.isFinish(), 'The game isn\'t finished')
  t.end()
})

test('isFinish() should return true when someone wins', function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 8
  gameEngine.gameState = [
    'x', ' ', ' ',
    'o', 'x', 'o',
    'x', 'o', 'x'
  ]
  t.ok(gameEngine.isFinish(), 'The game is finished')

  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 10
  gameEngine.gameState = [
    'x', 'x', 'x',
    'o', 'o', 'x',
    'x', 'o', 'o'
  ]
  t.ok(gameEngine.isFinish(), 'The game is not a draw')
  t.end()
})
