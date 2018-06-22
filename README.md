[![Build Status](https://travis-ci.org/telemark/micro-portalen-roles.svg?branch=master)](https://travis-ci.org/telemark/micro-portalen-roles)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-portalen-roles

Mapping of roles for portalen

## API

### **/roles**

Returns json with all roles

To filter roles by company, department or roles

#### GET

```bash
?company=<company-name>&department=<department-name>&roles=<role1>|<role2>|<role3>
```

#### POST

```JavaScript
{
  company: '<company-name>',
  department: '<department-name>',
  roles: [
    'role1',
    'role2',
    'role3'
  ]
}
```

### **/companies**

Returns json of all companies.

### **/companies/view**

Lists all companies. Renders to html. 

### **/id**

Generate id from input.

Great way to check if your id is in [roles.json](lib/data/roles.json)

#### GET

```bash
?input=<input>
```
 
#### POST

```JavaScript
{
  input: '<input>'
}
```

## License

[MIT](LICENSE)

![Robohash image of micro-portalen-roles](https://robots.kebabstudios.party/micro-portalen-roles.png "Robohash image of micro-portalen-roles")