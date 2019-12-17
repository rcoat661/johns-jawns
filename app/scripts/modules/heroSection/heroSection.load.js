'use strict';

module.exports = ($el) => {
  require.ensure([], (require) => {
    let Module = require('./heroSection.main');
    new Module($el);
  });
};
