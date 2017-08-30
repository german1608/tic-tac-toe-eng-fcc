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

  t.test('If the human played in an edge, cpu should play in some corner', st => {
    gameEngine.gameTurn = 2
    gameEngine.gameState = [
      ' ', ' ', ' ',
      ' ', ' ', 'o',
      ' ', ' ', ' '
    ]
    gameEngine.bestMove()
    let actual = gameEngine.gameState
    let expected = [
      ' ', ' ', ' ',
      ' ', ' ', 'o',
      ' ', ' ', 'x'
    ]
    st.same(actual, expected, 'The cpu played well')

    gameEngine.gameTurn = 2
    gameEngine.gameState = [
      ' ', ' ', ' ',
      'o', ' ', ' ',
      ' ', ' ', ' '
    ]
    gameEngine.bestMove()
    actual = gameEngine.gameState
    expected = [
      'x', ' ', ' ',
      'o', ' ', ' ',
      ' ', ' ', ' '
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
      'o', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' ', 'x'
    ]
    gameEngine.bestMove()
    actual = gameEngine.gameState
    expected = [
      'o', ' ', 'x',
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
  // If 1st turn was a corner
  gameEngine.humanStartPosition = 'cor'
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

  gameEngine.gameTurn = 4
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', 'x', ' ',
    ' ', 'o', ' '
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    'o', ' ', ' ',
    ' ', 'x', ' ',
    ' ', 'o', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')

  gameEngine.gameTurn = 4
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', 'x', ' ',
    ' ', 'o', ' '
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    ' ', ' ', 'o',
    ' ', 'x', ' ',
    'x', 'o', ' '
  ]
  t.same(actual, expected, 'The cpu played well')

  gameEngine.gameTurn = 4
  gameEngine.gameState = [
    ' ', 'o', ' ',
    ' ', 'x', ' ',
    'o', ' ', ' '
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    ' ', 'o', 'x',
    ' ', 'x', ' ',
    'o', ' ', ' '
  ]
  t.same(actual, expected, 'The cpu played well')

  // If 1st turn was an edge
  gameEngine.humanStartPosition = 'edg'
  gameEngine.gameTurn = 4
  gameEngine.gameState = [
    ' ', 'o', ' ',
    ' ', ' ', 'o',
    ' ', ' ', 'x'
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    ' ', 'o', ' ',
    ' ', 'x', 'o',
    ' ', ' ', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')

  // I don't have to worry about when the first player goes in the center
  gameEngine.humanStartPosition = 'cen'
  gameEngine.gameTurn = 4
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', 'o', ' ',
    ' ', ' ', 'x'
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    ' ', ' ', 'o',
    ' ', 'o', ' ',
    'x', ' ', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')

  t.end()
})

test('cpu plays at gameTurn #5', function (t) {
  // If 2st turn was an edge
  gameEngine.humanStartPosition = 'edg'
  gameEngine.gameTurn = 5
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', 'x', 'o',
    ' ', ' ', 'x'
  ]
  gameEngine.bestMove()
  let actual = gameEngine.gameState
  let expected = [
    'o', ' ', ' ',
    ' ', 'x', 'o',
    ' ', 'x', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')

  gameEngine.humanStartPosition = 'edg'
  gameEngine.gameTurn = 5
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', 'x', ' ',
    ' ', 'o', 'x'
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    'o', ' ', ' ',
    ' ', 'x', 'x',
    ' ', 'o', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')

  // If 2nd turn was in a corner
  gameEngine.humanStartPosition = 'cor'
  gameEngine.gameTurn = 5
  gameEngine.gameState = [
    'o', ' ', 'x',
    ' ', ' ', 'o',
    ' ', ' ', 'x'
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    'o', ' ', 'x',
    ' ', ' ', 'o',
    'x', ' ', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')

  gameEngine.humanStartPosition = 'cor'
  gameEngine.gameTurn = 5
  gameEngine.gameState = [
    'x', ' ', 'o',
    ' ', 'o', ' ',
    ' ', ' ', 'x'
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    'x', ' ', 'o',
    ' ', 'o', ' ',
    'x', ' ', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')

  // If 2nd turn was in the center
  gameEngine.humanStartPosition = 'cen'
  gameEngine.gameTurn = 5
  gameEngine.gameState = [
    'x', ' ', ' ',
    ' ', 'o', ' ',
    'o', ' ', 'x'
  ]
  gameEngine.bestMove()
  actual = gameEngine.gameState
  expected = [
    'x', ' ', 'x',
    ' ', 'o', ' ',
    'o', ' ', 'x'
  ]
  t.same(actual, expected, 'The cpu played well')

  t.end()
})

test('cpu plays at gameTurn #6', function (t) {
  // If the human started in a corner and played then in an edge
  t.test('If the human started in a corner and played then in an edge', (st) => {
    gameEngine.humanStartPosition = 'cor'
    gameEngine.gameTurn = 6
    gameEngine.gameState = [
      'o', ' ', ' ',
      ' ', 'x', 'o',
      ' ', 'o', 'x'
    ]
    gameEngine.bestMove()
    let actual = gameEngine.gameState
    let expected = [
      'o', ' ', 'x',
      ' ', 'x', 'o',
      ' ', 'o', 'x'
    ]
    st.same(actual, expected, 'The cpu played well')

    gameEngine.humanStartPosition = 'cor'
    gameEngine.gameTurn = 6
    gameEngine.gameState = [
      ' ', ' ', 'o',
      'o', 'x', ' ',
      'x', 'o', ' '
    ]
    gameEngine.bestMove()
    actual = gameEngine.gameState
    expected = [
      'x', ' ', 'o',
      'o', 'x', ' ',
      'x', 'o', ' '
    ]
    st.same(actual, expected, 'The cpu played well')

    gameEngine.humanStartPosition = 'cor'
    gameEngine.gameTurn = 6
    gameEngine.gameState = [
      ' ', 'o', 'x',
      ' ', 'x', 'o',
      'o', ' ', ' '
    ]
    gameEngine.bestMove()
    actual = gameEngine.gameState
    expected = [
      'x', 'o', 'x',
      ' ', 'x', 'o',
      'o', ' ', ' '
    ]
    st.same(actual, expected, 'The cpu played well')

    gameEngine.humanStartPosition = 'cor'
    gameEngine.gameTurn = 6
    gameEngine.gameState = [
      'x', 'o', ' ',
      'o', 'x', ' ',
      ' ', ' ', 'o'
    ]
    gameEngine.bestMove()
    actual = gameEngine.gameState
    expected = [
      'x', 'o', 'x',
      'o', 'x', ' ',
      ' ', ' ', 'o'
    ]
    st.same(actual, expected, 'The cpu played well')
    st.end()
  })

  // If the human started in a corner and played then in a corner
  t.test('If the human started in a corner and played then in an edge', (st) => {
    // Play in any blank space you want (by default on the first to avoid randomness)
    gameEngine.humanStartPosition = 'cor'
    gameEngine.gameTurn = 6
    gameEngine.gameState = [
      'o', 'x', 'o',
      ' ', 'x', ' ',
      ' ', 'o', ' '
    ]
    gameEngine.bestMove()
    let actual = gameEngine.gameState
    let expected = [
      'o', 'x', 'o',
      'x', 'x', ' ',
      ' ', 'o', ' '
    ]
    st.same(actual, expected, 'The cpu played well')

    st.end()
  })

  // If the human started in an edge
  t.test('If the human started in an edge and made a random play', function (st) {
    gameEngine.humanStartPosition = 'edg'
    gameEngine.gameTurn = 6
    gameEngine.gameState = [
      'o', ' ', ' ',
      ' ', 'x', 'o',
      ' ', 'o', 'x'
    ]
    gameEngine.bestMove()
    let actual = gameEngine.gameState
    let expected = [
      'o', 'x', ' ',
      ' ', 'x', 'o',
      ' ', 'o', 'x'
    ]
    st.same(actual, expected, 'The cpu should play in any blank space')

    gameEngine.humanStartPosition = 'edg'
    gameEngine.gameTurn = 6
    gameEngine.gameState = [
      'o', ' ', ' ',
      'x', 'o', 'o',
      ' ', ' ', 'x'
    ]
    gameEngine.bestMove()
    actual = gameEngine.gameState
    expected = [
      'o', 'x', ' ',
      'x', 'o', 'o',
      ' ', ' ', 'x'
    ]
    st.same(actual, expected, 'The cpu should play in any blank space')

    st.end()
  })
  t.end()
})

// There's no need to test gameTurn #7

test('cpu plays at gameTurn #8', function (t) {
  gameEngine.cpuSymbol = 'x'
  gameEngine.gameTurn = 8
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  gameEngine.bestMove()
  const actual = gameEngine.gameState
  const expected = []
  t.same(actual, expected)
})
