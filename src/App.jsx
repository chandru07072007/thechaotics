import React, { useRef, useState, useEffect } from 'react'
import './App.css'

const solutions = [
  {
    id: 1,
    step: '01',
    shortTitle: 'Sensing Grid',
    title: 'Smart Surface & Subsurface Sensing Grid',
    image: '/image/sensor datails.webp',
    mediaType: 'image',
    description:
      'A dense grid of smart surface nodes equipped with tilt/inclination, MEMS vibration, crack-displacement, and pore-water pressure sensors anchored across the coal mine panels.',
  },
  {
    id: 2,
    step: '02',
    shortTitle: 'Self-Healing Mesh',
    title: 'Self-Healing LoRa Mesh Telemetry',
    image: '/image/comucation.webp',
    video: '/video/unifited sloution/self healing.mp4',
    youtubeId: '6mE1un6cEhE',
    mediaType: 'video',
    description:
      'Autonomous low-power wireless mesh network connecting subterranean and surface sensors. The self-healing protocol dynamically auto-reroutes around coal seam obstacles with zero data loss.',
  },
  {
    id: 3,
    step: '03',
    shortTitle: 'Digital Twin',
    title: 'Predictive 3D Digital Twin Simulation',
    image: '/image/digital-twin-main.webp',
    video: '/video/unifited sloution/digit twin.mp4',
    youtubeId: 'LAc7zLoZ8r4',
    mediaType: 'video',
    description:
      'Real-time 3D digital twin synchronized with live telemetry streams to simulate rock mass displacement, void convergence, and forecast structural collapse windows hours before failure.',
  },
  {
    id: 4,
    step: '04',
    shortTitle: 'Geological Model',
    title: 'Coal Mining Geological Section & MFTabPFN AI',
    image: '/image/ALERT.png',
    video: '/video/unifited sloution/model.mp4',
    youtubeId: 'RquOxPiwcUw',
    mediaType: 'video',
    description:
      'Stratigraphic 3D geotechnical section mapping coal seams, overburden layers, and fault planes powered by MFTabPFN AI to predict strata collapse hours ahead of time.',
  },
]

const unifiedFeatures = [
  {
    id: 1,
    title: 'SMART SURFACE SENSING GRID',
    subtitle: 'Integrated IoT Sensing Grid',
    text: 'A grid of low-cost smart surface nodes equipped with tilt/inclination, MEMS vibration, crack-displacement, and positioning sensors anchored across the surface terrain over the coal mine panel.',
    image: '/image/sensor datails.webp',
    mediaType: 'image',
    reverse: false,
  },
  {
    id: 2,
    title: 'SELF-HEALING LORA MESH TELEMETRY',
    subtitle: 'Autonomous Mesh Telemetry',
    text: 'Autonomous low-power wireless mesh network connecting subterranean and surface sensors. The mesh protocol features dynamic auto-rerouting and local buffering to guarantee 100% telemetry uptime in harsh coal mining terrain.',
    image: '/image/comucation.webp',
    video: '/video/unifited sloution/self healing.mp4',
    youtubeId: '6mE1un6cEhE',
    mediaType: 'video',
    reverse: true,
  },
  {
    id: 3,
    title: 'PREDICTIVE 3D DIGITAL TWIN SIMULATION',
    subtitle: 'Predictive 3D Digital Twin',
    text: 'Dynamic 3D digital twin synchronized with real-time sensor streams to simulate rock mass displacement, void convergence, and forecast structural collapse windows hours before failure.',
    image: '/image/digital-twin-main.webp',
    video: '/video/unifited sloution/digit twin.mp4',
    youtubeId: 'LAc7zLoZ8r4',
    mediaType: 'video',
    reverse: false,
  },
  {
    id: 4,
    title: 'COAL MINING GEOLOGICAL SECTION & MFTabPFN AI',
    subtitle: 'Stratigraphic Mine Section & Deep Learning Strata AI',
    text: 'Stratigraphic 3D geotechnical model mapping coal seams, overburden layers, and fault planes with MFTabPFN machine learning predicting convergence windows with dynamic automated evacuation alert workflows.',
    image: '/image/ALERT.png',
    video: '/video/unifited sloution/model.mp4',
    youtubeId: 'RquOxPiwcUw',
    mediaType: 'video',
    reverse: true,
  },
]

