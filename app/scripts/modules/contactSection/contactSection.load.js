'use strict';

module.exports = ($el) => {
  require.ensure([], (require) => {
    let Module = require('./contactSection.main');
    new Module($el);
  });
};
