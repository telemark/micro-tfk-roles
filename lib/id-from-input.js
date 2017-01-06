'use strict'

const generateId = require('./generate-id')

module.exports = (data) => {
  return {
    input: data.input || '',
    generatedId: generateId(data.input || '')
  }
}
