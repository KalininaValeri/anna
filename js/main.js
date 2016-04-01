$(function () {
  var body = $('body');
  // the height of the screen
  body.append('<style>section .about_height{height:' + $( window ).height() + 'px!important;}</style>');
});

$( "#toggle" ).click(function() {
  var text = $( "#text" );
  if (text.hasClass('active')) {
    text.slideUp("slow").removeClass('active');
  } else {
    text.slideDown("slow").addClass('active');
  }
});

//$(window).height();