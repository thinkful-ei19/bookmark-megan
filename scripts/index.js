'use strict';

/* global bookmarkList, store, api */

console.log('index connected to HTML');

$(document).ready(function() {
  bookmarkList.bindThemAll();
  bookmarkList.render();

  api.getBookmarks((bookmarks) => {
    bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
    const bookmark = store.bookmarks[0];
    bookmarkList.render();
  });
});