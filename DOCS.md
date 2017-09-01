## Functions

<dl>
<dt><a href="#print">print()</a> ⇒ <code>string</code></dt>
<dd><p><em><strong>(For dev purposes)</strong></em></p>
<p>Constructs and string representing <code>this.gameState</code></p>
</dd>
<dt><a href="#gameWin">gameWin()</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that takes an array representing a tic-tac-toe
game and determines if it&#39;s a winning game.
Returns true if it&#39;s a winning game, false otherwise.</p>
</dd>
<dt><a href="#cpuDefends">cpuDefends()</a> ⇒ <code>boolean</code></dt>
<dd><p><em><strong>(For dev purposes)</strong></em></p>
<p>Function that determines if the cpu should defend itself. In that case,
it makes the move changing this.gameState</p>
</dd>
<dt><a href="#bestMove">bestMove()</a> ⇒ <code>undefined</code></dt>
<dd><p>Function that determines the best move for the cpu.
Changes <code>this.gameState</code>. This method doesn&#39;t compute a move by analizing
<code>this.gameState</code>. It is following an strategy. If you change the gameState
it may not work properly</p>
</dd>
<dt><a href="#checkForWinMove">checkForWinMove()</a> ⇒ <code>boolean</code></dt>
<dd><p><em><strong>(For dev purposes)</strong></em></p>
<p>Function that checks if the cpu can win at that the current turn
Returns true if the computer can win at that turn. Also change
<code>this.gameState</code> . Otherwise, returns false and doesn&#39;t do anything
 False otherwise</p>
</dd>
<dt><a href="#cpuFirstPlayer">cpuFirstPlayer()</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that determines who&#39;ll be the first player between
the CPU or the human
If the random number is less or equal than 2 (75% prob) the
first player will be the CPU. Otherwise, the human will start.</p>
</dd>
<dt><a href="#setPlay">setPlay(idx)</a> ⇒ <code>undefined</code></dt>
<dd><p>Filler for the gameBoard. The positioning of the gameboard is as follows</p>
<pre><code> 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
</code></pre><p>If the idx is incorrect or if the position is taken, returns false.
Otherwise, returns true and set the position</p>
</dd>
<dt><a href="#isFinish">isFinish()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if the game is a draw or not.</p>
</dd>
<dt><a href="#cpuWin">cpuWin(g, c)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determines if the cpu wins</p>
</dd>
<dt><a href="#whoWon">whoWon()</a> ⇒ <code>string</code></dt>
<dd><p>Determines who won</p>
</dd>
</dl>

<a name="print"></a>

## print() ⇒ <code>string</code>
_**(For dev purposes)**_

Constructs and string representing `this.gameState`

**Kind**: global function  
**Example**  
```js
this.gameState = [
 'x', ' ', ' ',
 ' ', ' ', 'x',
 ' ', 'o', ' '
]
console.log(this.print())
/* Output:
   x |   |
  ---+---+---
     |   | x
  ---+---+---
     | o |
*\/
```
<a name="gameWin"></a>

## gameWin() ⇒ <code>boolean</code>
Function that takes an array representing a tic-tac-toe
game and determines if it's a winning game.
Returns true if it's a winning game, false otherwise.

**Kind**: global function  
**Example**  
```js
this.gameState = [
  ' ', ' ', 'x',
  ' ', 'x', ' ',
  'x', ' ', ' '
]
if (this.gameWin) console.log('I won!')
```
<a name="cpuDefends"></a>

## cpuDefends() ⇒ <code>boolean</code>
_**(For dev purposes)**_

Function that determines if the cpu should defend itself. In that case,
it makes the move changing this.gameState

**Kind**: global function  
**Returns**: <code>boolean</code> - Boolean representing if the cpu should defend  
**Example**  
```js
// Assuming the cpu is 'x'
this.gameState = [
  ' ', 'o', 'x',
  ' ', ' ', ' ',
  ' ', 'o', ' '
]
if (this.cpuDefends()) console.log('The cpu defended itself')
// Output: The cpu defended itself
```
<a name="bestMove"></a>

## bestMove() ⇒ <code>undefined</code>
Function that determines the best move for the cpu.
Changes `this.gameState`. This method doesn't compute a move by analizing
`this.gameState`. It is following an strategy. If you change the gameState
it may not work properly

**Kind**: global function  
**Returns**: <code>undefined</code> - Changes this.gameState  
**Example**  
```js
// See test/cpu-best-move.test.js
```
<a name="checkForWinMove"></a>

## checkForWinMove() ⇒ <code>boolean</code>
_**(For dev purposes)**_

Function that checks if the cpu can win at that the current turn
Returns true if the computer can win at that turn. Also change
`this.gameState` . Otherwise, returns false and doesn't do anything
 False otherwise

**Kind**: global function  
**Example**  
```js
this.gameState = [
  ' ', ' ', ' ',
  ' ', ' ', ' ',
  ' ', ' ', ' '
]
if (this.checkForWinMove()) console.log('The cpu won')
// Output: The cpu won
```
<a name="cpuFirstPlayer"></a>

## cpuFirstPlayer() ⇒ <code>boolean</code>
Function that determines who'll be the first player between
the CPU or the human
If the random number is less or equal than 2 (75% prob) the
first player will be the CPU. Otherwise, the human will start.

**Kind**: global function  
<a name="setPlay"></a>

## setPlay(idx) ⇒ <code>undefined</code>
Filler for the gameBoard. The positioning of the gameboard is as follows
```
 0 | 1 | 2
---+---+---
 3 | 4 | 5
---+---+---
 6 | 7 | 8
```
If the idx is incorrect or if the position is taken, returns false.
Otherwise, returns true and set the position

**Kind**: global function  
**Returns**: <code>undefined</code> - Changes `this.gameState`  

| Param | Type | Description |
| --- | --- | --- |
| idx | <code>number</code> | Index where the human played |

**Example**  
```js
gameEngine.gameState = [
  ' ', ' ', ' ',
  ' ', ' ', ' ',
  ' ', ' ', ' '
]
if (gameEngine.setPlay(1)) {
  console.log(gameEngine.print())
}
/* Output:
     | o |
  ---+---+---
     |   |
  ---+---+---
     |   |
*\/

if (gameEngine.set(1)) {
  console.log('This wont execute')
}
// Output: undefined
```
<a name="isFinish"></a>

## isFinish() ⇒ <code>boolean</code>
Determines if the game is a draw or not.

**Kind**: global function  
**Returns**: <code>boolean</code> - Represents if the game is a draw.  
<a name="cpuWin"></a>

## cpuWin(g, c) ⇒ <code>boolean</code>
Determines if the cpu wins

**Kind**: global function  
**Returns**: <code>boolean</code> - True if the cpu wins, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| g | <code>array</code> | An array that represents the gameState |
| c | <code>string</code> | A character that represents what is the symbol of cpu |

<a name="whoWon"></a>

## whoWon() ⇒ <code>string</code>
Determines who won

**Kind**: global function  
**Returns**: <code>string</code> - 'cpu', 'human' or 'none'  
