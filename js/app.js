;(function() {
'use strict';

$(function() {

  var $photoList = $('#photo-list')
    , $window = $(window)

  var mason = new Masonry($photoList.get(0), {
    columnWidth: 230
  , itemSelector: '.photo'
  , gutter: 15
  , transitionDuration: '1s'
  })
  $photoList.on('layoutComplete', function() { console.log('layout complete') })

  var $photos = $('.photo')

  $photos.click(function(e) {
    var $el = $(e.target)

    $el.insertBefore($('.photo:first-child'))
    $el
      .addClass('photo-zoom')
      .siblings().removeClass('photo-zoom')

    // setTimeout(function() {
     mason.reloadItems()
     mason.layout()

     $window.scrollTop($photoList.offset().top)
    // }, 50)
  })
})


}).call(this);