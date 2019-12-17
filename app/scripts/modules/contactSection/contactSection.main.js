'use strict';

import $ from 'jquery';

module.exports = class ContactSection {
  constructor($el) {
    this.$el = $el;
    let contactButton = this.$el.find('a.btn');
  }

};
