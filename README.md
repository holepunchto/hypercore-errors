# hypercore-errors

Hypercore errors

```
npm i hypercore-errors
```

## Usage

```js
const { BLOCK_NOT_AVAILABLE } = require('hypercore-errors')

throw BLOCK_NOT_AVAILABLE()
```

## List

- BAD_ARGUMENT
- STORAGE_EMPTY
- STORAGE_CONFLICT
- INVALID_SIGNATURE
- INVALID_CAPABILITY
- INVALID_CHECKSUM
- INVALID_OPERATION
- INVALID_PROOF
- BLOCK_NOT_AVAILABLE
- SNAPSHOT_NOT_AVAILABLE
- REQUEST_CANCELLED
- REQUEST_TIMEOUT
- SESSION_NOT_WRITABLE
- SESSION_CLOSED
- BATCH_UNFLUSHED
- BATCH_ALREADY_EXISTS
- BATCH_ALREADY_FLUSHED
- OPLOG_CORRUPT
- INVALID_OPLOG_VERSION

## License

Apache-2.0