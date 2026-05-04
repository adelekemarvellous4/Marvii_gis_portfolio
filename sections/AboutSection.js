(function () {
  function AboutSection() {
    return String.raw`<!-- About Section - Redesigned -->
<section id="about" class="about section">
  <div class="container">
    <div class="fade-up" style="text-align: center; margin-bottom: 3rem;">
      <span class="section-label">About Me</span>
      <p class="section-heading">Transforming geospatial data into actionable intelligence</p>
    </div>
    
    <div class="about-content">
      <p class="about-intro fade-up">
        I am a <strong>geospatial analyst</strong> specializing in remote sensing, spatial modelling, GIS programming, and environmental intelligence. My work focuses on extracting insights from satellite imagery, building predictive spatial models, and developing geospatial tools using Python and WebGIS technologies.
      </p>
    
      
      <!-- Tech Stack Grid -->
      <div class="tech-stack">
        <div class="tech-stack-header fade-up">
          <span class="section-label">Core Stack</span>
          <h3 style="font-size: 2rem; font-weight: 700; color: var(--white); font-family: var(--font-head); margin-top: 0.5rem;">Technologies & Tools</h3>
        </div>
        
        <div class="tech-grid">
          <div class="tech-category fade-up" style="transition-delay: 0.1s">
            <div class="tech-icon">
              <i class="fas fa-globe"></i>
            </div>
            <h4 class="tech-title">Geospatial</h4>
            <div class="tech-tags">
              <span class="tech-tag">ArcGIS Pro</span>
              <span class="tech-tag">QGIS</span>
              <span class="tech-tag">Google Earth Engine</span>
              <span class="tech-tag">Remote Sensing</span>
              <span class="tech-tag">Spatial Analysis</span>
            </div>
          </div>
          
          <div class="tech-category fade-up" style="transition-delay: 0.2s">
            <div class="tech-icon">
              <i class="fas fa-code"></i>
            </div>
            <h4 class="tech-title">Programming</h4>
            <div class="tech-tags">
              <span class="tech-tag">Python</span>
              <span class="tech-tag">R</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">GeoPandas</span>
              <span class="tech-tag">Rasterio</span>
            </div>
          </div>
          
          <div class="tech-category fade-up" style="transition-delay: 0.3s">
            <div class="tech-icon">
              <i class="fas fa-chart-area"></i>
            </div>
            <h4 class="tech-title">Data Science</h4>
            <div class="tech-tags">
              <span class="tech-tag">Machine Learning</span>
              <span class="tech-tag">Spatial ML</span>
              <span class="tech-tag">Statistical Modeling</span>
              <span class="tech-tag">Data Viz</span>
            </div>
          </div>
          
          <div class="tech-category fade-up" style="transition-delay: 0.4s">
            <div class="tech-icon">
              <i class="fas fa-laptop-code"></i>
            </div>
            <h4 class="tech-title">Development</h4>
            <div class="tech-tags">
              <span class="tech-tag">Git / GitHub</span>
              <span class="tech-tag">VS Code</span>
              <span class="tech-tag">Jupyter</span>
              <span class="tech-tag">WebGIS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`;
  }

  window.PortfolioSections = window.PortfolioSections || {};
  window.PortfolioSections.AboutSection = AboutSection;
})();

