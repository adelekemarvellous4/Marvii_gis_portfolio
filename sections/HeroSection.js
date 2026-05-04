(function () {
  function HeroSection() {
    return String.raw`<!-- Hero Section with Profile Picture -->
<section id="home" class="hero">
  <div class="hero-bg"></div>
  <div class="hero-grid"></div>
  <div class="container">
    <div class="hero-content">
      <!-- Profile Picture -->
      <div class="hero-profile">
        <div class="profile-image-wrapper">
          <!-- Add your photo here -->
          <img src= "assets/images/profile.jpg"    alt="Adeleke Marvellous Ayomide" class="profile-image" data-aos="zoom-in" data-aos-delay="200">
          <div class="profile-ring"></div>
          <div class="profile-status"></div>
        </div>
      </div>
      
      <p class="hero-greeting">Hi, I'm</p>
      <h1 class="hero-name">Adeleke Marvellous Ayomide</h1>
      
      <div class="hero-roles">
        <span>GIS Analyst</span>
        <span class="role-dot"></span>
        <span>Spatial Data Scientist</span>
        <span class="role-dot"></span>
        <span>Remote Sensing Specialist</span>
      </div>
      
      <p class="hero-description">
        I design spatial intelligence systems that transform satellite data, GIS workflows, and environmental modelling into actionable insights for land systems, climate analysis, and urban change.
      </p>
      
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">
          <span>View My Work</span>
          <i class="fas fa-arrow-right"></i>
        </a>
        <a href="mailto:adelekemarvellous4@gmail.com" class="btn btn-outline">
          <i class="fas fa-envelope"></i>
          <span>Get In Touch</span>
        </a>
      </div>
      
      <div class="hero-social">
        <a href="https://github.com/adelekemarvellous4" target="_blank" class="social-link" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/adelekemarvellous14" target="_blank" class="social-link" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/Marvii_gis" target="_blank" class="social-link" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com/adelekemarvellous4" target="_blank" class="social-link" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</section>`;
  }

  window.PortfolioSections = window.PortfolioSections || {};
  window.PortfolioSections.HeroSection = HeroSection;
})();

