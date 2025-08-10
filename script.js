// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      
      // Toggle aria-expanded for accessibility
      const isExpanded = mobileMenu.classList.contains('active');
      mobileMenuButton.setAttribute('aria-expanded', isExpanded);
      
      // Toggle button text or icon
      const buttonText = isExpanded ? 'Close Menu' : 'Open Menu';
      mobileMenuButton.setAttribute('aria-label', buttonText);
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mobileMenu && mobileMenuButton && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuButton.contains(e.target) &&
        mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.setAttribute('aria-label', 'Open Menu');
    }
  });
  
  // Handle escape key to close mobile menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.setAttribute('aria-label', 'Open Menu');
      mobileMenuButton.focus(); // Return focus to the button
    }
  });
});
