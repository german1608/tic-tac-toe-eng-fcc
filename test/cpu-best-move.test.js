const test = require('tape')
const gameEngine = require('../index')

// Assuming that the cpu is 'x'
gameEngine.cpuSymbol = 'x'

test('cpu plays at gameTurn #1', function (t) {
  gameEngine.gameTurn = 1
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  gameEngine.bestMove()
  const actual = gameEngine.gameState
  const expected = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', 'x'
  ]
  t.same(actual, expected, 'The cpu played in a corner')
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
    st.end()
  })

  t.test('If the human played in the center, cpu should play in the corner', st => {
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
      ' ', ' ', 'x'
    ]
    st.same(actual, expected, 'The cpu played well')
    st.end()
  })

  t.test('If the human played in an edge, cpu should play in the center', st => {
    gameEngine.gameTurn = 2
    gameEngine.gameState = [
      ' ', ' ', ' ',
      ' ', ' ', 'o',
      ' ', ' ', ' '
    ]
    gameEngine.bestMove()
    const actual = gameEngine.gameState
    const expected = [
      ' ', ' ', ' ',
      ' ', ' ', 'o',
      ' ', ' ', 'x'
    ]
    st.same(actual, expected, 'The cpu played well')
    st.end()
  })
  t.end()
})

test('cpu plays at gameTurn #3', function (t) {
  t.test(`If the human played in an edge, \
cpu should play in the center`
  , function (st) {
    gameEngine.gameTurn = 3
    gameEngine.gameState = [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', 'o', 'x'
    ]
    gameEngine.bestMove()
    let actual = gameEngine.gameState
    let expected = [
      ' ', ' ', ' ',
      ' ', 'x', ' ',
      ' ', 'o', 'x'
    ]
    st.same(actual, expected, 'The cpu made the best play')
    st.end()
  })

  t.test(`If the human played in corner, \
cpu should play in any free corner`
  , function (st) {
    gameEngine.gameTurn = 3
    gameEngine.gameState = [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      'o', ' ', 'x'
    ]
    gameEngine.bestMove()
    let actual = gameEngine.gameState
    let expected = [
      'x', ' ', ' ',
      ' ', ' ', ' ',
      'o', ' ', 'x'
    ]
    st.same(actual, expected, 'The cpu made the best play')

    gameEngine.gameTurn = 3
    gameEngine.gameState = [
      ' ', ' ', 'o',
      ' ', ' ', ' ',
      ' ', ' ', 'x'
    ]
    gameEngine.bestMove()
    actual = gameEngine.gameState
    expected = [
      'x', ' ', 'o',
      ' ', ' ', ' ',
      ' ', ' ', 'x'
    ]
    st.same(actual, expected, 'The cpu made the best play')
    st.end()
  })

  t.test(`If the human played in the center, \
cpu should play on the opposite corner`
  , function (st) {
    gameEngine.gameTurn = 3
    gameEngine.gameState = [
      ' ', ' ', ' ',
      ' ', 'o', ' ',
      ' ', ' ', 'x'
    ]
    gameEngine.bestMove()
    let actual = gameEngine.gameState
    let expected = [
      'x', ' ', ' ',
      ' ', 'o', ' ',
      ' ', ' ', 'x'
    ]
    st.same(actual, expected, 'The cpu made the best play')
    st.end()
  })
})

test('cpu plays at gameTurn #4', function (t) {
  // If a corner
  gameEngine.gameTurn = 4
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', 'x', ' ',
    ' ', ' ', 'o'
  ]
  gameEngine.bestMove()
  let actual = gameEngine.gameState
  let expected = [
    'o', 'x', ' ',
    ' ', 'x', ' ',
    ' ', ' ', 'o'
  ]
  t.same(actual, expected, 'The cpu played well')

  gameEngine.gameTurn = 4
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'o', 'x', ' ',
    ' ', ' ', 'o'
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    'x', ' ', ' ',
    'o', 'x', ' ',
    ' ', ' ', 'o'
  ]
  t.same(actual, expected, 'The cpu played well')

  // If an edge
  gameEngine.gameTurn = 4
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', 'o',
    ' ', ' ', 'x'
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    ' ', ' ', ' ',
    ' ', ' ', 'o',
    ' ', ' ', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')
  t.end()
})
