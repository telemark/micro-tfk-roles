'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const listAllRoles = require('./lib/list-all-roles')
const filterRoles = require('./lib/filter-roles')
const idFromInput = require('./lib/id-from-input')
const renderPage = require('./lib/render-page')

module.exports = async (request, response) => {
  const {pathname, query} = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query
  const result = Object.values(data).length > 0 ? filterRoles(data) : listAllRoles()

  if (!['/', '/companies/view'].includes(pathname)) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Credentials', 'true')
    response.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    response.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')
  }
  if (request.method === 'OPTIONS') {
    send(response, 200, {})
  } else if (pathname === '/roles') {
    send(response, 200, result)
  } else if (pathname === '/companies') {
    send(response, 200, result)
  } else if (pathname === '/companies/view') {
    send(response, 200, renderPage(result))
  } else if (pathname === '/id') {
    send(response, 200, idFromInput(data))
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
