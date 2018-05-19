(function() {
  'use strict';
  module.exports = function(ndx) {
    var validate;
    ndx.validator = require('i-validate');
    validate = function(args, cb) {
      return ndx.validator.validate(args.table, args.newObj || args.obj);
    };
    if (ndx.database) {
      ndx.database.on('preInsert', validate);
      return ndx.database.on('preUpdate', validate);
    }
  };

}).call(this);

//# sourceMappingURL=index.js.map
