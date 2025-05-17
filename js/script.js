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