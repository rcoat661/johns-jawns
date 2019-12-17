'use strict';

import $ from 'jquery';

module.exports = class AboutSection {
  constructor($el) {
    this.$el = $el;
    let $dropCapText = this.$el.find('.about__content-description p');

    // set dropCap
    this.setDropCap($dropCapText);

    $(window).on('load', () => {
      setTimeout(() => {
        this.$el.addClass('done');
      }, 500);
    });
    
  
  }

  setDropCap(descriptionEl) {
    let descriptionText = descriptionEl.text();
    let firstWord = descriptionText.slice(0, descriptionText.indexOf(' '));
    let newText = descriptionText.slice(firstWord.length);
    newText = '<p><span class="power">' + firstWord + '</span>' + newText + '</p>';
    descriptionEl.html(newText);
  }

};
