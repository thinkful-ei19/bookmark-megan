'use strict';

/* global cuid */

// eslint-disable-next-line no-unused-vars
const Bookmark = (function(){


  const create = function(title, link, description, rating) {
    return {
      id: cuid(),
      title,
      link,
      description,
      rating,
      checked: false
    };
  };

  return {
    create
  };
  
}());