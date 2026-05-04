(function () {
  function PromisesSection() {
    return String.raw`<!-- Why Work With Me -->
<section class="promises section" id="promises">
  <div class="container">
    <div class="fade-up promises-heading">
      <span class="section-label">Why Work With Me</span>
      <h2 class="section-heading">What I Bring to Geospatial Projects</h2>
      <p class="section-subtitle promises-subtitle">
        I combine technical GIS workflows, remote sensing analysis, and clear presentation to produce outputs that are both analytically sound and practically useful.
      </p>
    </div>

    <div class="promises-grid">
      <div class="promise-card fade-up">
        <div class="promise-icon-wrap">
          <div class="promise-icon">
            <i class="fas fa-satellite"></i>
          </div>
        </div>
        <div class="promise-content">
          <h3>Strong remote sensing and GIS analysis</h3>
          <p>
            I work with satellite imagery, spatial datasets, and geoprocessing tools to produce meaningful analysis across land cover, carbon, drought, suitability, and environmental monitoring projects.
          </p>
        </div>
      </div>

      <div class="promise-card fade-up" style="transition-delay: 0.1s">
        <div class="promise-icon-wrap">
          <div class="promise-icon">
            <i class="fas fa-layer-group"></i>
          </div>
        </div>
        <div class="promise-content">
          <h3>Clear outputs, not just raw maps</h3>
          <p>
            My work is designed to go beyond technical processing. I deliver maps, charts, reports, layouts, and visual stories that make findings understandable and usable.
          </p>
        </div>
      </div>

      <div class="promise-card fade-up" style="transition-delay: 0.2s">
        <div class="promise-icon-wrap">
          <div class="promise-icon">
            <i class="fas fa-people-arrows"></i>
          </div>
        </div>
        <div class="promise-content">
          <h3>Reliable communication and collaboration</h3>
          <p>
            I approach projects with structure, consistency, and transparency, so that expectations stay clear from the first discussion through analysis, interpretation, and final delivery.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>`;
  }

  window.PortfolioSections = window.PortfolioSections || {};
  window.PortfolioSections.PromisesSection = PromisesSection;
})();

