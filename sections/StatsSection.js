(function () {
  function StatsSection() {
    return String.raw`<!-- Stats Section -->
<section class="stats section">
  <div class="container">
    <div class="stats-grid">
      <div class="stat-card fade-up">
        <div class="stat-icon">
          <i class="fas fa-project-diagram"></i>
        </div>
        <div class="stat-number" data-target="14">0</div>
        <div class="stat-label">Projects</div>
      </div>
      
      <div class="stat-card fade-up" style="transition-delay: 0.1s">
        <div class="stat-icon">
          <i class="fas fa-tools"></i>
        </div>
        <div class="stat-number" data-target="15">0</div>
        <div class="stat-label">Core Tools</div>
      </div>
      
      <div class="stat-card fade-up" style="transition-delay: 0.2s">
        <div class="stat-icon">
          <i class="fas fa-chart-line"></i>
        </div>
        <div class="stat-number" data-target="8">0</div>
        <div class="stat-label">Study Themes</div>
      </div>
      
      <div class="stat-card fade-up" style="transition-delay: 0.3s">
        <div class="stat-icon">
          <i class="fas fa-certificate"></i>
        </div>
        <div class="stat-number" data-target="7">0</div>
        <div class="stat-label">Certifications</div>
      </div>
    </div>
  </div>
</section>`;
  }

  window.PortfolioSections = window.PortfolioSections || {};
  window.PortfolioSections.StatsSection = StatsSection;
})();

