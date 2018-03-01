'use strict';

/* global Item */

// eslint-disable-next-line no-unused-vars

console.log('store connected to HTML')


const store = (function(){
  const addBookmark = function(bookmark) {
    this.bookmarks.push(bookmark);
  };

  const findById = function(id) {

  };

  const toggleCheckedFilter = function() {
    this.detailedViewCheckedBookmarks = !this.detailedViewCheckedBookmarks;
  };

  //   const findAndUpdate = function (id, newData){
  
  //   };

  const findAndDelete = function (id){

  };

  return {
    bookmarks: [],
    detailedViewCheckedBookmarks: false,

    //findAndUpdate,
    findAndDelete,
    addBookmark,
    findById,
    toggleCheckedFilter,
  };
  
}());