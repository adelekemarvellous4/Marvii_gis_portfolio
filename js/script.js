// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
  observer.observe(el);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active navigation link
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// Stats counter animation
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          entry.target.textContent = target;
          clearInterval(timer);
        } else {
          entry.target.textContent = Math.floor(current);
        }
      }, 16);
      
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(num => statsObserver.observe(num));

// Skills bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.getAttribute('data-progress');
      setTimeout(() => {
        entry.target.style.width = progress + '%';
      }, 100);
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillsObserver.observe(bar));

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// Mobile menu toggle
const burgerBtn = document.getElementById('burger-btn');
const navLinksContainer = document.querySelector('.nav-links');

burgerBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// Smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


const eliteProjects = [
  {
    id: 'akure-carbon',
    number: '01',
    icon: '🌳',
    title: 'Urban Expansion and Vegetation Carbon Dynamics in Akure Peri-Urban Region (1986–2025)',
    category: 'Remote Sensing • Carbon Modelling • Change Detection',
    description: 'A multi-temporal land cover and carbon dynamics study that quantified how peri-urban expansion restructured forest extent, altered transition pathways, and reduced the carbon retention function of the Akure landscape.',
    objective: 'To measure the ecological cost of urban expansion by linking land cover transformation directly to forest decline, carbon loss, and transition dynamics over nearly four decades.',
    methods: ['Landsat multi-temporal imagery', 'Random Forest classification', 'Post-classification change detection', 'RDVI-based AGB and carbon modelling', 'ArcGIS Pro spatial analysis and cartography'],
    metrics: ['Forest declined from ~220,394 ha to ~175,071 ha', 'Built-up expanded from ~4,320 ha to ~44,836 ha', 'Forest-to-nonforest carbon loss ≈ 706,566 tC', 'Forest→Bare/Rock contributed ~74.5% of loss'],
    insight: 'Urban growth did not simply replace vegetation spatially. It progressively weakened ecosystem carbon storage, with bare land functioning as a major transition stage before permanent urban conversion.',
    tools: ['ArcGIS Pro', 'Landsat', 'Random Forest', 'RDVI'],
    visualLabel: 'Land cover, transition, and carbon loss maps',
    image: "assets/akure-carbon.png",
    storymap: 'https://arcg.is/1H4PGn3', report: 'https://drive.google.com/file/d/19yU7Src6y6SVmciQ6bpsFSnoSkg9Ql_H/view?usp=sharing', caseStudy: '#',
    theme: 'Climate & Carbon',
    workflow: ['Prepare multi-temporal Landsat composites.', 'Classify vegetation, built-up, and bare land.', 'Run transition and change detection analysis.', 'Model AGB and carbon storage from RDVI.'],
    outputs: ['LULC maps', 'Transition maps', 'Carbon loss visuals', 'StoryMap-ready charts']
  },
  {
    id: 'frin-carbon',
    number: '02',
    icon: '🌿',
    title: 'Vegetation Health and Carbon Stock Assessment of FRIN, Ibadan',
    category: 'Forest Monitoring • Biomass Estimation • Climate Analysis',
    description: 'A temporal forest monitoring analysis across 2020, 2023, and 2025 that translated vegetation greenness into biomass and carbon storage to assess recovery, maturity, and edge vulnerability within FRIN.',
    objective: 'To evaluate how changes in vegetation vigor correspond to structural biomass gain and carbon sequestration potential within a managed forest reserve.',
    methods: ['Landsat multi-year imagery', 'NDVI mapping and change analysis', 'Exponential AGB modelling', 'IPCC-based carbon conversion', 'Comparative temporal interpretation'],
    metrics: ['Mean NDVI increased from 0.45 to 0.63', 'Mean AGB increased from 210 t/ha to 275 t/ha', 'Mean carbon stock increased from 105 tC/ha to 138 tC/ha', 'Peak NDVI rose from 0.755 to 0.8619'],
    insight: 'The forest core behaved as a resilient biomass and carbon reservoir, while boundary zones repeatedly expressed the signature of disturbance, fragmentation, and localized decline.',
    tools: ['ArcGIS Pro', 'Landsat', 'NDVI', 'AGB'],
    visualLabel: 'Vegetation health and carbon stock maps',
    image: "assets/frin_ndvi.png",
    storymap: '#', report: 'https://drive.google.com/file/d/1bHBtZ8I5KvrcscK7T91YFg5uNylSIZSq/view?usp=sharing', caseStudy: '#',
    theme: 'Climate & Carbon',
    workflow: ['Acquire multi-year imagery.', 'Map NDVI and temporal change.', 'Estimate above-ground biomass.', 'Convert biomass to carbon stock and interpret spatially.'],
    outputs: ['NDVI maps', 'AGB maps', 'Carbon stock maps', 'Temporal comparison charts']
  },
  {
    id: 'osogbo-gradient',
    number: '03',
    icon: '📉',
    title: 'Carbon Storage and Urbanization Gradient Analysis in Osogbo Peri-Urban Areas',
    category: 'Urban Ecology • Carbon Density • Gradient Analysis',
    description: 'A long-term peri-urban carbon analysis using RDVI-based biomass sensitivity modelling to reconstruct how urban pressure altered vegetation carbon density across LGAs with different levels of development intensity.',
    objective: 'To convert urban expansion into measurable ecological cost by quantifying vegetation carbon loss through time and across the urban–peri-urban–rural gradient.',
    methods: ['Landsat 5, 7, and 8 imagery', 'RDVI/RBDI-based biomass modelling', 'AGB and carbon estimation', 'LGA-level temporal comparison', 'ArcGIS raster analysis and visualization'],
    metrics: ['High-carbon area was ~28,500 ha in 1986', 'High-carbon area fell to ~1,649 ha by 2002', 'Recovery peaked around 44,291 ha in 2014', 'By 2022, LGAs had lost 45–55% of peak carbon density'],
    insight: 'Urbanization pressure was spatially uneven but ecologically consistent: areas nearest to urban influence showed the highest volatility and the strongest carbon decline.',
    tools: ['ArcGIS Pro', 'Landsat', 'RDVI', 'Raster Analysis'],
    visualLabel: 'Urban gradient and carbon density visuals',
    image: "assets/osogbo-carbon.png",
    storymap: '#', report: 'https://drive.google.com/file/d/1mvmWJST8Sb9wBeDxbWxSH_CECVxYyPVH/view?usp=sharing', caseStudy: '#',
    theme: 'Climate & Carbon',
    workflow: ['Compile time-series imagery.', 'Model biomass and carbon from RDVI.', 'Compare LGA-level urbanization gradient patterns.', 'Interpret long-term carbon decline.'],
    outputs: ['Carbon density maps', 'Gradient comparison graphics', 'LGA summary panels', 'Trend charts']
  },
  {
    id: 'oyo-health',
    number: '04',
    icon: '🏥',
    title: 'Optimal Sites for New Health Outposts in Rural Oyo State',
    category: 'Suitability Analysis • Accessibility • Health GIS',
    description: 'A healthcare suitability project identifying underserved rural locations most appropriate for new health outposts using accessibility, environmental, and land suitability criteria.',
    objective: 'To support rural healthcare planning by locating areas with poor access to facilities but strong suitability for new health infrastructure.',
    methods: ['Healthcare facility and road network analysis', 'Euclidean distance modelling', 'NDVI and land cover integration', 'Reclassification and weighted overlay', 'ArcMap suitability mapping'],
    metrics: ['Underserved rural LGAs prioritized', 'Accessibility thresholds applied to roads and facilities', 'Weighted suitability surfaces generated', 'Priority zones isolated for planning'],
    insight: 'The strongest sites emerged where accessibility gaps, supportive land conditions, and low conflict with existing facilities overlapped spatially.',
    tools: ['ArcMap', 'Weighted Overlay', 'Euclidean Distance', 'NDVI'],
    visualLabel: 'Suitability map and access gap visuals',
    image: "assets/Oyo_State.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Suitability & Planning',
    workflow: ['Prepare roads, facilities, NDVI, and land cover data.', 'Generate Euclidean distance rasters.', 'Reclassify each factor into suitability classes.', 'Run weighted overlay to produce final site priorities.'],
    outputs: ['Suitability map', 'Constraint maps', 'Priority site visuals', 'Planning summary']
  },
  {
    id: 'lekki-wetland',
    number: '05',
    icon: '🌊',
    title: 'Wetland Loss Analysis of Lekki FTZ and Port Corridor (2018–2024)',
    category: 'Coastal Change • Wetland Monitoring • GEE Workflow',
    description: 'A multi-temporal wetland loss study that tracked annual land cover change in the Lekki industrial corridor and quantified how wetland surfaces were progressively converted through reclamation and infrastructure expansion.',
    objective: 'To quantify the ecological cost of infrastructure-led coastal transformation by measuring annual and cumulative wetland decline between 2018 and 2024.',
    methods: ['Sentinel-2 Level-2A imagery', 'Dry-season annual median composites', 'Rule-based multi-index classification', 'Post-classification change detection', 'GEE processing with ArcGIS refinement'],
    metrics: ['Wetland declined from 4,950 ha to 4,240 ha', 'Net wetland loss = 710 ha (14.3%)', 'Largest single-year loss = 630 ha in 2022–2023'],
    insight: 'The dominant conversion pathway from wetland to bare soil and later built-up surfaces shows that ecological loss occurred in staged development phases rather than in one-time replacement.',
    tools: ['Google Earth Engine', 'Sentinel-2', 'ArcGIS Pro', 'Change Detection'],
    visualLabel: 'Wetland trend and loss maps',
    image: "assets/wetland_loss.png",
    storymap: '#', report: 'https://drive.google.com/file/d/1Pr0vuyBWaYPdd733zXwthuAvr7wsPJAW/view?usp=sharing', caseStudy: '#',
    theme: 'Environmental Monitoring',
    workflow: ['Generate annual dry-season composites.', 'Classify wetland and related classes.', 'Compare yearly maps to detect loss.', 'Visualize staged conversion with charts and maps.'],
    outputs: ['Wetland trend chart', 'LULC maps', 'Wetland loss maps', 'Industrial corridor interpretation']
  },
  {
    id: 'abua-oilspill',
    number: '06',
    icon: '🛢️',
    title: 'Oil Spill Monitoring and Environmental Impact Assessment in Abua/Odual',
    category: 'Environmental Monitoring • Spill Impact • Terrain Analysis',
    description: 'A pre- and post-spill impact analysis integrating vegetation, moisture, land cover, terrain, and drainage data to examine how oil contamination interacted with a vulnerable floodplain landscape.',
    objective: 'To detect how oil contamination altered vegetation condition, hydrological patterns, and landscape structure within a spill-affected wetland environment.',
    methods: ['Sentinel-2 temporal compositing', 'NDVI and NDWI change detection', 'Unsupervised LULC clustering', 'SRTM terrain and slope analysis', 'Drainage and stream-order modelling'],
    metrics: ['Negative NDVI patches indicated vegetation degradation', 'Post-spill land cover showed localized bare surface expansion', 'Low-relief terrain increased spread potential'],
    insight: 'In low-slope floodplain environments, oil spills behave as both ecological and hydrological disturbances because terrain conditions allow contaminants to spread laterally through wetlands and drainage pathways.',
    tools: ['Sentinel-2', 'SRTM', 'NDVI', 'Drainage Analysis'],
    visualLabel: 'Spill impact, NDVI, and drainage visuals',
    image: "assets/oil_spill.png",
    storymap: '#', report: 'https://drive.google.com/file/d/1GnbXNCY9z35KeTQAe-tPBZKvpgU5mBbg/view?usp=sharing', caseStudy: '#',
    theme: 'Environmental Monitoring',
    workflow: ['Create pre-spill and post-spill composites.', 'Map NDVI and NDWI change.', 'Classify land cover before and after the spill.', 'Use terrain and drainage analysis to explain spread dynamics.'],
    outputs: ['NDVI change map', 'NDWI change map', 'LULC comparison', 'Slope and drainage visuals']
  },
  {
    id: 'osun-drought',
    number: '07',
    icon: '🌾',
    title: 'Crop Suitability and Drought Assessment of Osun State Using Google Earth Engine',
    category: 'Agrometeorology • Spectral Indices • Drought Monitoring',
    description: 'A cloud-based state-scale agricultural suitability and drought assessment integrating vegetation vigor, chlorophyll sensitivity, and moisture stress indicators into one spatial decision-support framework.',
    objective: 'To evaluate where crop conditions are favorable and where drought stress is emerging by combining vegetation and moisture diagnostics within a reproducible GEE workflow.',
    methods: ['Landsat 9 surface reflectance', 'Cloud masking and compositing in GEE', 'NDWI, NDMI, SAVI, EVI, GCVI, ARVI', 'MSI and SMAD drought assessment', 'Export for cartographic refinement'],
    metrics: ['Statewide crop suitability layers produced', 'Drought hotspot surfaces generated', 'Moisture and vegetation gradients separated northern and southern contrasts'],
    insight: 'Suitability is strongest where vegetation vigor, moisture availability, and low stress overlap spatially, not simply where vegetation looks greenest.',
    tools: ['Google Earth Engine', 'Landsat 9', 'MODIS LST', 'SMAD'],
    visualLabel: 'Suitability and drought indicator maps',
    image: "assets/crop_suitability.png",
    storymap: '#', report: 'https://drive.google.com/file/d/1YJuYezGAiSo89ErRnWo5cjyI_Vu8rggE/view?usp=sharing', caseStudy: '#',
    theme: 'Climate & Carbon',
    workflow: ['Process Landsat data with masking and compositing.', 'Compute vegetation and moisture indices.', 'Compute drought-related indices.', 'Interpret statewide spatial patterns.'],
    outputs: ['Suitability index maps', 'Drought index maps', 'Statewide interpretation panels', 'Indicator exports']
  },
  {
    id: 'owan-lst',
    number: '08',
    icon: '🌡️',
    title: 'Spatial and Tempral Analysis of Land Surface Temperature and Vegetation Dynamics: A case study of Akoko North East LGA (2015–2025)',
    category: 'Thermal Remote Sensing • NDVI–LST • Climate Analysis',
    description: 'A decade-scale thermal analysis examining how vegetation condition and land transformation influenced warming patterns across Owan West.',
    objective: 'To retrieve emissivity-corrected land surface temperature and evaluate how vegetation change influenced surface heating over time.',
    methods: ['Landsat thermal and reflective bands', 'NDVI computation', 'Radiance and brightness temperature conversion', 'Emissivity-corrected LST retrieval', 'Change detection and zonal analysis'],
    metrics: ['2014 and 2024 LST surfaces produced', 'Hotspot zones aligned with sparse vegetation', 'NDVI–LST relationship interpreted spatially', 'Warming trend areas mapped'],
    insight: 'Surface heating intensified where vegetation weakened and human-modified surfaces expanded, confirming the local climate role of land cover transformation.',
    tools: ['Landsat', 'LST', 'NDVI', 'ArcGIS'],
    visualLabel: 'LST, NDVI, and change maps',
    image: "assets/lst_akoko_north.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Urban Climate',
    workflow: ['Prepare thermal and reflective bands.', 'Compute NDVI and vegetation proportion.', 'Convert radiance to brightness temperature and LST.', 'Compare thermal behavior spatially across years.'],
    outputs: ['LST maps', 'NDVI maps', 'Temperature change maps', 'Thermal interpretation summary']
  },
  {
    id: 'urban-heat-island',
    number: '09',
    icon: '🌲',
    title: 'Mapping Urban Heat Islands in Akure South, Ondo State',
    category: 'Forest Monitoring • Biomass Estimation • Carbon Mapping',
    description: 'This study mapped the Urban Heat Island (UHI) pattern in Akure South by integrating thermal data (LST) and vegetation density (NDVI), and applying a percentile-based hotspot delineation technique. This reveal the  spatial disparity in heat intensity across the LGA, with UHI concentrated in built-up neighbourhoods where vegetation has been significantly reduced..',
    objective: 'To estimate and compare forest biomass and carbon density patterns using vegetation index sensitivity across forested landscapes in Osun State.',
    methods: ['Acquisition oof Setinel-2 Images for NDVI and Landsat-9 for LST.', 'Computation of NDVI and LST and Resampling of NDVI to 30m resolution', 'Delineation of area with >70% LST & <30% NDVI', 'Visualisation of delineated areas as the Urban Heat Island', 'Production of maps'],
    metrics: ['Forest-only carbon surfaces generated', 'Carbon density compared across LGAs', 'RDVI patterns linked to biomass variation', 'Forest carbon hotspots identified'],
    insight: 'Carbon density was spatially uneven, reflecting differences in forest condition, disturbance history, and local environmental structure.',
    tools: ['Landsat', 'Setinel-2', 'Geemap', 'ArcGIS Pro'],
    visualLabel: 'Carbon density and forest condition maps',
    image: "assets/urban_heat.png",
    storymap: 'https://arcg.is/1jWiiz4', report: 'https://drive.google.com/file/d/1-8QA2dkijEGf28qa1GhUuJBgOSngTPJC/view?usp=sharing', caseStudy: '#',
    theme: 'Environmental Monitoring',
    workflow: ['Acquisition oof Setinel-2 Images for NDVI and Landsat-9 for LST.', 'Computation of NDVI and LST and Resampling of NDVI to.', 'Delineation of area with >70% LST & <30% NDVI.', 'Visualisation of delineated areas as the Urban Heat Island.'],
    outputs: ['RDVI maps', 'Biomass surfaces', 'Carbon density maps', 'Forest interpretation panels']
  },
  {
    id: 'air-pollution-modelling',
    number: '10',
    icon: '💧',
    title: 'Spatial Modelling of Air Pollution Using GWR in Lagos State',
    category: 'Spatial Statistics • Correlation • Regression',
    description: 'The study demonstrates the capability of Geographically Weighted REgression (GWR) in identifying spatially varying drivers of air pollution and provides actionable insights for urban planners and environmental policymakers to develop targeted air quality management strategies in Lagos State.',
    objective: 'To evaluate the statistical relationship and regression between Land Cover, Vegetation, Topography, on the spatial distribution of NO2(Air Pollution) in Lagos state.',
    methods: ['Point data preparation', 'IDW interpolation', 'DEM extraction', 'Correlation matrix analysis', 'Regression and exploratory statistics'],
    metrics: ['Correlation tables generated', 'Regression outputs compared', 'IDW and DEM elevation relationships evaluated', 'Spatial-statistical patterns summarized'],
    insight: 'The comparison showed how elevation source and interpolation approach influence the interpretation of groundwater-linked spatial patterns.',
    tools: ['ArcGIS Pro', 'IDW', 'DEM', 'Statistics'],
    visualLabel: 'Coefficent Regression maps, Local R2 maps, Residual maps ',
    image: "assets/gwr_lagos.png",
    storymap: 'https://arcg.is/1fDjyn4', report: 'https://drive.google.com/file/d/1bitnBOB1dk_-k2ArysH-uuIv_zhM4xXF/view?usp=sharing', caseStudy: '#',
    theme: 'Data Science & Modelling',
    workflow: ['Prepare well depth and elevation attributes.', 'Generate IDW surfaces.', 'Compare against DEM values.', 'Run correlation and regression analysis.'],
    outputs: ['Correlation tables', 'Regression outputs', 'Elevation comparison plots', 'Integrated report']
  },
  {
    id: 'dsmw-soils',
    number: '11',
    icon: '🧱',
    title: 'DSMW Soil Mapping and Interpretation',
    category: 'Soil Mapping • Spatial Interpretation • Environmental Analysis',
    description: 'A soil mapping project using DSMW-based spatial interpretation to characterize dominant soil units, distribution patterns, and suitability implications.',
    objective: 'To interpret mapped soil classes spatially and translate them into a clear environmental narrative for the study area.',
    methods: ['DSMW data acquisition', 'Clipping to study area', 'Soil class interpretation', 'Map composition', 'Environmental reporting'],
    metrics: ['Dominant soil groups identified', 'Spatial distribution mapped', 'Suitability implications summarized', 'Report-ready map output produced'],
    insight: 'The strongest value of the map came from translating static soil classes into an environmental explanation of constraints, patterns, and suitability.',
    tools: ['DSMW', 'ArcGIS', 'Map Layout', 'Interpretation'],
    visualLabel: 'Soil map and interpretation layout',
    image: "assets/dsmw_map.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Data Science & Modelling',
    workflow: ['Acquire and clip DSMW layers.', 'Map dominant soil groups.', 'Interpret spatial patterns.', 'Summarize environmental implications.'],
    outputs: ['DSMW soil map', 'Soil unit summary', 'Study area interpretation', 'Soil report narrative']
  },
  {
    id: 'akoko-lst',
    number: '12',
    icon: '☀️',
    title: 'Spatial and Temporal Dynamics of Land Surface Temperature in Akoko North East',
    category: 'Thermal Remote Sensing • Climate Analysis • NDVI–LST Coupling',
    description: 'A decade-scale thermal study comparing 2015 and 2025 Landsat imagery to quantify surface warming and explain how vegetation decline and human activity altered thermal behavior.',
    objective: 'To retrieve emissivity-corrected land surface temperature and evaluate how vegetation change influenced surface heating over time.',
    methods: ['Landsat 8 OLI/TIRS', 'NDVI computation', 'Radiance and brightness temperature conversion', 'Emissivity-corrected LST retrieval', 'Change detection and zonal analysis'],
    metrics: ['2015 LST ranged ~23.4°C–38.6°C', '2025 LST ranged ~26.44°C–43.06°C', 'Higher temperatures aligned with sparse vegetation and built-up surfaces'],
    insight: 'The rise in surface thermal intensity between 2015 and 2025 confirms that vegetation loss and land transformation are major local-scale drivers of heating.',
    tools: ['Landsat 8', 'LST', 'NDVI', 'Zonal Analysis'],
    visualLabel: 'Thermal maps and NDVI–LST comparison',
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Urban Climate',
    workflow: ['Prepare Landsat thermal and reflective bands.', 'Compute NDVI and vegetation proportion.', 'Convert radiance to brightness temperature and then to LST.', 'Compare 2015 and 2025 thermal behavior spatially.'],
    outputs: ['LST maps', 'NDVI maps', 'LST change interpretation', 'Climate-focused discussion']
  },
  {
    id: 'multistate-lulc',
    number: '13',
    icon: '🗺️',
    title: 'Land Use / Land Cover Mapping Across a Multi-State Southwestern Nigeria Landscape',
    category: 'LULC Mapping • Supervised Classification • Spectral Indices',
    description: 'A broad-area land cover classification project that mapped forest, vegetation, built-up, bare ground, rock outcrop, and water classes while combining index-based interpretation with supervised image classification.',
    objective: 'To build a spatially explicit baseline dataset for land resource characterization, ecological interpretation, and future change detection across a complex multi-state landscape.',
    methods: ['Landsat 9 imagery', 'Band compositing and clipping', 'Maximum Likelihood classification', 'NDVI, NDWI, and NDBI interpretation', 'ArcGIS thematic mapping'],
    metrics: ['Vegetation covered 7,267 km² (59%)', 'Rock outcrop covered 2,337 km² (19%)', 'Built-up covered 869 km² (~7%)', 'Water body covered 20 km² (<1%)'],
    insight: 'The study area remained vegetation dominated, but the spectral signatures indicated a structurally mixed landscape under increasing anthropogenic pressure rather than an intact, dense forest system.',
    tools: ['Landsat 9', 'Maximum Likelihood', 'NDVI', 'ArcGIS'],
    visualLabel: 'Regional LULC maps and area charts',
    image: "assets/lulc.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Environmental Monitoring',
    workflow: ['Acquire and composite Landsat imagery.', 'Classify major land cover categories.', 'Support interpretation with NDVI, NDWI, and NDBI.', 'Quantify area by class and interpret land composition.'],
    outputs: ['LULC map', 'Area charts', 'Index maps', 'Baseline analysis summary']
  },
  {
    id: 'ozone-california',
    number: '14',
    icon: '📊',
    title: 'Geostatistical Ozone Modelling and Probability Mapping in California',
    category: 'Kriging • Cross-validation • Threshold Risk Mapping',
    description: 'A geostatistical ozone interpolation study comparing default kriging, trend-removed kriging, and indicator kriging to evaluate prediction quality, bias, uncertainty, and exceedance probability.',
    objective: 'To transform discrete ozone point observations into a continuous predictive surface and a probability-based environmental risk product.',
    methods: ['Histogram and QQ diagnostics', 'Semivariogram and trend analysis', 'Default and trend-removed kriging', 'Indicator kriging threshold mapping', 'Cross-validation comparison'],
    metrics: ['Near-normal ozone distribution with slight negative skew', 'Default kriging had slightly lower RMSE', 'Trend-removed kriging reduced bias', 'Indicator kriging mapped exceedance risk at threshold 0.09'],
    insight: 'The analysis progressed from value prediction to uncertainty-aware decision support by showing not only where ozone was predicted to be high, but where critical thresholds were likely to be exceeded.',
    tools: ['Kriging', 'Semivariogram', 'Cross-validation', 'Indicator Kriging'],
    visualLabel: 'Ozone surfaces and probability maps',
    image: "assets/geostatistical.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Data Science & Modelling',
    workflow: ['Explore statistical distribution and normality assumptions.', 'Build and evaluate semivariogram and trend behavior.', 'Compare default and trend-removed kriging.', 'Map threshold exceedance probability with indicator kriging.'],
    outputs: ['Kriged ozone surfaces', 'Cross-validation comparison', 'Probability map', 'Model interpretation summary']
  },
  {
    id: 'hydrological-overlay',
    number: '15',
    icon: '🌐',
    title: 'Hydrological Process Mapping with Vector Overlay',
    category: 'Overlay Analysis • Slope • Geology • Land Use',
    description: 'Integrated slope, geology, and land use layers to interpret permeability patterns and dominant hydrological behavior across terrain units.',
    objective: 'To explain hydrological behavior by integrating multiple thematic layers into one interpretable terrain process model.',
    methods: ['Vector overlay analysis', 'Slope interpretation', 'Geology integration', 'Land use comparison', 'Hydrological synthesis'],
    metrics: ['Permeability patterns mapped', 'Hydrological terrain units interpreted', 'Overlay-based process zones identified'],
    insight: 'Hydrological behavior became clearer when terrain, geology, and land use were interpreted together rather than as isolated layers.',
    tools: ['ArcGIS', 'Overlay', 'Slope', 'Geology'],
    visualLabel: 'Hydrological overlay process map',
    image: "assets/vector_overlay.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Data Science & Modelling',
    workflow: ['Prepare slope, geology, and land use layers.', 'Overlay thematic datasets.', 'Interpret permeability and runoff relationships.', 'Summarize dominant hydrological processes.'],
    outputs: ['Overlay maps', 'Process interpretation panels', 'Terrain summaries', 'Hydrological notes']
  },
  {
    id: 'akure-south-field',
    number: '16',
    icon: '📍',
    title: 'Field Mapping and Spatial Analysis of Akure South',
    category: 'Ground Survey • Kernel Density • IDW • Regression',
    description: 'Collected primary geospatial data on wells, transformers, schools, and healthcare facilities, then used density mapping, buffering, interpolation, and statistics for interpretation.',
    objective: 'To integrate field-collected point data with GIS analytics in order to reveal distributional patterns, service relationships, and spatial trends.',
    methods: ['Field GPS data collection', 'Kernel density mapping', 'Buffer analysis', 'IDW interpolation', 'Regression and correlation'],
    metrics: ['Primary datasets collected and georeferenced', 'Service density surfaces created', 'Interpolation and regression outputs produced'],
    insight: 'Field GIS becomes more valuable when primary observations are extended into spatial patterns and relationships through analytical modelling.',
    tools: ['GPS Survey', 'Kernel Density', 'IDW', 'Regression'],
    visualLabel: 'Field mapping outputs and density surfaces',
    image: "assets/akure_south.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Suitability & Planning',
    workflow: ['Collect and georeference field points.', 'Map service density and buffers.', 'Generate interpolation surfaces.', 'Interpret statistical and spatial patterns.'],
    outputs: ['Density maps', 'Buffers', 'Interpolation surfaces', 'Field survey summary']
  },
  {
    id: 'highway-modelbuilder',
    number: '17',
    icon: '🛣️',
    title: 'Highway Proximity ModelBuilder Workflow',
    category: 'ArcMap • Automation • Buffer • Intersect • SQL',
    description: 'Built a reusable ArcGIS ModelBuilder workflow for proximity analysis, filtering, parameterization, and alternate scenario testing.',
    objective: 'To automate repeatable spatial proximity analysis through a reusable ModelBuilder workflow that supports filtering and scenario testing.',
    methods: ['ModelBuilder design', 'Buffer generation', 'Intersect and selection', 'SQL filtering', 'Workflow parameterization'],
    metrics: ['Reusable automation model produced', 'Multiple scenario tests supported', 'Manual GIS steps reduced'],
    insight: 'Workflow automation improves consistency and speed, especially when a proximity analysis must be rerun under multiple assumptions.',
    tools: ['ArcMap', 'ModelBuilder', 'Buffer', 'SQL'],
    visualLabel: 'ModelBuilder workflow and analysis output',
    image: "assets/proximity.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Data Science & Modelling',
    workflow: ['Design the ModelBuilder chain.', 'Generate buffers and intersections.', 'Apply SQL filtering.', 'Test alternate scenarios and export outputs.'],
    outputs: ['ModelBuilder diagram', 'Proximity outputs', 'Scenario comparison', 'Workflow documentation']
  },
  {
    id: 'akure-north-structural',
    number: '18',
    icon: '🧭',
    title: 'Structural and Drainage Analysis of Akure North',
    category: 'Lineaments • Stream Order • Rose Diagram',
    description: 'Mapped contour, drainage, stream order, lineaments, and structural orientation to interpret terrain organization and hydrological relationships.',
    objective: 'To understand structural controls on drainage organization by combining terrain, lineament, and stream-order mapping.',
    methods: ['Contour analysis', 'Drainage extraction', 'Stream order mapping', 'Lineament interpretation', 'Rose diagram analysis'],
    metrics: ['Drainage hierarchy mapped', 'Lineament trends identified', 'Structural orientation summarized'],
    insight: 'Drainage organization reflected structural controls, showing that terrain and lineament orientation jointly influence hydrological patterning.',
    tools: ['Drainage Analysis', 'Lineaments', 'Rose Diagram', 'ArcGIS'],
    visualLabel: 'Drainage network and structural orientation maps',
    image: "assets/structural_drainage.png",
    storymap: '#', report: '#', caseStudy: '#',
    theme: 'Data Science & Modelling',
    workflow: ['Prepare DEM-derived drainage layers.', 'Map stream order and contours.', 'Interpret lineaments and orientation.', 'Relate structural trends to drainage pattern.'],
    outputs: ['Drainage maps', 'Lineament map', 'Rose diagram', 'Structural interpretation']
  }
];

