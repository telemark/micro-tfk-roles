'use strict'

const companies = require('../lib/data/hrm.json')
const roles = require('../lib/data/roles.json')

const notInRoles = (item) => !roles[item.id]

const notValid = companies.filter(notInRoles)

console.log(`There are ${notValid.length} companies without role`)

console.log(notValid.join('\n'))
