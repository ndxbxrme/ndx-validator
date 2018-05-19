(function() {
  'use strict';
  module.exports = function(ndx) {
    var validate;
    ndx.validator = require('i-validate');
    validate = async function(args, cb) {
      var validation;
      validation = (await ndx.validator.validate(args.table, args.newObj || args.obj));
      return cb(validation.result);
    };
    if (ndx.database) {
      ndx.database.on('preInsert', validate);
      ndx.database.on('preUpdate', validate);
    }
    return null;
  };

}).call(this);

//# sourceMappingURL=index.js.map
