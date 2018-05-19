'use strict'

module.exports = (ndx) ->
  ndx.validator = require 'i-validate'
  validate = (args, cb) ->
    ndx.validator.validate args.table, args.newObj or args.obj
  if ndx.database
    ndx.database.on 'preInsert', validate
    ndx.database.on 'preUpdate', validate