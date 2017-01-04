'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const listAllRoles = require('./lib/list-all-roles')

module.exports = async (request, response) => {
  const {path, query} = await parse(request.url, true)
  const data = request.method === 'POST' ? await json(request) : query

  if (path === '/list') {
    send(response, 200, listAllRoles())
  } else if (path === '/list') {
    send(response, 200, listAllRoles())
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    const html = marked(readme)
    send(response, 200, html)
  }
}
