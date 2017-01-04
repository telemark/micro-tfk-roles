'use strict'

const makeUnique = require('tfk-unique-array')
const roleMappings = require('./data/roles.json')

module.exports = (roles) => {
  var myRoles = []

  roles.forEach(function (item) {
    if (roleMappings.hasOwnProperty(item)) {
      myRoles = myRoles.concat(roleMappings[item].groups)
    }
  })

  return makeUnique(myRoles)
}
