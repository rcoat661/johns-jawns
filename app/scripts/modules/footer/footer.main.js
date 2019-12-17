'use strict';

import $ from 'jquery';
import Vivus from 'vivus';

module.exports = class Footer {
  constructor($el) {
    this.$el = $el;
    let yearEl = $el.find('#year');
    let svg = $el.find('#cityJawn');
    let year = new Date().getFullYear();

    yearEl.text(year);

    let myCallback = function() {
      svg.addClass('done')
    }


    $(window).on('scroll', function() {
      if (svg.isInViewport() && !svg.hasClass('visible')) {
        svg.addClass('visible');
        new Vivus('cityJawn', {
          start: 'autostart',
          type: 'sync',
          animTimingFunction: Vivus.EASE,
          duration: 500
        }, myCallback);
      }
    });

    $.fn.isInViewport = function() {
      let elementTop = $(this).offset().top;
      let elementBottom = elementTop + $(this).outerHeight();
      let viewportTop = $(window).scrollTop();
      let viewportBottom = viewportTop + $(window).height();
      let offset = 200;

      return elementBottom > viewportTop && elementTop + offset < viewportBottom;
    };


  }

};
