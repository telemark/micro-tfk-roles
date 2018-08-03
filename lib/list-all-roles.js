const roleMappings = require('./data/roles.json')

module.exports = () => {
  let roles = []

  Object.keys(roleMappings).forEach(key => {
    roles.push({
      id: key,
      name: roleMappings[key].name
    })
  })

  return roles
}
