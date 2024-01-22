const test = require('brittle')
const errors = require('./index.js')

test('bad argument', function (t) {
  const err = errors.BAD_ARGUMENT('My custom message')
  t.is(err.name, 'HypercoreError')
  t.is(err.message, 'BAD_ARGUMENT: My custom message')
  t.is(err.code, 'BAD_ARGUMENT')
})

test('block is not available', function (t) {
  const err = errors.BLOCK_NOT_AVAILABLE()
  t.is(err.name, 'HypercoreError')
  t.is(err.message, 'BLOCK_NOT_AVAILABLE: Block is not available')
  t.is(err.code, 'BLOCK_NOT_AVAILABLE')
})

test('write failed', function (t) {
  const err = errors.WRITE_FAILED()
  t.is(err.name, 'HypercoreError')
  t.is(err.message, 'WRITE_FAILED: Write to storage failed')
  t.is(err.code, 'WRITE_FAILED')
})
