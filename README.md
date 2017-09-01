# tic-tac-toe-eng-fcc
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) 
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](LICENSE)
![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)  

A tic-tac-toe cpu engine for a freeCodeCamp project

* [Installation](#installation)
* [Usage](#usage)
* [Documentation](DOCS.md)
* [Contribution](#contribution)
* [License](#license)

## Installation

Install it via npm

`npm install --save ttt-eng-fcc`

## Usage

This module is to emulate a tic-tac-toe game against the cpu. It all depends on the state of the game. So all you going to do is something like this:

```javascript
const gameEngine = require('ttt-eng-fcc')

gameEngine.init()

// In production, you should use gameEngine.cpuFirstPlayer()
// to decide who will go first. For demos purposes, assume the
// starts
while (!gameEngine.isFinish()) {
  let humanInput = someInputFunction()

  // setPlay only accepts integers that are between 0 and 8 
  // (both inclusive)
  while (!gameEngine.setPlay(humanInput())) {
    humanInput = someInputFunction()
  }

  // here the gameEngine will compute the best move for THAT turn
  gameEngine.bestMove()
}

switch(gameEngine.whoWon()) {
  case 'human':
    // handle win for human. gameEngine.getWinPos() may be useful
  case 'cpu':
    // handle win for cpu.
  default:
    // handle tie
}
```

## Contribution

For the moment I'm not accepting pull requests. This is because I need to test 
the coverage of the code when someone makes a PR and I haven't configured codecov yet.

## License

[MIT](LICENSE)
