'use strict'

const fs = require('fs')
const hrm = require('../lib/data/hrm.json')
const generateId = require('../lib/generate-id')
const addId = (item) => {
  item.id = generateId(item.name)
  return item
}

const updated = hrm.map(addId)

fs.writeFileSync('lib/data/hrm.json', JSON.stringify(updated, null, 2))
