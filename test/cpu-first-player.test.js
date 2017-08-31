const test = require('tape')
const {cpuFirstPlayer} = require('../index')

test('cpuFirstPlayer should return a number', function (t) {
  t.ok(typeof cpuFirstPlayer() === 'boolean')
  t.end()
})
