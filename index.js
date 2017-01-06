'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const listAllRoles = require('./lib/list-all-roles')
const filterRoles = require('./lib/filter-roles')
const idFromInput = require('./lib/id-from-input')

module.exports = async (request, response) => {
  const {pathname, query} = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query

  if (pathname === '/roles') {
    send(response, 200, Object.values(data).length > 0 ? filterRoles(data) : listAllRoles())
  } else if (pathname === '/id') {
    send(response, 200, idFromInput(data))
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
