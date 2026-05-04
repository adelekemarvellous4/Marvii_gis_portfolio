(function () {
  function Navigation() {
    return String.raw`<!-- Navigation -->
<nav class="site-nav nav" id="navbar">
  <div class="container nav-container">
    
    <a href="#home" class="nav-brand">
      <div class="nav-brand-mark">
        <div class="nav-logo">🗺️</div>
      </div>
      <div class="nav-brand-text">
        <span class="nav-brand-name">Adeleke M.</span>
        <span class="nav-brand-role">GIS • Remote Sensing • Spatial Data</span>
      </div>
    </a>

    <div class="nav-center-shell" id="mobileMenu">
      <div class="nav-links">
        <a href="#home" class="nav-link active">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#promises" class="nav-link">Why Work With Me</a>
        <a href="#certifications" class="nav-link">Certifications</a>
        <a href="#faq" class="nav-link">FAQ</a>
      </div>
    </div>

    <div class="nav-actions">
      <a href="#contact" class="nav-cta">
        <i class="fas fa-paper-plane"></i>
        <span>Let’s Talk</span>
      </a>

      <button class="nav-burger" id="burger-btn" type="button" aria-label="Toggle menu" aria-controls="mobileMenu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>
</nav>`;
  }

  window.PortfolioComponents = window.PortfolioComponents || {};
  window.PortfolioComponents.Navigation = Navigation;
})();

