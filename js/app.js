;(function() {
'use strict';

$(function() {

  var $photoList = $('#photo-list')
    , $window = $(window)

  $photoList.imagesLoaded(function() {
    var mason = new Masonry($photoList.get(0), {
      columnWidth: 230
    , itemSelector: '.photo'
    , gutter: 15
    , transitionDuration: '1s'
    })

    var $photos = $('.photo')

    $photos.click(function(e) {
      var $el = $(e.target)

      $el.insertBefore($('.photo:first-child'))
      $el
        .addClass('photo-zoom')
        .siblings().removeClass('photo-zoom')

       mason.reloadItems()
       mason.layout()

       $window.scrollTop($photoList.offset().top)
    })
  })
})


}).call(this);