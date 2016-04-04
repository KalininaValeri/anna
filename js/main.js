$(function () {
  var body = $('body');
  // the height of the screen
  body.append('<style>section .height{height:' + $( window ).height() + 'px!important;}</style>');

  $.stellar();

  initMap();

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

  // Create a map object and specify the DOM element for display.
  function initMap() {

    // Specify features and elements to define styles.
    var styleArray = [
      {
        featureType: "all",
        stylers: [
          { saturation: -80 }
        ]
      },{
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          { hue: "#00ffee" },
          { saturation: 50 }
        ]
      },{
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      scrollwheel: false,
      // Apply the map style array to the map.
      styles: styleArray,
      zoom: 8
    });
  }