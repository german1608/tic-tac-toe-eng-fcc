const gameEngine = require('../index')
const test = require('tape')

test('It should return "none"', function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.whoWon(), 'none', 'Nobody won')
  t.end()
})

test('It should return "human"', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'o', 'o', 'o'
  ]
  t.equal(gameEngine.whoWon(), 'human', 'The human won')
  t.end()
})

test('It should return "cpu"', function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'x', 'x', 'x'
  ]
  t.equal(gameEngine.whoWon(), 'cpu', 'The human won')
  t.end()
})
