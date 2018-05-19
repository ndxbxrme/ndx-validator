'use strict'

module.exports = (ndx) ->
  ndx.validator = require 'i-validate'
  validate = (args, cb) ->
    validation = await ndx.validator.validate args.table, args.newObj or args.obj
    cb validation.result
  if ndx.database
    ndx.database.on 'preInsert', validate
    ndx.database.on 'preUpdate', validate