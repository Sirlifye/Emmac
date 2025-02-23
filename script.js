// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.getElementById('navLinks');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = mobileMenu.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.setAttribute('data-lucide', 'x');
  } else {
    icon.setAttribute('data-lucide', 'menu');
  }
  lucide.createIcons();
  mobileMenu.blur();

  });




// Fleet Carousel
const carousel = document.getElementById('fleetCarousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? 10 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 10 ? 0 : currentIndex + 1;
  updateCarousel();
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formInputs = contactForm.querySelectorAll('input, textarea');

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
  input.classList.add('error');
}

function clearError(input) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = '';
  input.classList.remove('error');
}

formInputs.forEach(input => {
  input.addEventListener('input', () => {
    clearError(input);
  });
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let hasError = false;

  formInputs.forEach(input => {
    if (!input.value.trim()) {
      showError(input, `${input.name.charAt(0).toUpperCase() + input.name.slice(1)} is required`);
      hasError = true;
    } else if (input.type === 'email' && !validateEmail(input.value)) {
      showError(input, 'Please enter a valid email address');
      hasError = true;
    }
  });

  if (!hasError) {
    // Handle form submission
    console.log('Form submitted successfully');
    contactForm.reset();
  }
});

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Book now function for car rental
function bookNow() {
  const fleetCarousel = document.getElementById('fleetCarousel');
  fleetCarousel.scrollIntoView({ behavior: 'smooth' });


  // Pre-fill message with generic car rental booking inquiry
  const messageField = document.getElementById('message');
  if (messageField) {
      messageField.value = `I am interested in booking a car. Please provide more details about availability, quotation, and terms.`;
  }

  // Scroll to the contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
  }
}

