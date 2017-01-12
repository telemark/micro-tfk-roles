'use strict'

module.exports = (results) => {
  const companies = results
    .map((company) => {
      return `<div><h2>${company.name}</h2><div>${company.id}</div></div>`
    })

  return `<html><body style="text-align: center"><h1>Companies</h1>${companies.join('')}</body></html>`
}
