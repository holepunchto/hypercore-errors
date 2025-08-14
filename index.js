const IdEnc = require('hypercore-id-encoding')

module.exports = class HypercoreError extends Error {
  constructor (msg, code, fn = HypercoreError, discKey = null) {
    if (discKey) msg = `${msg} (discovery key: ${IdEnc.normalize(discKey)})`
    super(`${code}: ${msg}`)

    this.code = code
    this.discKey = discKey

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, fn)
    }
  }

  get name () {
    return 'HypercoreError'
  }

  static ASSERTION (msg, discKey = null) { // ERR_ASSERTION is picked up by safety-catch also
    return new HypercoreError(msg, 'ERR_ASSERTION', HypercoreError.ASSERT, discKey)
  }

  static BAD_ARGUMENT (msg, discKey = null) {
    return new HypercoreError(msg, 'BAD_ARGUMENT', HypercoreError.BAD_ARGUMENT, discKey)
  }

  static STORAGE_EMPTY (msg, discKey = null) {
    return new HypercoreError(msg, 'STORAGE_EMPTY', HypercoreError.STORAGE_EMPTY, discKey)
  }

  static STORAGE_CONFLICT (msg, discKey = null) {
    return new HypercoreError(msg, 'STORAGE_CONFLICT', HypercoreError.STORAGE_CONFLICT, discKey)
  }

  static INVALID_SIGNATURE (msg, discKey = null) {
    return new HypercoreError(msg, 'INVALID_SIGNATURE', HypercoreError.INVALID_SIGNATURE, discKey)
  }

  static INVALID_CAPABILITY (msg, discKey = null) {
    return new HypercoreError(msg, 'INVALID_CAPABILITY', HypercoreError.INVALID_CAPABILITY, discKey)
  }

  static INVALID_CHECKSUM (msg = 'Invalid checksum', discKey = null) {
    return new HypercoreError(msg, 'INVALID_CHECKSUM', HypercoreError.INVALID_CHECKSUM, discKey)
  }

  static INVALID_OPERATION (msg, discKey = null) {
    return new HypercoreError(msg, 'INVALID_OPERATION', HypercoreError.INVALID_OPERATION, discKey)
  }

  static INVALID_PROOF (msg = 'Proof not verifiable', discKey = null) {
    return new HypercoreError(msg, 'INVALID_PROOF', HypercoreError.INVALID_PROOF, discKey)
  }

  static BLOCK_NOT_AVAILABLE (msg = 'Block is not available', discKey = null) {
    return new HypercoreError(msg, 'BLOCK_NOT_AVAILABLE', HypercoreError.BLOCK_NOT_AVAILABLE, discKey)
  }

  static SNAPSHOT_NOT_AVAILABLE (msg = 'Snapshot is not available', discKey = null) {
    return new HypercoreError(msg, 'SNAPSHOT_NOT_AVAILABLE', HypercoreError.SNAPSHOT_NOT_AVAILABLE, discKey)
  }

  static REQUEST_CANCELLED (msg = 'Request was cancelled', discKey = null) {
    return new HypercoreError(msg, 'REQUEST_CANCELLED', HypercoreError.REQUEST_CANCELLED, discKey)
  }

  static REQUEST_TIMEOUT (msg = 'Request timed out', discKey = null) {
    return new HypercoreError(msg, 'REQUEST_TIMEOUT', HypercoreError.REQUEST_TIMEOUT, discKey)
  }

  static SESSION_NOT_WRITABLE (msg = 'Session is not writable', discKey = null) {
    return new HypercoreError(msg, 'SESSION_NOT_WRITABLE', HypercoreError.SESSION_NOT_WRITABLE, discKey)
  }

  static SESSION_CLOSED (msg = 'Session is closed', discKey = null) {
    return new HypercoreError(msg, 'SESSION_CLOSED', HypercoreError.SESSION_CLOSED, discKey)
  }

  static BATCH_UNFLUSHED (msg = 'Batch not yet flushed', discKey = null) {
    return new HypercoreError(msg, 'BATCH_UNFLUSHED', HypercoreError.BATCH_UNFLUSHED, discKey)
  }

  static BATCH_ALREADY_EXISTS (msg = 'Batch already exists', discKey = null) {
    return new HypercoreError(msg, 'BATCH_ALREADY_EXISTS', HypercoreError.BATCH_ALREADY_EXISTS, discKey)
  }

  static BATCH_ALREADY_FLUSHED (msg = 'Batch has already been flushed', discKey = null) {
    return new HypercoreError(msg, 'BATCH_ALREADY_FLUSHED', HypercoreError.BATCH_ALREADY_FLUSHED, discKey)
  }

  static OPLOG_CORRUPT (msg = 'Oplog file appears corrupt or out of date', discKey = null) {
    return new HypercoreError(msg, 'OPLOG_CORRUPT', HypercoreError.OPLOG_CORRUPT, discKey)
  }

  static OPLOG_HEADER_OVERFLOW (msg = 'Oplog header exceeds page size', discKey = null) {
    return new HypercoreError(msg, 'OPLOG_HEADER_OVERFLOW', HypercoreError.OPLOG_HEADER_OVERFLOW, discKey)
  }

  static INVALID_OPLOG_VERSION (msg = 'Invalid header version', discKey = null) {
    return new HypercoreError(msg, 'INVALID_OPLOG_VERSION', HypercoreError.INVALID_OPLOG_VERSION, discKey)
  }

  static WRITE_FAILED (msg = 'Write to storage failed', discKey = null) {
    return new HypercoreError(msg, 'WRITE_FAILED', HypercoreError.WRITE_FAILED, discKey)
  }

  static DECODING_ERROR (msg = 'Decoding error', discKey = null) {
    return new HypercoreError(msg, 'DECODING_ERROR', HypercoreError.DECODING_ERROR, discKey)
  }

  static SESSION_MOVED (msg = 'Session moved', discKey = null) {
    return new HypercoreError(msg, 'SESSION_MOVED', HypercoreError.SESSION_MOVED, discKey)
  }
}
