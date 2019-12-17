'use strict';

import $ from 'jquery';

module.exports = {
  init: function() {
    $('[data-module]').each((i, v) => {
      let name = $(v).data('module');
      let module = this.modules[name]($(v));
    });
  },
  modules: {
    aboutSection: require('./aboutSection/aboutSection.load'),
    contactSection: require('./contactSection/contactSection.load'),
    equalHeight: require('./equalHeight/equalHeight.load'),
    heroSection: require('./heroSection/heroSection.load'),
    footer: require('./footer/footer.load'),
    workSection: require('./workSection/workSection.load')
  }

};