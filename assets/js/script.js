document.addEventListener('DOMContentLoaded', function () {
    var currentSlideIndex = 0;
    var slides = document.querySelectorAll('.images_slider');

    function slide(direction) {
        // Hide the current slide with a fade-out effect
        var currentSlide = slides[currentSlideIndex];
        currentSlide.style.opacity = 0;

        // Calculate the new slide index
        currentSlideIndex += direction;

        // Check if it's the first or last slide, loop if needed
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        } else if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }

        // Reset the opacity of the current slide
        currentSlide = slides[currentSlideIndex];
        currentSlide.style.transition = 'opacity 0s'; // Remove transition for instant reset
        currentSlide.style.opacity = 1;

        // Trigger reflow to apply the instant reset
        void currentSlide.offsetWidth;

        // Apply the fade-in effect with transition
        currentSlide.style.transition = 'opacity 0.5s ease-in-out';
        currentSlide.style.opacity = 1;
    }

    // Optional: Auto-slide every 3 seconds
    setInterval(function () {
        slide(1);
    }, 7000);

    // Listen for window resize event
    window.addEventListener('resize', function () {
        // Check the screen width and adjust your animation if needed
        if (window.innerWidth < 768) { // Adjust this breakpoint as needed
            // For smaller screens (e.g., phone view)
            // Add specific logic or styles for phone view
            // Example: Change slide transition time for phone view
            slides.forEach(function (slide) {
                slide.style.transition = 'opacity 0.3s ease-in-out';
            });
        } else {
            // For larger screens (e.g., desktop view)
            // Add specific logic or styles for desktop view
            // Example: Reset slide transition time for desktop view
            slides.forEach(function (slide) {
                slide.style.transition = 'opacity 0.5s ease-in-out';
            });
        }
    });
});

 
// scroll animation function for our story
document.addEventListener('DOMContentLoaded', function () {
    // Add a class to trigger the animation when scrolling
    window.addEventListener('scroll', function () {
        var aboutContent = document.querySelector('.about_content');
        var scrollPosition = window.scrollY;

        if (scrollPosition > aboutContent.offsetTop - window.innerHeight / 2) {
            aboutContent.classList.add('active');
        }
    });
});

// nav bar functionalities and the animations
const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');
  
    // toggle the nav bar and menu icon
    menu.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
  
      // Toggle between 'fa-bars' and 'fa-times' classes
      const menuIcon = document.querySelector('.menu i');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-times');
  
      // links animation functionality
      links.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `linksfade 0.5s ease forwards ${index / 5 + 0.5}s`;
        }
      });
    });
  }
  
  navSlide();
  

  
  