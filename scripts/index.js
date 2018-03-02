'use strict';

/* global bookmarkList, store, api */

console.log('index connected to HTML');

$(document).ready(function() {
 // bookmarkList.bindEventListeners();
  bookmarkList.render();
 bookmarkList.handleNewBookmarkSubmit();
 //bookmarkList.handleAddBookmarkFile();

//   api.getItems((items) => {
//     items.forEach((item) => store.addBookmark(bookmark));
//     const bookmark = store.bookmarks[0];
//     bookmarkList.render();
});
//   });
// });