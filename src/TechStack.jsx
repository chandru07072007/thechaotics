import React, { useState, useEffect } from 'react'
import './TechStack.css'

// 18 SVG Tech Logos
const TechIcons = {
  LoRa: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <path d="M24 6a18 18 0 0 0-18 18c0 7.8 4.9 14.5 11.9 17l1.7-3.6A14 14 0 0 1 10 24a14 14 0 0 1 28 0 14 14 0 0 1-9.6 13.3l1.7 3.6A18 18 0 0 0 24 6z" fill="#0284c7" />
      <path d="M24 12a12 12 0 0 0-12 12c0 5.1 3.2 9.5 7.7 11.2l1.7-3.6A8 8 0 0 1 16 24a8 8 0 0 1 16 0 8 8 0 0 1-5.4 7.6l1.7 3.6A12 12 0 0 0 24 12z" fill="#0369a1" />
      <circle cx="24" cy="24" r="4" fill="#0c4a6e" />
    </svg>
  ),
  Cpp: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="#00599c" />
      <polygon points="24,7 39,15.5 39,32.5 24,41 9,32.5 9,15.5" fill="#004482" />
      <path d="M24 15a9 9 0 0 0-9 9 9 9 0 0 0 9 9c4.2 0 7.6-2.9 8.6-6.8h-4.3A4.5 4.5 0 0 1 24 29a4.5 4.5 0 0 1-4.5-4.5 4.5 4.5 0 0 1 4.5-4.5c2 0 3.8 1.3 4.3 3.2h4.3A9 9 0 0 0 24 15z" fill="#ffffff" />
      <path d="M35 22h2v-2h2v2h2v2h-2v2h-2v-2h-2zm8 0h2v-2h2v2h2v2h-2v2h-2v-2h-2z" fill="#659ad2" />
    </svg>
  ),
  GNSS: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <circle cx="24" cy="24" r="8" fill="#0284c7" />
      <ellipse cx="24" cy="24" rx="20" ry="7" fill="none" stroke="#0369a1" strokeWidth="2.5" transform="rotate(-30 24 24)" />
      <ellipse cx="24" cy="24" rx="20" ry="7" fill="none" stroke="#0284c7" strokeWidth="2.5" transform="rotate(30 24 24)" />
      <circle cx="9" cy="15" r="2.5" fill="#38bdf8" />
      <circle cx="39" cy="33" r="2.5" fill="#38bdf8" />
      <circle cx="9" cy="33" r="2.5" fill="#38bdf8" />
      <circle cx="39" cy="15" r="2.5" fill="#38bdf8" />
    </svg>
  ),
  Kafka: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <circle cx="16" cy="24" r="5" fill="#231f20" />
      <circle cx="34" cy="14" r="4.5" fill="#231f20" />
      <circle cx="34" cy="34" r="4.5" fill="#231f20" />
      <line x1="16" y1="24" x2="34" y2="14" stroke="#231f20" strokeWidth="3" />
      <line x1="16" y1="24" x2="34" y2="34" stroke="#231f20" strokeWidth="3" />
      <circle cx="16" cy="24" r="2" fill="#ffffff" />
      <circle cx="34" cy="14" r="1.8" fill="#ffffff" />
      <circle cx="34" cy="34" r="1.8" fill="#ffffff" />
    </svg>
  ),
  FilterPy: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <path d="M6 38 Q 18 38, 24 10 Q 30 38, 42 38" fill="none" stroke="#d97706" strokeWidth="3.5" />
      <path d="M12 38 Q 20 38, 24 22 Q 28 38, 36 38" fill="rgba(217, 119, 6, 0.2)" />
      <line x1="4" y1="38" x2="44" y2="38" stroke="#78350f" strokeWidth="2" />
      <circle cx="24" cy="10" r="3.5" fill="#b45309" />
    </svg>
  ),
  SimPy: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <circle cx="24" cy="24" r="18" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
      <circle cx="24" cy="24" r="12" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      <line x1="24" y1="24" x2="24" y2="16" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="24" x2="30" y2="24" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2.5" fill="#78350f" />
    </svg>
  ),
  PostgreSQL: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <path d="M24 6c-8 0-14 6-14 14 0 6.5 4.5 12 11 13.5v6.5h6v-6.5c6.5-1.5 11-7 11-13.5 0-8-6-14-14-14z" fill="#336791" />
      <ellipse cx="19" cy="18" rx="2.5" ry="3.5" fill="#ffffff" />
      <circle cx="19" cy="19" r="1.5" fill="#1e3a5f" />
      <path d="M24 25c-3 0-5 2-5 5h10c0-3-2-5-5-5z" fill="#ffffff" />
      <path d="M30 18c1.5 0 3 1.5 3 4s-1.5 4-3 4" fill="none" stroke="#ffffff" strokeWidth="2" />
    </svg>
  ),
  PostGIS: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <circle cx="24" cy="24" r="18" fill="#1e3a5f" />
      <polygon points="24,9 35,37 24,30 13,37" fill="#38bdf8" />
      <polygon points="24,9 24,30 13,37" fill="#0284c7" />
      <circle cx="24" cy="24" r="2" fill="#ffffff" />
    </svg>
  ),
  Redis: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <polygon points="24,6 42,15 24,24 6,15" fill="#dc2626" />
      <polygon points="24,16 42,25 24,34 6,25" fill="#b91c1c" />
      <polygon points="24,26 42,35 24,44 6,35" fill="#991b1b" />
      <polygon points="24,6 33,10.5 24,15 15,10.5" fill="#ef4444" />
    </svg>
  ),
  PyTorch: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <path d="M26 8a13 13 0 0 0-9.2 22.2l3-3A8.8 8.8 0 0 1 26 12.5V8z" fill="#ee4c2c" />
      <circle cx="34" cy="11" r="3.5" fill="#ee4c2c" />
      <path d="M22 40a13 13 0 0 0 9.2-22.2l-3 3A8.8 8.8 0 0 1 22 35.5V40z" fill="#f97316" />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <path d="M23.5 6c-6.6 0-6.2 2.8-6.2 2.8l.1 3H24v1H13.2S6 12 6 22.3s6.3 9.7 6.3 9.7h3.7v-5.2s-.2-6.2 6.1-6.2h10.4s5.9.1 5.9-5.8-5.2-8.8-14.9-8.8zm-3.8 2.8c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4z" fill="#3776ab" />
      <path d="M24.5 42c6.6 0 6.2-2.8 6.2-2.8l-.1-3H24v-1h10.8s7.2.8 7.2-9.5-6.3-9.7-6.3-9.7h-3.7v5.2s.2 6.2-6.1 6.2H15.5s-5.9-.1-5.9 5.8 5.2 8.8 14.9 8.8zm3.8-2.8c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4z" fill="#ffd43b" />
    </svg>
  ),
  NumPy: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <polygon points="24,6 42,15 42,33 24,42 6,33 6,15" fill="#4d77cf" />
      <polygon points="24,6 42,15 24,24 6,15" fill="#013243" />
      <polygon points="24,24 42,15 42,33 24,42" fill="#4d90fe" />
      <text x="24" y="29" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NP</text>
    </svg>
  ),
  Open3D: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <polygon points="24,6 42,16 42,32 24,42 6,32 6,16" fill="none" stroke="#4f46e5" strokeWidth="2.5" />
      <line x1="24" y1="6" x2="24" y2="42" stroke="#4f46e5" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="6" y1="16" x2="42" y2="32" stroke="#4f46e5" strokeWidth="2" strokeDasharray="3 3" />
      <line x1="6" y1="32" x2="42" y2="16" stroke="#4f46e5" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="24" cy="6" r="3" fill="#6366f1" />
      <circle cx="42" cy="16" r="3" fill="#6366f1" />
      <circle cx="42" cy="32" r="3" fill="#6366f1" />
      <circle cx="24" cy="42" r="3" fill="#6366f1" />
      <circle cx="6" cy="32" r="3" fill="#6366f1" />
      <circle cx="6" cy="16" r="3" fill="#6366f1" />
      <circle cx="24" cy="24" r="3.5" fill="#a855f7" />
    </svg>
  ),
  WebGL: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <polygon points="24,6 42,38 6,38" fill="#990000" />
      <polygon points="24,12 37,35 11,35" fill="#d90429" />
      <circle cx="24" cy="24" r="4" fill="#ffffff" />
      <text x="24" y="34" fill="#ffffff" fontSize="6" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">3D</text>
    </svg>
  ),
  Plotly: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <rect x="8" y="24" width="6" height="16" rx="2" fill="#3f4f75" />
      <rect x="18" y="14" width="6" height="26" rx="2" fill="#119dff" />
      <rect x="28" y="8" width="6" height="32" rx="2" fill="#00cc96" />
      <rect x="38" y="18" width="6" height="22" rx="2" fill="#ab63fa" />
    </svg>
  ),
  Docker: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <path d="M44 24c-.6-.4-1.8-.4-2.6.2-.4.3-.8.8-1 1.4-1.2-.8-2.6-1.1-4.2-1.1h-1.8c-.4-4.8-4-8.5-8.8-8.5h-1.6v-3h-4v3h-3v-3h-4v3h-3v-3h-4v3H6c-1 0-2 .8-2 2v6.5C4 32.5 12 38 24 38c11 0 18-5 19.8-12.8.2-.8.2-1.2.2-1.2z" fill="#2496ed" />
      <rect x="14" y="18" width="3" height="3" fill="#ffffff" />
      <rect x="19" y="18" width="3" height="3" fill="#ffffff" />
      <rect x="24" y="18" width="3" height="3" fill="#ffffff" />
      <rect x="19" y="14" width="3" height="3" fill="#ffffff" />
      <rect x="24" y="14" width="3" height="3" fill="#ffffff" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <path d="M24 5C13.5 5 5 13.5 5 24c0 8.4 5.5 15.5 13 18 1 .2 1.3-.4 1.3-.9v-3.5c-5.3 1.1-6.4-2.5-6.4-2.5-.9-2.2-2.1-2.8-2.1-2.8-1.7-1.2.1-1.2.1-1.2 1.9.1 2.9 2 2.9 2 1.7 2.9 4.4 2.1 5.5 1.6.2-1.2.7-2.1 1.2-2.6-4.2-.5-8.7-2.1-8.7-9.4 0-2.1.7-3.8 2-5.1-.2-.5-.9-2.4.2-5 0 0 1.6-.5 5.2 1.9 1.5-.4 3.1-.6 4.7-.6 1.6 0 3.2.2 4.7.6 3.6-2.5 5.2-1.9 5.2-1.9 1.1 2.6.4 4.5.2 5 1.3 1.3 2 3 2 5.1 0 7.3-4.5 8.9-8.7 9.4.7.6 1.3 1.8 1.3 3.6v5.4c0 .5.4 1.1 1.3.9 7.5-2.5 13-9.6 13-18 0-10.5-8.5-19-19-19z" fill="#24292e" />
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 48 48" className="tech-svg-icon" fill="currentColor">
      <path d="M18 20.5c0-1.8.8-3 2.5-3 1.5 0 2.2.9 2.2 2.2v4.8c-.8.5-2 .8-3.2.8-2.5 0-4.2-1.2-4.2-3.8 0-2.2 1.4-3.5 2.7-3.5.7 0 1.4.3 1.8.8v-1.3c0-2-1.2-3-3.2-3-1.6 0-3 .6-4 1.5l-.8-1.8c1.3-1.1 3.2-1.8 5.2-1.8 3.5 0 5.2 1.8 5.2 5v9.8h-2.2v-1.6c-.8 1.1-2.1 1.8-3.7 1.8-3.2 0-5.5-2-5.5-5.2 0-3.3 2.4-5 6.3-5 1.1 0 2 .2 2.6.5v-1.8c0-1.4-.7-2-2-2-1.1 0-2.2.6-2.8 1.4l-1.3-1.2z" fill="#232f3e" />
      <path d="M37 25.5l-2.4 1.2c-.8-.9-1.9-1.4-3.2-1.4-1.8 0-3 1-3 2.5 0 3.8 7.8 1.8 7.8 7.4 0 2.8-2.3 4.8-5.8 4.8-2.4 0-4.5-.9-5.7-2.2l1.6-1.8c.9 1 2.3 1.8 4.1 1.8 2 0 3.2-1 3.2-2.4 0-4-7.8-2-7.8-7.4 0-2.8 2.2-4.7 5.5-4.7 2.3 0 4.3.8 5.7 2.2z" fill="#232f3e" />
      <path d="M10 33c6.5 4.5 15.5 6.8 24 3.5.8-.3 1.8.5 1.2 1.3-8 9-20 7-26.5-.5-.6-.7.2-1.7 1.3-1.3z" fill="#ff9900" />
      <polygon points="34.5,35.5 38.5,37 36.5,33.5" fill="#ff9900" />
    </svg>
  ),
}

