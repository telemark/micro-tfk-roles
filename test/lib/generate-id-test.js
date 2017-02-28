'use strict'

const test = require('ava')
const generateId = require('../../lib/generate-id')
const testData = require('./../data/test-data-generate-id.json')

test('It generates expected Ids', t => {
  testData.forEach((item) => {
    t.deepEqual(item.expected, generateId(item.input), `Result from ${item.input} OK`)
  })
})
