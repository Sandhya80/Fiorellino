document.addEventListener('DOMContentLoaded', function() {
  const myAccountFooter = document.getElementById('footerMyAccount');
  const loginModal = document.getElementById('loginModal');
  const closeLoginModal = document.getElementById('closeLoginModal');
  const loginSection = document.getElementById('loginSection');
  const registerSection = document.getElementById('registerSection');
  const showRegister = document.getElementById('showRegister');
  const showLogin = document.getElementById('showLogin');

  // Open modal from footer
  if (myAccountFooter && loginModal) {
    myAccountFooter.addEventListener('click', function(e) {
      e.preventDefault();
      loginSection.style.display = 'block';
      registerSection.style.display = 'none';
      loginModal.style.display = 'flex';
    });
  }

  // Close modal
  if (closeLoginModal && loginModal) {
    closeLoginModal.addEventListener('click', function() {
      loginModal.style.display = 'none';
    });
  }

  // Switch to Register
  if (showRegister) {
    showRegister.addEventListener('click', function(e) {
      e.preventDefault();
      loginSection.style.display = 'none';
      registerSection.style.display = 'block';
    });
  }

  // Switch to Login
  if (showLogin) {
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      registerSection.style.display = 'none';
      loginSection.style.display = 'block';
    });
  }

  // Close modal when clicking outside content
  window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // Login form submit (demo)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Login submitted!');
      loginModal.style.display = 'none';
    });
  }

  // Register form submit (demo)
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
            if (flippedCard && flippedCard !== card) {
                flippedCard.classList.remove('flipped');
            }
            card.classList.toggle('flipped');
            flippedCard = card.classList.contains('flipped') ? card : null;
        });
    });
  });

  // Function to show the Thank You modal
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