// 3 Stacks exactly matching the user's uploaded reference wireframe (HARDWARE STACK, DATA PROCESS STACK, AI & CLOUD DEPLOYMENT STACK)
const stackSections = [
  {
    id: 'hardware',
    title: 'HARDWARE STACK',
    tagline: 'IoT & Subterranean Edge Telemetry',
    items: [
      {
        id: 'lora',
        name: 'LoRa Mesh',
        category: 'Hardware / Wireless Mesh',
        icon: TechIcons.LoRa,
        whatToDo:
          'Establishes autonomous long-range wireless telemetry across underground galleries and surface mine panels. Auto-reroutes sensor vectors around rock blockages without cellular dependency.',
      },
      {
        id: 'cpp',
        name: 'C++',
        category: 'Embedded Systems',
        icon: TechIcons.Cpp,
        whatToDo:
          'Executes real-time bare-metal firmware on low-power ESP32 and ARM edge sensor nodes, sampling high-frequency MEMS vibration and tilt sensors at sub-millisecond intervals.',
      },
      {
        id: 'gnss',
        name: 'GNSS / RTK',
        category: 'Geodesy & Positioning',
        icon: TechIcons.GNSS,
        whatToDo:
          'Provides sub-centimeter satellite differential RTK positioning across surface pillars, tracking subtle ground elevation drops and subsidence troughs before visible fissures open.',
      },
    ],
  },
  {
    id: 'data-process',
    title: 'DATA PROCESS STACK',
    tagline: 'Real-Time Streaming, Conditioning & Spatial Persistence',
    items: [
      {
        id: 'kafka',
        name: 'Apache Kafka',
        category: 'Event Streaming',
        icon: TechIcons.Kafka,
        whatToDo:
          'Distributed high-throughput streaming broker ingesting hundreds of thousands of sensor readings per second from mine gateways with zero packet drop and local replay buffers.',
      },
      {
        id: 'filterpy',
        name: 'FilterPy',
        category: 'Signal Processing',
        icon: TechIcons.FilterPy,
        whatToDo:
          'Applies Extended Kalman Filtering (EKF) and sensor fusion algorithms to eliminate blasting shockwaves and heavy machinery noise from raw tilt and displacement data.',
      },
      {
        id: 'simpy',
        name: 'SimPy',
        category: 'Geotechnical Simulation',
        icon: TechIcons.SimPy,
        whatToDo:
          'Simulates discrete-event strata convergence, void collapse propagation, and groundwater inflow dynamics under dynamic overburden pressures.',
      },
      {
        id: 'postgres',
        name: 'PostgreSQL',
        category: 'Relational Database',
        icon: TechIcons.PostgreSQL,
        whatToDo:
          'Stores immutable audit trails, historical sensor time-series data, geotechnical borehole logs, and regulatory compliance records.',
      },
      {
        id: 'postgis',
        name: 'PostGIS',
        category: 'Geospatial Analytics',
        icon: TechIcons.PostGIS,
        whatToDo:
          'Indexes 3D mine tunnel galleries, faults, and coal seams with spatial R-tree indexes to run instant 3D proximity checks and geofenced evacuation boundary queries.',
      },
      {
        id: 'redis',
        name: 'Redis',
        category: 'In-Memory Cache',
        icon: TechIcons.Redis,
        whatToDo:
          'Provides ultra-fast sub-millisecond in-memory telemetry caching for live 3D digital twin synchronization and immediate critical threshold alarms.',
      },
    ],
  },
  {
    id: 'ai-deployment',
    title: 'AI & DEPLOYMENT STACK',
    tagline: 'Machine Learning, 3D Visualization & Scalable Infrastructure',
    items: [
      {
        id: 'pytorch',
        name: 'PyTorch',
        category: 'Deep Learning',
        icon: TechIcons.PyTorch,
        whatToDo:
          'Trains and evaluates deep neural network models (including MFTabPFN and LSTMs) to forecast subterranean strata failure windows hours before roof collapse.',
      },
      {
        id: 'python',
        name: 'Python',
        category: 'Analytics Engine',
        icon: TechIcons.Python,
        whatToDo:
          'Drives the end-to-end data analytics pipeline, geotechnical feature engineering, predictive model training, and automated alarm dispatch logic.',
      },
      {
        id: 'numpy',
        name: 'NumPy',
        category: 'Vector Computation',
        icon: TechIcons.NumPy,
        whatToDo:
          'Accelerates high-speed matrix transformations and 3D finite-element tensor math to calculate stress distributions across stratified rock layers.',
      },
      {
        id: 'open3d',
        name: 'Open3D',
        category: 'Point Cloud Geometry',
        icon: TechIcons.Open3D,
        whatToDo:
          'Processes underground LiDAR scans and sonar point clouds into watertight 3D volumetric meshes for real-time void convergence inspection.',
      },
      {
        id: 'webgl',
        name: 'WebGL',
        category: '3D Graphics',
        icon: TechIcons.WebGL,
        whatToDo:
          'Renders browser-based interactive 3D digital twin models of the mine at 60 FPS, allowing engineers to rotate, inspect, and explore subterranean galleries.',
      },
      {
        id: 'plotly',
        name: 'Plotly',
        category: 'Data Visualization',
        icon: TechIcons.Plotly,
        whatToDo:
          'Renders interactive, responsive multi-channel sensor charts tracking real-time tilt angles, crack displacements, and pore water trends.',
      },
      {
        id: 'docker',
        name: 'Docker',
        category: 'Containerization',
        icon: TechIcons.Docker,
        whatToDo:
          'Packages edge gateways, data collectors, and cloud APIs into isolated, lightweight containers ensuring uniform zero-drift deployment across all hardware.',
      },
      {
        id: 'github',
        name: 'GitHub',
        category: 'CI/CD & Source Control',
        icon: TechIcons.GitHub,
        whatToDo:
          'Manages version control, collaborative code reviews, and automated CI/CD deployment pipelines that build and test every firmware and backend release.',
      },
      {
        id: 'aws',
        name: 'AWS Cloud',
        category: 'Cloud Infrastructure',
        icon: TechIcons.AWS,
        whatToDo:
          'Hosts scalable cloud infrastructure (AWS IoT Core, ECS, RDS, S3) with 99.99% uptime, delivering automated broadcast alerts and emergency siren triggers.',
      },
    ],
  },
]

