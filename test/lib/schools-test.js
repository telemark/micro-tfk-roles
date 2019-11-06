'use strict'

const test = require('ava')
const roles = require('../../lib/data/roles.json')
const generateId = require('../../lib/generate-id')
const schools = [
  'Rjukan videregående skole',
  'Fagskolen Telemark',
  'Karrieresenteret',
  'PPT/oppf.tjenesten',
  'Opplæringsetaten',
  'Bø vidaregåande skule',
  'Kragerø videregående skole',
  'Notodden videregående skole',
  'Porsgrunn videregående skole',
  'Skien videregående skole',
  'Brekkeby videregående skole',
  'Vest-Telemark vgs. avd. Dalen',
  'Nome vgs. avd. Lunde',
  'Hjalmar Johansen vgs',
  'Bamble vgs. avd. Grasmyr',
  'Osebakken videregående skole',
  'Vest-Telem. vgs. avd. Seljord',
  'Skogmo videregående skole',
  'Bamble vgs. avd. Croftholmen',
  'Nome vgs. avd. Søve'
]

test('Schools ids got roles as expected', t => {
  schools.forEach((school) => {
    const id = generateId(school)
    t.truthy(roles[id], `${school} got roles`)
  })
})
