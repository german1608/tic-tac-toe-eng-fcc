const test = require('tape')
const gameEngine = require('../index.js')

test(`gameWin(Array) should return true when the game is
  x | x | x
 ---+---+---
    |   |
 ---+---+---
    |   |
 `, function (t) {
  gameEngine.gameState = [
    'x', 'x', 'x',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
  o | o | o
 ---+---+---
    |   |
 ---+---+---
    |   |
 `, function (t) {
  gameEngine.gameState = [
    'o', 'o', 'o',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    |   |
 ---+---+---
  x | x | x 
 ---+---+---
    |   |
 `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'x', 'x', 'x',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    |   |
 ---+---+---
  o | o | o 
 ---+---+---
    |   |
 `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'o', 'o', 'o',
    ' ', ' ', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    |   |
 ---+---+---
    |   |
 ---+---+---
  x | x | x 
 `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'x', 'x', 'x'
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    |   |
 ---+---+---
    |   |
 ---+---+---
  o | o | o 
 `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'o', 'o', 'o'
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    |   | x
 ---+---+---
    | x |
 ---+---+---
  x |   |  
`, function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'x',
    ' ', 'x', ' ',
    'x', ' ', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    |   | o
 ---+---+---
    | o |
 ---+---+---
  o |   |  
`, function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', 'o', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
  x |   | 
 ---+---+---
    | x |
 ---+---+---
    |   | x 
`, function (t) {
  gameEngine.gameState = [
    'x', ' ', ' ',
    ' ', 'x', ' ',
    ' ', ' ', 'x'
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
  o |   |  
 ---+---+---
    | o |
 ---+---+---
    |   | o
`, function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    ' ', 'o', ' ',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
  x |   |  
 ---+---+---
  x |   |
 ---+---+---
  x |   |
 `, function (t) {
  gameEngine.gameState = [
    'x', ' ', ' ',
    'x', ' ', ' ',
    'x', ' ', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
  o |   |  
 ---+---+---
  o |   |
 ---+---+---
  o |   |
 `, function (t) {
  gameEngine.gameState = [
    'o', ' ', ' ',
    'o', ' ', ' ',
    'o', ' ', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    | x |
 ---+---+---
    | x |   
 ---+---+---
    | x |
 `, function (t) {
  gameEngine.gameState = [
    ' ', 'x', ' ',
    ' ', 'x', ' ',
    ' ', 'x', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    | o |
 ---+---+---
    | o |   
 ---+---+---
    | o |
 `, function (t) {
  gameEngine.gameState = [
    ' ', 'o', ' ',
    ' ', 'o', ' ',
    ' ', 'o', ' '
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    |   | x
 ---+---+---
    |   | x
 ---+---+---
    |   | x 
 `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'x',
    ' ', ' ', 'x',
    ' ', ' ', 'x'
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})

test(`gameWin(Array) should return true when the game is
    |   | o
 ---+---+---
    |   | o
 ---+---+---
    |   | o 
 `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'o',
    ' ', ' ', 'o',
    ' ', ' ', 'o'
  ]
  const bool = gameEngine.gameWin()
  t.equal(bool, true)
  t.end()
})
