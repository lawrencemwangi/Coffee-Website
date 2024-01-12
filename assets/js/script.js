// document.addEventListener('DOMContentLoaded', function () {
//   var currentSlideIndex = 0;
//   var slides = document.querySelectorAll('.images_slider');

//   function slide(direction) {
//       if (slides.length === 0) {
//           console.error("No slides found.");
//           return;
//       }

//       // Hide the current slide with a fade-out effect
//       var currentSlide = slides[currentSlideIndex];
//       if (!currentSlide) {
//           console.error("Current slide is undefined.");
//           return;
//       }
//       currentSlide.style.opacity = 0;

//       // Calculate the new slide index
//       currentSlideIndex += direction;

//       // Check if it's the first or last slide, loop if needed
//       if (currentSlideIndex < 0) {
//           currentSlideIndex = slides.length - 1;
//       } else if (currentSlideIndex >= slides.length) {
//           currentSlideIndex = 0;
//       }

//       // Reset the opacity of the current slide
//       currentSlide = slides[currentSlideIndex];
//       if (!currentSlide) {
//           console.error("New slide is undefined.");
//           return;
//       }
//       currentSlide.style.transition = 'opacity 0s'; 
//       currentSlide.style.opacity = 1;

//       // Trigger reflow to apply the instant reset
//       void currentSlide.offsetWidth;

//       // Apply the fade-in effect with transition
//       currentSlide.style.transition = 'opacity 0.5s ease-in-out';
//       currentSlide.style.opacity = 1;
//   }

//   // Optional: Auto-slide every 7 seconds (7000 milliseconds)
//   setInterval(function () {
//       slide(1);
//   }, 7000);

//   // Listen for window resize event
//   window.addEventListener('resize', function () {
//       // Check the screen width and adjust your animation if needed
//       if (window.innerWidth < 768) { // Adjust this breakpoint as needed
//           // For smaller screens (e.g., phone view)
//           slides.forEach(function (slide) {
//               slide.style.transition = 'opacity 0.3s ease-in-out';
//           });
//       } else {
//           // For larger screens (e.g., desktop view)
//           slides.forEach(function (slide) {
//               slide.style.transition = 'opacity 0.5s ease-in-out';
//           });
//       }
//   });
// });


// // // nav bar functionalities and the animations
// const navSlide = () => {
//     const menu = document.querySelector('.menu');
//     const nav = document.querySelector('.links');
//     const links = document.querySelectorAll('.links li');

  
//     // toggle the nav bar and menu icon
//     menu.addEventListener('click', () => {
//       nav.classList.toggle('nav-active');
  
//       // Toggle between 'fa-bars' and 'fa-times' classes
//       const menuIcon = document.querySelector('.menu i');
//       menuIcon.classList.toggle('fa-bars');
//       menuIcon.classList.toggle('fa-times');
  
//       // links animation functionality
//       links.forEach((link, index) => {
//         if (link.style.animation) {
//           link.style.animation = '';
//         } else {
//           link.style.animation = `linksfade 0.5s ease forwards ${index / 5 + 0.5}s`;
//         }
//       });
//     });
//   }
  
//   navSlide();

const navSlide = () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.links');
  const links = document.querySelectorAll('.links li');

  // Function to toggle the nav bar and menu icon
  const toggleNav = () => {
      nav.classList.toggle('nav-active');

      // Toggle between 'fa-bars' and 'fa-times' classes
      const menuIcon = document.querySelector('.menu i');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-times');

      // Handle scrolling and body overflow
      if (nav.classList.contains('nav-active')) {
          document.body.style.overflow = 'hidden';
      } else {
          document.body.style.overflow = '';
      }

      // Links animation functionality
      links.forEach((link, index) => {
          // Reset animation property
          link.style.animation = '';

          if (nav.classList.contains('nav-active')) {
              link.style.animation = `linksfade 0.5s ease forwards ${index / 5 + 0.5}s`;
          }
      });
  };

  // Event listener for the menu click
  menu.addEventListener('click', toggleNav);

  // Function to close the navigation bar
  const closeNav = () => {
      nav.classList.remove('nav-active');
      const menuIcon = document.querySelector('.menu i');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
      document.body.style.overflow = '';
  };

  // Event listener for window scroll to hide the navigation bar
  window.addEventListener('scroll', () => {
      closeNav();
  });

  // Event listener for overlaying elements to close the navigation bar
  const overlayElements = document.querySelectorAll('.overlay'); // Replace '.overlay' with your actual overlay class or selector
  overlayElements.forEach((element) => {
      element.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent the click event from propagating to underlying elements
          closeNav();
      });
  });

  // Event listener for each link to close the navigation bar when clicked
  links.forEach((link) => {
      link.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevent the click event from propagating to overlaying elements
          closeNav();
      });
  });
};

navSlide();

// Function to validate the form before submission
    function validateForm(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        var firstName = document.getElementById('first_name').value;
        var lastName = document.getElementById('last_name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields before submitting the form.');
            return false;
        }

        // Generate the email address dynamically
        var emailAddress = 'lawnetmwas' + String.fromCharCode(64) + 'gmail.com';

        // Set the mailto link
        var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent('Contact Form Submission') +
            '&body=' + encodeURIComponent('First Name: ' + firstName + '\nLast Name: ' + lastName + '\nEmail: ' + email + '\n\n' + message);

        // Redirect to the mailto link in a new tab
        window.open(mailtoLink, '_blank');

        // Prevent the form from being submitted
        return false;
    }

  




  
  