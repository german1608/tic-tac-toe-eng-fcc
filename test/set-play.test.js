const gameEngine = require('../index')
const test = require('tape')

test('setPlay() should return true if the position is empty', function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  t.ok(gameEngine.setPlay(1))
  t.ok(gameEngine.gameState[1] !== ' ')
  t.notOk(gameEngine.setPlay(1))
  t.notOk(gameEngine.setPlay(-1))
  t.notOk(gameEngine.setPlay(9))
  t.notOk(gameEngine.setPlay(NaN))
  t.notOk(gameEngine.setPlay(1.1))
  t.notOk(gameEngine.setPlay(2.1))
  t.notOk(gameEngine.setPlay(undefined))
  t.notOk(gameEngine.setPlay(null))
  t.notOk(gameEngine.setPlay([]))
  t.notOk(gameEngine.setPlay({}))
  t.notOk(gameEngine.setPlay(' '))
  t.notOk(gameEngine.setPlay('asdfasfds '))
  t.end()
})
