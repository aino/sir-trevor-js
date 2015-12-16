"use strict";

module.exports = ({title, type, icon_name}) => {
  return `
    <button class="st-block-controls__button" data-type="${type}" type="button">
      <i class="${icon_name}"></i><span>${title()}</span>
    </button>
  `;
};
