'use strict'

const tap = require('tap')
const mapMyRoles = require('../../lib/map-roles')
const testData = require('./../data/test-data-mapping.json')

tap.equal(JSON.stringify(testData.expected), JSON.stringify(mapMyRoles(testData.testinput)), 'It returns expected results')
