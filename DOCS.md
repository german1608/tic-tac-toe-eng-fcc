## Functions

<dl>
<dt><a href="#print">print()</a> ⇒ <code>string</code></dt>
<dd><p>Constructs and string representing <code>this.gameState</code></p>
</dd>
<dt><a href="#gameWin">gameWin()</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that takes an array representing a tic-tac-toe
game and determines if it&#39;s a winning game.
Returns true if it&#39;s a winning game, false otherwise.</p>
</dd>
<dt><a href="#cpuDefends">cpuDefends()</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that determines if the cpu should defend itself. In that case,
it makes the move changing this.gameState</p>
</dd>
<dt><a href="#bestMove">bestMove()</a> ⇒ <code>undefined</code></dt>
<dd><p>Function that determines the best move for the cpu.
Changes <code>this.gameState</code>. This method doesn&#39;t compute a move by analizing
<code>this.gameState</code>. It is following an strategy. If you change the gameState
it may not work properly</p>
</dd>
<dt><a href="#checkForWinMove">checkForWinMove()</a> ⇒ <code>boolean</code></dt>
<dd><p>Function that checks if the cpu can win at that the current turn
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
</dl>

<a name="print"></a>

## print() ⇒ <code>string</code>
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
