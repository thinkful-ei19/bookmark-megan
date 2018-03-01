'use strict';

/* global store */

// eslint-disable-next-line no-unused-vars

console.log('bookmarks connected to HTML')

const bookmarkList = (function(){

  const addCreateBookmarkFormToHtml= function() {
    return `
    <p>Create Bookmark:</p>
    <form class="create-bookmark-form">
        Title: <input type="text" placeholder="ex: Cats Gone Wild" class="title-input">
        <br>
        Link: <input type="text" placeholder="ex: YouTube.com..." class="link-input">
        <br>
        Description: 
        <div>
            <textarea cols="40" rows="5" class="description-input">
            </textarea> 
        </div>
        <div class="create-dropdown-rating">
                <select class='add-rating-input'>
                       <option selected disabled>Add Rating:</option>
                       <option class="5">5: Amazing</option>
                       <option class="4">4: Great</option>
                       <option class="3">3:Good</option>
                       <option class="2">2: OK</option>
                       <option class="1">1: Meh</option>
                </select>
               </div> 
               <br>
         <button type="submit" class="create-bookmark-button">
             Add Bookmark
         </button>
         </form>`;
  };

  const addBookmarksRenderedtoHtml = function(bookmark){
    return `
    <li class='${bookmark.id}'>
      <span class="bookmark-title">${bookmarkTitle}</span> 
      <span class="bookmark-rating">Rating: ${bookmarkRating}</span>
          <form id="remove-and-details">
           <label for="detailed-describe-or-remove-bookmark"></label>
           <input type="checkbox" class="detailed-view-toggle">Detailed View
           <button type="submit" class="remove-button">
                  Remove Bookmark
              </button>
      </form>
      </li>`;
  };

  const addDetailedViewToHTML = function (bookmark){
    return `
    <li class='${bookmark.id}'>
    <span class="bookmark-title">${bookmarkTitle}</span> 
    <span class="bookmark-rating">Rating: ${bookmarkRating}</span>
        <form id="remove-and-details">
         <label for="detailed-describe-or-remove-bookmark"></label>
         <input type="checkbox" class="detailed-view-toggle">Detailed View
         <button type="submit" class="remove-button">
                Remove Bookmark
            </button>
    </form>
     <section class="detailed-view-on">
        <li>
         <span class="description-on">Description: ${bookmark.description}</span><br>
         <a href="${bookmark.link}" class="clickable-link">
            View Link
         </a>
        </li>
     </section>
    </li>`;
  };

  return {

  };
}());