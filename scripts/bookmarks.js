'use strict';

/* global store */

// eslint-disable-next-line no-unused-vars

console.log('bookmarks connected to HTML');

const bookmarkList = (function(){

  const addCreateBookmarkFormToHtml= function() {
    return `
    <p>Create Bookmark:</p>
    <form id="create-bookmark-form">

    <label for="input-title">Title: </label>
    <input type="text" placeholder="ex: Cats Gone Wild" id="input-title">
        <br>

    <label for="input-link">Link: </label>
    <input type="text" placeholder="ex: YouTube.com..." id="input-link">
         <br>

    <label for="input-description">Description: </label>
        <br>
    <textarea placeholder="text here" cols="40" rows="5" id="input-description"></textarea> 
            <br>

    <label for="input-rating">Rating: </label> 
        <input type="number" min="1" max="5" id="input-rating">
            <br>
            
    <button type="submit" id="create-bookmark-button">
             Add Bookmark
    </button>

    </form> `;
  };

  const addBookmarksRenderedtoHtml = function(bookmark){
    return `
     <li class='${bookmark.id}'>

       <span class="bookmark-title">${bookmarkTitle}</span> 

       <span class="bookmark-rating">Rating: ${bookmarkRating}</span>

       <input type="checkbox" class="detailed-view-toggle">Detailed View

       <button type="submit" class="remove-button">
             Remove Bookmark
       </button>
     </li>`;
  };

  const addDetailedViewToHTML = function (bookmark){
    return `
    <li class='${bookmark.id}'>

        <span class="bookmark-title">${bookmarkTitle}</span> 

        <span class="bookmark-rating">Rating: ${bookmarkRating}</span>

        <input type="checkbox" class="detailed-view-toggle">Detailed View

        <button type="submit" class="remove-button">
              Remove Bookmark
        </button>

        <section class="detailed-view-on">
          <ul>
             <li>
               <span class="description-on">Description: ${bookmark.description}</span><br>
               <a href="${bookmark.link}" class="clickable-link">
                    View Link
               </a>
             </li>
          </ul>
        </section>             
    </li>`;
  };

  const render = function (){
  };

  const handleNewBookmarkSubmit = function (){
  };

  const getBookmarkIdFromElement = function(bookmark){
  };

  const handleDetailedViewClicked = function (){
  };

  //   const handleEditBookmarkSubmit = function(){
  //   };

  const handleToggleFilterClick = function() {
  };

  const bindThemAll = function (){
    handleDetailedViewClicked();
    handleNewBookmarkSubmit();
    handleToggleFilterClick();
    // handleEditBookmarkSubmit(),

  };

  return {
    render,
    bindThemAll
  };
}());