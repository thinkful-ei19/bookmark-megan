'use strict';

/* global store, api */

// eslint-disable-next-line no-unused-vars

console.log('bookmarks connected to HTML');

const bookmarkList = (function(){

  ///html to add to dom based on events:

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
                    <textarea placeholder="text here" cols="27" rows="5" id="input-description"></textarea> 
                            <br>

                    <label for="input-rating">Rating:  </label>
                        <input type="number" min="1" max="5" id="input-rating">
                            <br>
                            
                    <button type="submit" id="create-bookmark-button">
                             Add Bookmark
                    </button>

                    </form>  `;
  };

  const addBookmarksRenderedtoHtml = function(bookmark){
    return `
    <li data-bookmark-id='${bookmark.id}' class="bookmark-class">

        <span class= 'col bookmark-title'>${bookmark.title}</span> 

      <span class="col bookmark-rating">Rating: ${bookmark.rating}</span>
      <div class="col">
        <input type="checkbox" class="detailed-view-toggle">Detailed View
        </div>

        <button type="submit" class="col remove-button">
              Remove Bookmark
        </button>

               <span class="col span hidden"> Description: ${bookmark.desc}</span><br>
               <a href="${bookmark.url}" class="col hidden">
                    View Link
               </a>    
               <span class = "col span hidden">...</span>
               <span class = "col span hidden">...</span>       
    </li>
    `;
  };


  const render = function (){
    console.log('render called');
   
    let newBookmarkHTML = store.bookmarks.map(obj => addBookmarksRenderedtoHtml(obj));
   
    if (store.isAdding === true){
      renderAddBookmarkField();
    }
    else if (store.filterBy > 0){
      console.log(store.filterBy);
      const filtered = store.bookmarks.filter(obj => obj.rating >=store.filterBy);
      newBookmarkHTML = filtered.map(obj => addBookmarksRenderedtoHtml(obj));
    }
    else {
      $('#creating-bookmark-section').empty();
    }
      $('#bookmarks-rendered').html(newBookmarkHTML);
    
  };

  const renderAddBookmarkField = function () {
    $('#creating-bookmark-section').html(addCreateBookmarkFormToHtml);
  };

  const handleAddBookmarkFile = function () {
    $('#init-add-bookmark').on('click',function(event) {
      event.preventDefault();
      store.isAdding = true;
      render();
    });
  };
  
  const handleNewBookmarkSubmit = function (){
    $('#creating-bookmark-section').on('submit', '#create-bookmark-form', event => {
      event.preventDefault();
      const newTitleName = $('#input-title').val();
      const newLinkName = $('#input-link').val();
      const newDescription = $('#input-description').val();
      const newRating = $('#input-rating').val();
      api.createBookmarks(newTitleName, newLinkName, newDescription, newRating, (newBookmark)=>{
        newBookmark.detailedViewChecked=false;
        store.addBookmark(newBookmark);
        $('#input-title').val('');
        $('#input-link').val('');
        $('#input-description').val('');
        $('#input-rating').val('');
        store.isAdding = false;
        render();
      });

    });
  };


  const getBookmarkIdFromElement = function(bookmark){
    return $(bookmark)
      .closest('.bookmark-class')
      .data('bookmark-id');
  };


  const handleBookmarkRemoveClicked = function(){
    $('#bookmarks-rendered').on('click', '.remove-button', event => {
      console.log('remove handle clicked');
      const id = getBookmarkIdFromElement(event.currentTarget);
      api.deleteBookmarks(id, () => {
        store.findAndDelete(id);
        render();
      });
      render();
    });
  };

  const handleDetailedViewClicked = function (){
    $('#bookmarks-rendered').on('change', '.detailed-view-toggle', function(event) {
      console.log($(this).is(':checked'));
      if ($(this).is(':checked')===true) {
        console.log($(this).siblings('.detailed-view-on').find('.hidden'));
        $(this).parent().siblings('.span').removeClass('hidden');
        $(this).parent().siblings('a').removeClass('hidden');
      }
      if ($(this).is(':checked')===false){
        $(this).parent().siblings('a').addClass('hidden');
        $(this).parent().siblings('.span').addClass('hidden');
      }

    });
  };

  const handleSortByRating = function (){
    $('.sort-by-dropdown-rating').on('change', '.sort-rating', function(event){
      const ratingValue = parseInt($(this).val());
      console.log(ratingValue);
      store.filterBy = ratingValue;
      render();
    });   
  };



  const bindThemAll = function (){
    handleSortByRating();
    handleNewBookmarkSubmit();
    handleAddBookmarkFile();
    handleDetailedViewClicked();
    handleBookmarkRemoveClicked();
  };

  return {
    render,
    bindThemAll
  };
}());