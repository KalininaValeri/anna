$(function () {
  var body = $('body');
  // the height of the screen
  body.append('<style>section .height{height:' + $( window ).height() + 'px;}</style>');

  $.stellar();

  var container = $('#grid');

  container.imagesLoaded(function () {
    container.masonry({
      itemSelector: '.grid-item',
      columWidth: '.grid-sizer',
      percentPosition: true
    })
  });

});

$( "#toggle" ).click(function() {
  var text = $( "#text" );
  if (text.hasClass('active')) {
    text.slideUp("slow").removeClass('active');
  } else {
    text.slideDown("slow").addClass('active');
  }
});
