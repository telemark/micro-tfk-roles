'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const listAllRoles = require('./lib/list-all-roles')
const filterRoles = require('./lib/filter-roles')
const generateId = require('./lib/generate-id')

module.exports = async (request, response) => {
  const {pathname, query} = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query

  if (pathname === '/roles') {
    send(response, 200, Object.values(data).length > 0 ? filterRoles(data) : listAllRoles())
  } else if (pathname === '/id') {
    const result = {
      input: data.input || '',
      generatedId: generateId(data.input || '')
    }
    send(response, 200, result)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
