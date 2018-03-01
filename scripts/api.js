'use strict';
/* global store*/

console.log('api connected to HTML')
const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/megan';

  let getBookmarks = function(callback){
    $.getJSON( `${BASE_URL}/bookmarks`, callback);
  };


  const createBookmarks = function(title, description, link, rating, callback){
    const newBookmark = JSON.stringify({title:title, description: description, link:link, rating:rating });

    $.ajax({
      url : `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/JSON',
      data: newBookmark,
      success: callback
    });


  };


//   const updateBookmarks = function(id, updateData, callback){
//     $.ajax( {
//       url : `${BASE_URL}/bookmarks/${id}`,
//       method : 'PATCH',
//       contentType : 'application/json',
//       data : JSON.stringify(updateData),
//       success : callback

//     });
//   };

  const deleteBookmarks = function(id, callback){
    $.ajax( {
      url : `${BASE_URL}/bookmarks/${id}`,
      method : 'DELETE',
      contentType : 'application/json',
      success : callback
    });
  };

  return {
    getBookmarks,
    createBookmarks,
    //updateBookmarks,
    deleteBookmarks
  };


})();