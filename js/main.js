$(function () {
  var body = $('body');
  // the height of the screen
  body.append('<style>section .height{height:' + $( window ).height() + 'px!important;}</style>');

  $.stellar();

  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    //columnWidth: 200
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