// Carousel for mobile screen
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false
});

let scrolling = false; // Flag to track scrolling state
let timeout; // Variable to store timeout

// Function to handle scroll event
function handleScroll(event) {
  if (!scrolling) {
    scrolling = true;
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      scrolling = false; // Reset scrolling flag
      let currentTop = window.scrollY; // Get current scroll position
      let slideIndex = Math.round(currentTop / window.innerHeight); // Calculate nearest slide index
      let targetTop = slideIndex * window.innerHeight; //
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }, 100); //
  }
}

window.addEventListener('scroll', handleScroll);