export default function TechStackFlow() {
  const [selectedTech, setSelectedTech] = useState(null)
  const [hoveredTech, setHoveredTech] = useState(null)

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedTech(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="tech-stack-section" id="tech-stack">
      {/* 3 Capsule Pill Stacks matching reference sketch */}
      <div className="pill-stacks-container">
        {stackSections.map((stack, stackIndex) => (
          <div key={stack.id} className="pill-stack-group">
            {/* Title in Castellar font matching reference image */}
            <h2 className="pill-stack-title">{stack.title}</h2>

            {/* Rounded Capsule Pill Bar containing ONLY tech logo icons */}
            <div className="capsule-pill-bar">
              <div className="capsule-icons-track">
                {stack.items.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    className="capsule-icon-btn"
                    onClick={() => setSelectedTech(item)}
                    onMouseEnter={() => setHoveredTech(item)}
                    onMouseLeave={() => setHoveredTech(null)}
                    title={`Click to inspect ${item.name}`}
                    style={{ animationDelay: `${(stackIndex * 3 + itemIndex) * 0.12}s` }}
                  >
                    <div className="icon-wrapper">{item.icon}</div>

                    {/* Subtle Hover Tooltip */}
                    <span className="icon-hover-tooltip">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive "Click Icon That Show Name What To Do" Modal Card */}
      {selectedTech && (
        <div
          className="tech-modal-backdrop"
          onClick={() => setSelectedTech(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="tech-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="tech-modal-close"
              onClick={() => setSelectedTech(null)}
              title="Close (Esc)"
            >
              ✕
            </button>

            {/* Modal Header with Icon & Name */}
            <div className="tech-modal-header">
              <div className="tech-modal-icon-badge">{selectedTech.icon}</div>
              <div className="tech-modal-title-col">
                <span className="tech-modal-category">{selectedTech.category}</span>
                <h3 className="tech-modal-name">{selectedTech.name}</h3>
              </div>
            </div>

            {/* "What To Do" Section */}
            <div className="tech-modal-body">
              <div className="what-to-do-header">
                <span className="what-to-do-badge">MISSION ROLE</span>
                <span className="what-to-do-label">WHAT IT DOES IN COAL MINING</span>
              </div>
              <p className="what-to-do-desc">{selectedTech.whatToDo}</p>
            </div>

            <div className="tech-modal-footer">
              <span className="modal-status-pill">
                <span className="status-live-dot" />
                ACTIVE IN PRODUCTION PIPELINE
              </span>
              <button
                className="modal-dismiss-btn"
                onClick={() => setSelectedTech(null)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
