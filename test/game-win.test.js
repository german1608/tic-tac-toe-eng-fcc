const test = require('tape')
const {gameWin} = require('../index.js')

test(`gameWin(Array) should return true when the game is
  x | x | x
 ---+---+---
    |   |
 ---+---+---
    |   |
 `, function (t) {
  const bool = gameWin([
    'x', 'x', 'x',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ])
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
  const bool = gameWin([
    'o', 'o', 'o',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ])
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
  const bool = gameWin([
    ' ', ' ', ' ',
    'x', 'x', 'x',
    ' ', ' ', ' '
  ])
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
  const bool = gameWin([
    ' ', ' ', ' ',
    'o', 'o', 'o',
    ' ', ' ', ' '
  ])
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
  const bool = gameWin([
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'x', 'x', 'x'
  ])
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
  const bool = gameWin([
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'o', 'o', 'o'
  ])
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
  const bool = gameWin([
    ' ', ' ', 'x',
    ' ', 'x', ' ',
    'x', ' ', ' '
  ])
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
  const bool = gameWin([
    ' ', ' ', 'o',
    ' ', 'o', ' ',
    'o', ' ', ' '
  ])
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
  const bool = gameWin([
    'x', ' ', ' ',
    ' ', 'x', ' ',
    ' ', ' ', 'x'
  ])
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
  const bool = gameWin([
    'o', ' ', ' ',
    ' ', 'o', ' ',
    ' ', ' ', 'o'
  ])
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
  const bool = gameWin([
    'x', ' ', ' ',
    'x', ' ', ' ',
    'x', ' ', ' '
  ])
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
  const bool = gameWin([
    'o', ' ', ' ',
    'o', ' ', ' ',
    'o', ' ', ' '
  ])
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
  const bool = gameWin([
    ' ', 'x', ' ',
    ' ', 'x', ' ',
    ' ', 'x', ' '
  ])
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
  const bool = gameWin([
    ' ', 'o', ' ',
    ' ', 'o', ' ',
    ' ', 'o', ' '
  ])
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
  const bool = gameWin([
    ' ', ' ', 'x',
    ' ', ' ', 'x',
    ' ', ' ', 'x'
  ])
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
  const bool = gameWin([
    ' ', ' ', 'o',
    ' ', ' ', 'o',
    ' ', ' ', 'o'
  ])
  t.equal(bool, true)
  t.end()
})
