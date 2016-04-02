$(function () {
  var body = $('body');
  // the height of the screen
  body.append('<style>section .height{height:' + $( window ).height() + 'px!important;}</style>');

  $('#home').stellar({
    horizontalScrolling: false,
    responsive: true
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

//$(window).height();