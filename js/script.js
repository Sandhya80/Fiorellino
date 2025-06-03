// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
  // Modal logic for My Account in the footer
  const myAccountFooter = document.getElementById('footerMyAccount');
  const loginModal = document.getElementById('loginModal');
  const closeLoginModal = document.getElementById('closeLoginModal');
  const loginSection = document.getElementById('loginSection');
  const registerSection = document.getElementById('registerSection');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  // Open modal from footer click
  if (myAccountFooter && loginModal) {
    myAccountFooter.addEventListener('click', function(e) {
      e.preventDefault();
      loginSection.style.display = 'block';
      registerSection.style.display = 'none';
      loginModal.style.display = 'flex';
    });
  }

  // Close modal when close button is clicked
  if (closeLoginModal && loginModal) {
    closeLoginModal.addEventListener('click', function() {
      loginModal.style.display = 'none';
    });
  }

  // Switch to Register section in modal
  if (showRegister) {
    showRegister.addEventListener('click', function(e) {
      e.preventDefault();
      loginSection.style.display = 'none';
      registerSection.style.display = 'block';
    });
  }

  // Switch to Login section in modal
  if (showLogin) {
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      registerSection.style.display = 'none';
      loginSection.style.display = 'block';
    });
  }

  // Close modal when clicking outside modal content
  window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Demo login form submission
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Login submitted!');
      loginModal.style.display = 'none';
    });
  }

  // Demo register form submission
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // You can add password match validation here if desired
      alert('Registration successful! An activation code has been sent to your email.');
      loginModal.style.display = 'none';
    });
  }
});

// Flip card logic: only one card flipped at a time
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.service-card');
    let flippedCard = null;
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Unflip previously flipped card if any
            if (flippedCard && flippedCard !== card) {
                flippedCard.classList.remove('flipped');
            }
            // Toggle flip on current card
            card.classList.toggle('flipped');
            flippedCard = card.classList.contains('flipped') ? card : null;
        });
    });
  });

  // Function to show the Thank You modal (for newsletter subscription)
    function showThankYouModal(event) {
      event.preventDefault(); // Prevent the form from submitting
      const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
      thankYouModal.show();
    }

// Search functionality for the navbar
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.getElementById('navbarSearchForm');
  const searchInput = document.getElementById('navbarSearchInput');

  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const keyword = searchInput.value.trim().toLowerCase();
      if (!keyword) return;

      // Remove previous highlights
      document.querySelectorAll('.search-highlight').forEach(el => {
        el.classList.remove('search-highlight');
      });

      // Search in all visible text nodes
      let found = false;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (
          node.parentElement &&
          !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentElement.tagName) &&
          node.nodeValue.toLowerCase().includes(keyword)
        ) {
          // Highlight the first match
          const span = document.createElement('span');
          span.className = 'search-highlight';
          const idx = node.nodeValue.toLowerCase().indexOf(keyword);
          span.textContent = node.nodeValue.substr(idx, keyword.length);
          const after = node.splitText(idx);
          after.nodeValue = after.nodeValue.substr(keyword.length);
          node.parentElement.insertBefore(span, after);
          span.scrollIntoView({ behavior: 'smooth', block: 'center' });
          found = true;
          break;
        }
      }
      if (!found) {
        alert('No results found for "' + keyword + '" on this page.');
      }
    });
  }
});

//Function to handle booking form submission(for Contact Us page)

 // Get the form element
      const bookingForm = document.querySelector('.booking-form');
    
      // Add a submit event listener to the form
      bookingForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();
    
        // Check if the form is valid
        if (bookingForm.checkValidity()) {
          // If valid, show the modal
          const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
          confirmationModal.show();
    
          // Optionally, reset the form after submission
          bookingForm.reset();
          bookingForm.classList.remove('was-validated');
        } else {
          // If invalid, show validation messages
          bookingForm.classList.add('was-validated');
        }
      });