'use strict'

module.exports = () => {
  const roleMappings = require('./data/roles.json')
  let roles = []

  Object.keys(roleMappings).forEach((key) => {
    roles.push({
      id: key,
      name: roleMappings[key].name
    })
  })

  return roles
}