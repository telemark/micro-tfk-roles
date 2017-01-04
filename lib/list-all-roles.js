'use strict'

module.exports = () => {
  const roleMappings = require('./data/roles.json')
  let roles = [
    {
      id: 'alle',
      name: 'Alle'
    },
    {
      id: 'administrasjonen',
      name: 'Administrasjonen'
    },
    {
      id: 'skole',
      name: 'Skole'
    },
    {
      id: 'tannhelse',
      name: 'Tannhelse'
    }
  ]

  Object.keys(roleMappings).forEach((key) => {
    roles.push({
      id: key,
      name: roleMappings[key].name
    })
  })

  return roles
}