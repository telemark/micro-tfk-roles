[![Build Status](https://travis-ci.org/telemark/micro-tfk-roles.svg?branch=master)](https://travis-ci.org/telemark/micro-tfk-roles)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# micro-tfk-roles
Mapping of roles

## API

### **/roles**

Lists all roles

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

### **/id**

Generate id from input.

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