const test = require('tape')
const gameEngine = require('../index')

// Always asumming that the current turn is the cpu and it' symbol it's 'x'
gameEngine.cpuSymbol = 'x'

/* ROWS */
test(`checkForWinMove() returns true at this case
 x | x |
---+---+---
   |   |
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    'x', 'x', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
 x |   | x
---+---+---
   |   |
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    'x', ' ', 'x',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   | x | x
---+---+---
   |   |
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', 'x', 'x',
    ' ', ' ', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
 x | x |
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'x', 'x', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
 x |   | x
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'x', ' ', 'x',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
   | x | x
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'x', 'x',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
   |   |
---+---+---
 x | x |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'x', 'x', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
   |   |  
---+---+---
 x |   | x `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    'x', ' ', 'x'
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
   |   |  
---+---+---
   | x | x `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', 'x', 'x'
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

/* COLUMNS */
test(`checkForWinMove() returns true at this case
 x |   |
---+---+---
 x |   |
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    'x', ' ', ' ',
    'x', ' ', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
 x |   |  
---+---+---
   |   |
---+---+---
 x |   |   `, function (t) {
  gameEngine.gameState = [
    'x', ' ', ' ',
    ' ', ' ', ' ',
    'x', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |  
---+---+---
 x |   |
---+---+---
 x |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    'x', ' ', ' ',
    'x', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   | x |
---+---+---
   | x |
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', 'x', ' ',
    ' ', 'x', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   | x |
---+---+---
   |   |  
---+---+---
   | x |   `, function (t) {
  gameEngine.gameState = [
    ' ', 'x', ' ',
    ' ', ' ', ' ',
    ' ', 'x', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
   | x |  
---+---+---
   | x |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'x', ' ',
    ' ', 'x', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   | x
---+---+---
   |   | x
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'x',
    ' ', ' ', 'x',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   | x
---+---+---
   |   |  
---+---+---
   |   | x `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'x',
    ' ', ' ', ' ',
    ' ', ' ', 'x'
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
   |   | x
---+---+---
   |   | x `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', ' ', 'x',
    ' ', ' ', 'x'
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

/* DIAGONALS */

test(`checkForWinMove() returns true at this case
 x |   |  
---+---+---
   | x |  
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    'x', ' ', ' ',
    ' ', 'x', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
 x |   |
---+---+---
   |   |  
---+---+---
   |   | x `, function (t) {
  gameEngine.gameState = [
    'x', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', 'x'
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |  
---+---+---
   | x |  
---+---+---
   |   | x `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'x', ' ',
    ' ', ' ', 'x'
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   | x
---+---+---
   | x |  
---+---+---
   |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'x',
    ' ', 'x', ' ',
    ' ', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   | x
---+---+---
   |   |  
---+---+---
 x |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', 'x',
    ' ', ' ', ' ',
    'x', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns true at this case
   |   |
---+---+---
   | x |  
---+---+---
 x |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', ' ', ' ',
    ' ', 'x', ' ',
    'x', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), true)
  t.end()
})

test(`checkForWinMove() returns false at this case
   | x |
---+---+---
   |   |  
---+---+---
 x |   |   `, function (t) {
  gameEngine.gameState = [
    ' ', 'x', ' ',
    ' ', ' ', ' ',
    'x', ' ', ' '
  ]
  t.equal(gameEngine.checkForWinMove(), false)
  t.end()
})
