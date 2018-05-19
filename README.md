# ndx-validator
`npm install --save ndx-validator`
```
  validator.setValidations
    users:
      name: ->
        new Promise (resolve) =>
          window.setTimeout =>
            resolve @.item
          , 4000
      age: ['$number()', '$min(10)', '$max(40)']
      cats: 
        $validations: '$notEmpty()'
        name: '$exists()'
      email: ['$exists()', '$emailList()']
```