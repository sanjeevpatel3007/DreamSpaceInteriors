// Initialize the carousel
$('#carouselExample').carousel();

// Automatically advance the carousel every 1 second
setInterval(function() {
  $('#carouselExample').carousel('next');
}, 100);