const libraryFilters = ['All', 'Climate & Carbon', 'Environmental Monitoring', 'Suitability & Planning', 'Urban Climate', 'Data Science & Modelling'];
let activeLibraryFilter = 'All';

function projectPlaceholder(title, subtitle) {
  const safeTitle = title.replace(/&/g, '&amp;');
  const safeSubtitle = subtitle.replace(/&/g, '&amp;');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#07152f"/>
          <stop offset="100%" stop-color="#03101f"/>
        </linearGradient>
        <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0a2747" stop-opacity="0.92"/>
          <stop offset="100%" stop-color="#08192d" stop-opacity="0.92"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#bg)"/>
      <g opacity="0.22">
        <circle cx="230" cy="180" r="180" fill="#22d3ee"/>
        <circle cx="1280" cy="220" r="210" fill="#10b981"/>
        <circle cx="1180" cy="720" r="250" fill="#0ea5e9"/>
      </g>
      <g stroke="#17375f" stroke-width="1" opacity="0.35">
        <path d="M0 180H1600M0 360H1600M0 540H1600M0 720H1600"/>
        <path d="M200 0V900M400 0V900M600 0V900M800 0V900M1000 0V900M1200 0V900M1400 0V900"/>
      </g>
      <rect x="120" y="120" width="1360" height="660" rx="36" fill="url(#card)" stroke="#1a4c73" stroke-width="2"/>
      <rect x="180" y="180" width="520" height="250" rx="24" fill="#0b2038" stroke="#1d547e"/>
      <rect x="740" y="180" width="680" height="120" rx="24" fill="#0b2038" stroke="#1d547e"/>
      <rect x="740" y="330" width="680" height="100" rx="24" fill="#0b2038" stroke="#1d547e"/>
      <rect x="180" y="470" width="1240" height="130" rx="24" fill="#0b2038" stroke="#1d547e"/>
      <rect x="180" y="635" width="340" height="74" rx="37" fill="#0a2c48" stroke="#22d3ee"/>
      <text x="180" y="105" font-family="Inter, Arial, sans-serif" font-size="28" letter-spacing="6" fill="#67e8f9">PROJECT VISUAL SLOT</text>
      <text x="180" y="690" font-family="Space Grotesk, Arial, sans-serif" font-size="34" fill="#e2e8f0">Replace this area with your landscape map or screenshot</text>
      <text x="180" y="780" font-family="Space Grotesk, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">${safeTitle}</text>
      <text x="180" y="835" font-family="Inter, Arial, sans-serif" font-size="28" fill="#9ecfe1">${safeSubtitle}</text>
    </svg>`;
  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
}
function buildProjectCard(project) {
  const methods = project.methods.map(item => `<span class="method-tag">${item}</span>`).join('');
  const tools = project.tools.map(item => `<span class="project-meta-pill"><i class="fas fa-layer-group"></i>${item}</span>`).join('');
  const outputs = project.outputs.map(item => `<li>${item}</li>`).join('');
  const metricsList = project.metrics.map(item => `<div class="portfolio-metric-item">${item}</div>`).join('');
  const imageSrc = project.image || projectPlaceholder(project.title, project.visualLabel);

  return `
    <article class="elite-project-card fade-up" data-theme="${project.theme}">
      <div class="elite-project-inner">
        
        <div class="project-visual-panel">
          <div class="project-image-wrap">
            <img src="${imageSrc}" alt="${project.title} visual placeholder" />
            <div class="project-image-overlay">
              <span class="project-image-note"><i class="fas fa-image"></i>${project.visualLabel}</span>
              <div class="project-quick-links">
                <a href="${project.storymap}" class="quick-link" aria-label="View StoryMap"><i class="fas fa-map"></i></a>
                <a href="${project.report}" class="quick-link" aria-label="View Report"><i class="fas fa-file-lines"></i></a>
              </div>
            </div>
          </div>

          <div class="project-content-panel project-left-content">
            <div class="project-topline">
              <div class="project-number">FEATURED PROJECT ${project.number}</div>
              <span class="project-featured-badge">${project.icon} Elite Case Study</span>
            </div>

            <h3 class="project-title">${project.title}</h3>
            <div class="project-category">${project.category}</div>
            <p class="project-description project-description-left">${project.description}</p>

            <div class="project-meta-strip">
              <span class="project-meta-pill"><i class="fas fa-folder-open"></i>${project.theme}</span>
              ${tools}
            </div>
          </div>
        </div>

        <div class="project-content-panel project-right-content">
          <div class="project-detail-grid">
            <div class="detail-card">
              <div class="detail-label">Objective</div>
              <p class="detail-text">${project.objective}</p>
            </div>

            <div class="detail-card">
              <div class="detail-label">Methods / Instruments</div>
              <div class="method-tags">${methods}</div>
            </div>
          </div>

          <div class="portfolio-sidebar-card">
            <div class="portfolio-mini-card">
              <div class="portfolio-mini-label">Key Metrics</div>
              <div class="portfolio-metric-list">${metricsList}</div>
            </div>
          </div>

          <div class="detail-card">
            <div class="detail-label">Project Outputs</div>
            <ul class="detail-text" style="padding-left:1rem; margin:0;">${outputs}</ul>
          </div>

          <div class="project-actions">
            <a href="${project.storymap}" class="btn btn-primary btn-sm">
              <i class="fas fa-map-location-dot"></i><span>View StoryMap</span>
            </a>
            <a href="${project.report}" class="btn btn-outline btn-sm">
              <i class="fas fa-file-arrow-down"></i><span>View Report</span>
            </a>
            <a href="${project.caseStudy}" class="btn btn-cyan btn-sm">
              <i class="fas fa-magnifying-glass-chart"></i><span>Case Study</span>
            </a>
          </div>
        </div>

      </div>
    </article>`;
}

const featuredProjectsPerPage = 6;
let activeFeaturedPage = 0;

function renderFeaturedPagination() {
  const pagination = document.getElementById('featured-pagination');
  if (!pagination) return;

  const totalPages = Math.ceil(eliteProjects.length / featuredProjectsPerPage);

  pagination.innerHTML = `
    <div class="pagination-label">More Projects</div>
    <div class="pagination-controls">
      ${Array.from({ length: totalPages }, (_, index) => `
        <button 
          type="button" 
          class="pagination-pill ${index === activeFeaturedPage ? 'active' : ''}" 
          data-page="${index}"
          aria-label="Go to project page ${index + 1}">
          <span class="pagination-pill-text">Page ${index + 1}</span>
        </button>
      `).join('')}
    </div>
  `;

  pagination.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFeaturedPage = Number(btn.dataset.page);
      renderEliteProjects();
      renderFeaturedPagination();

      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
function renderEliteProjects() {
  const grid = document.getElementById('featured-projects-grid');
  if (!grid) return;
  const start = activeFeaturedPage * featuredProjectsPerPage;
  const end = start + featuredProjectsPerPage;
  grid.innerHTML = eliteProjects.slice(start, end).map(buildProjectCard).join('');
  document.querySelectorAll('#featured-projects-grid .fade-up').forEach(el => observer.observe(el));
}

function renderEliteFilters() {
  const row = document.getElementById('library-filter-row');
  if (!row) return;
  row.innerHTML = libraryFilters.map(filter => `
    <button class="filter-chip ${filter === activeLibraryFilter ? 'active' : ''}" type="button" data-filter="${filter}">${filter}</button>
  `).join('');
  row.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeLibraryFilter = btn.dataset.filter;
      renderEliteFilters();
      renderEliteLibrary();
    });
  });
}

function renderEliteLibrary() {
  const grid = document.getElementById('library-grid');
  if (!grid) return;
  const filtered = activeLibraryFilter === 'All'
    ? eliteProjects
    : eliteProjects.filter(project => project.theme === activeLibraryFilter);

  grid.innerHTML = filtered.map(project => `
    <article class="library-card fade-up">
      <div class="library-card-top">
        <span class="library-card-theme">${project.theme}</span>
        <span class="library-card-number">${project.number}</span>
      </div>
      <h4 class="library-card-title">${project.title}</h4>
      <p class="library-card-text">${project.description}</p>
      <div class="library-link-row">
        <a href="${project.storymap}" class="library-link cyan">StoryMap</a>
        <a href="${project.report}" class="library-link white">Report</a>
        <a href="${project.caseStudy}" class="library-link emerald">Case Study</a>
      </div>
    </article>
  `).join('');
  document.querySelectorAll('#library-grid .fade-up').forEach(el => observer.observe(el));
}

renderEliteProjects();
renderFeaturedPagination();
renderEliteFilters();
renderEliteLibrary();

console.log('%c🗺️ Adeleke Marvellous Ayomide', 'color: #22d3ee; font-size: 24px; font-weight: bold;');
console.log('%cGIS Analyst | Spatial Data Scientist | Remote Sensing Specialist', 'color: #67e8f9; font-size: 14px;');
console.log('%c\nTransforming spatial data into actionable intelligence', 'color: #94a3b8; font-size: 12px;');
