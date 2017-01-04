'use strict'

const tap = require('tap')
const generateId = require('../../lib/generate-id')
const testData = require('./../data/test-data-generate-id.json')

testData.forEach((item) => {
  tap.equal(item.expected, generateId(item.input), 'It returns expected result from ' + item.input)
})
