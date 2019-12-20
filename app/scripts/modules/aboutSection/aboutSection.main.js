'use strict';

import $ from 'jquery';

module.exports = class AboutSection {
  constructor($el) {
    this.$el = $el;
    
    $(window).on('load', () => {
      this.$el.addClass('done');
    });
  
  }

};
