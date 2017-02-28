'use strict'

const test = require('ava')
const mapMyRoles = require('../../lib/map-roles')
const testData = require('./../data/test-data-mapping.json')

test('It returns expected results from role-mapping', t => {
  t.deepEqual(testData.expected, mapMyRoles(testData.testinput), 'Mapping OK')
})