function App() {
  const videoUrl = encodeURI('/video/problem/When Abandoned Mines Collapse(720P_HD).mp4')
  const solutionRef = useRef(null)
  const [isSolutionVisible, setIsSolutionVisible] = useState(false)
  const [selectedSolution, setSelectedSolution] = useState(null)
  const [visibleRows, setVisibleRows] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSolutionVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (solutionRef.current) {
      observer.observe(solutionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Observer for Unified Solution alternating rows
  useEffect(() => {
    const rowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rowId = entry.target.getAttribute('data-row-id')
            if (rowId) {
              setVisibleRows((prev) => ({ ...prev, [rowId]: true }))
            }
          }
        })
      },
      { threshold: 0.2 }
    )

    const rowElements = document.querySelectorAll('.unified-row')
    rowElements.forEach((el) => rowObserver.observe(el))

    return () => rowObserver.disconnect()
  }, [])

  // Handle keyboard events (Escape to close modal, Left/Right to cycle solutions)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedSolution(null)
        return
      }
      if (!selectedSolution) return
      if (e.key === 'ArrowRight') {
        setSelectedSolution((prev) => {
          const nextIndex = prev.id % solutions.length
          return solutions[nextIndex]
        })
      } else if (e.key === 'ArrowLeft') {
        setSelectedSolution((prev) => {
          const prevIndex = (prev.id - 2 + solutions.length) % solutions.length
          return solutions[prevIndex]
        })
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedSolution])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNextSolution = (e) => {
    e.stopPropagation()
    const nextIndex = selectedSolution.id % solutions.length
    setSelectedSolution(solutions[nextIndex])
  }

  const handlePrevSolution = (e) => {
    e.stopPropagation()
    const prevIndex = (selectedSolution.id - 2 + solutions.length) % solutions.length
    setSelectedSolution(solutions[prevIndex])
  }

  return (
    <div className="app">
      {/* Section 1: Welcome Screen */}
      <section className="page-section welcome-section" id="welcome">
        <div className="welcome-content">
          <h1 className="welcome-subtitle">Welcome To</h1>
          <div className="welcome-title">THE CHAOTICS</div>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => scrollTo('problem-statement')}
          title="Scroll down"
        >
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* Section 2: Problem Statement Screen */}
      <section className="page-section problem-section" id="problem-statement">
        <div className="problem-content">
          <h2 className="problem-header">PROBLEM STATEMENT</h2>
          <div className="video-frame-box">
            <iframe
              className="video-player"
              src="https://www.youtube.com/embed/uePBjFaCWNc?rel=0&modestbranding=1"
              title="Problem Statement - Coal Mining Ground Subsidence"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div
          className="scroll-indicator"
          onClick={() => scrollTo('our-solution')}
          title="Scroll down"
        >
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* Section 3: Our Solution Screen with Staircase & Scroll Animation */}
      <section
        ref={solutionRef}
        className={`page-section solution-section ${isSolutionVisible ? 'is-visible' : ''}`}
        id="our-solution"
      >
        <div className="solution-header-container">
          <h2 className="solution-title">OUR SOLUTION</h2>
          <p className="solution-subtitle">YOU ARE SEE SAME SOLUTION MANY PPT</p>
        </div>

        {/* 4-Box Descending Diagonal Staircase Layout */}
        <div className="solution-staircase">
          {solutions.map((sol, index) => (
            <div
              key={sol.id}
              className={`solution-card-wrapper card-wrapper-${index + 1}`}
              onClick={() => setSelectedSolution(sol)}
              title={`Click to view ${sol.title}`}
            >
              <div className="solution-card">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="card-image"
                />
                <span className="cursor-hint-badge">Click to view ↗</span>
              </div>

              {/* Step info under each card */}
              <div className="card-step-badge">
                <span className="card-step-number">STEP {sol.step}</span>
                <span className="card-step-title">{sol.shortTitle}</span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="scroll-indicator"
          onClick={() => scrollTo('unified-solution')}
          title="Scroll down to Unified Solution"
        >
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* Section 4: UNIFIED SOLUTION (Alternating Zig-Zag Grid & Showcase) */}
      <section className="unified-section" id="unified-solution">
        <h2 className="unified-title">UNIFIED SOLUTION</h2>

        {/* Alternating 4 rows matching reference image */}
        <div className="unified-rows-container">
          {unifiedFeatures.map((feat) => (
            <div
              key={feat.id}
              data-row-id={feat.id}
              className={`unified-row ${feat.reverse ? 'reverse' : ''} ${
                visibleRows[feat.id] ? 'is-in-view' : ''
              }`}
            >
              {/* Image / Video Box with solid black border */}
              <div
                className={`unified-image-box ${feat.mediaType === 'video' ? 'has-video' : ''}`}
                onClick={() => {
                  const sol = solutions.find((s) => s.id === feat.id)
                  if (sol) setSelectedSolution(sol)
                }}
                title={feat.mediaType === 'video' ? 'Click to open details' : 'Click to expand view'}
              >
                {feat.mediaType === 'video' && feat.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${feat.youtubeId}?rel=0&modestbranding=1`}
                    title={feat.title}
                    className="unified-row-media unified-row-video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : feat.mediaType === 'video' ? (
                  <video
                    src={encodeURI(feat.video)}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="unified-row-media unified-row-video"
                  />
                ) : (
                  <img src={feat.image} alt={feat.title} className="unified-row-media" />
                )}
              </div>

              {/* Text Box matching reference mockup */}
              <div className="unified-text-box">
                <h3 className="unified-row-title">{feat.title}</h3>
                <p className="unified-row-para">{feat.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Showcase matching reference mockup */}
        <div className="showcase-container">
          <h2 className="showcase-title">DEMO</h2>
          <div className="showcase-box">
            <iframe
              src="https://www.youtube.com/embed/vGwQXER6Wq8?rel=0&modestbranding=1"
              title="Coal Mine Monitoring System Demo"
              className="showcase-video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div
          className="scroll-indicator"
          onClick={() => scrollTo('technical-approach')}
          title="Scroll down to Technical Approach"
        >
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* Section 5: TECHNICAL APPROACH */}
      <section className="page-section technical-approach-section" id="technical-approach">
        <h2 className="technical-approach-title">TECHNICAL APPROACH</h2>
        <div className="technical-approach-box">
          <iframe
            src="https://www.youtube.com/embed/JHz6DKn9OS0?rel=0&modestbranding=1"
            title="Technical Approach Architecture Flow"
            className="technical-approach-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      {/* Modal / Expanded Full Image View Frame & Details */}
      {selectedSolution && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedSolution(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="modal-close-btn"
              onClick={() => setSelectedSolution(null)}
              title="Close (Esc)"
            >
              ✕
            </button>

            {/* Left Nav Arrow */}
            <button
              className="modal-nav-btn prev"
              onClick={handlePrevSolution}
              title="Previous solution (Left Arrow)"
            >
              ←
            </button>

            {/* Left Full Image / Video View Frame */}
            <div className={`modal-image-box ${selectedSolution.youtubeId || selectedSolution.video ? 'has-video' : ''}`}>
              {selectedSolution.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedSolution.youtubeId}?rel=0&modestbranding=1&autoplay=1`}
                  title={selectedSolution.title}
                  className="modal-media-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : selectedSolution.video ? (
                <video
                  src={encodeURI(selectedSolution.video)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="modal-media-video"
                />
              ) : (
                <img
                  src={selectedSolution.image}
                  alt={selectedSolution.title}
                />
              )}
            </div>

            {/* Right Details Box with Border */}
            <div className="modal-details-box">
              <span className="modal-step-tag">STEP {selectedSolution.step} OF 04</span>
              <h3 className="modal-details-title">{selectedSolution.title}</h3>
              <p className="modal-details-text">{selectedSolution.description}</p>
            </div>

            {/* Right Nav Arrow */}
            <button
              className="modal-nav-btn next"
              onClick={handleNextSolution}
              title="Next solution (Right Arrow)"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
