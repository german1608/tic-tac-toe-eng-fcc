const test = require('tape')
const gameEngine = require('../index')

gameEngine.cpuSymbol = 'x'

test('cpu plays at gameTurn #1', function (t) {
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
  /*
test('cpu plays at gameTurn #2', function (t) {
  t.test('Human plays at the center', function (st) {
    gameEngine.gameTurn = 2
    const actual = gameEngine.gameState
    const expected = [
      ' ', ' ', ' ',
      ' ', 'o', ' ',
      ' ', ' ', ' '
    ]
    st.end()
  })
  t.test('hola2', function (st) {
    st.ok(true, 'activooasldfjaldsfo')
    st.end()
  })
  t.end()
})
*/

test('cpu plays at gameTurn #3', function (t) {

  t.test('The human plays at the center', function (t) {
    gameEngine.gameTurn = 3
    gameEngine.bestMove()


