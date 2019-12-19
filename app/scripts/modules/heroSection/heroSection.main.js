'use strict';

import $ from 'jquery';
import Vivus from 'vivus';

module.exports = class HeroSection {
  constructor($el) {
    this.$el = $el
    let svg = this.$el.find('svg')

    var myCallback = function() {
      svg.addClass('done')
    }

    new Vivus('johnsJawnsLogo', {
      start: 'autostart',
      type: 'sync',
      pathTimingFunction: Vivus.EASE,
      animTimingFunction: Vivus.EASE,
      duration: 300
    }, myCallback)
  }

};
