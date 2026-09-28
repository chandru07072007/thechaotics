import React, { useState } from 'react'
import './TechFlowchart.css'

export default function TechFlowchart() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="tech-flowchart-container">
      {/* Top Header Controls Bar */}
      <div className="flow-framework-header">
        <div className="flow-status-badge">
          <span className="blueprint-title-tag">System Architecture & Technical Approach</span>
        </div>

        <div className="flow-controls-actions">
          <button
            className="flow-action-btn"
            onClick={() => setIsModalOpen(true)}
            title="View original diagram in high resolution full screen"
          >
            🔍 Expand HD Blueprint
          </button>
        </div>
      </div>

      {/* Main Viewport Container with Real Icons on Clean White Background */}
      <div className="flow-viewport-container">
        <div className="flow-stage-wrapper">
          {/* Base Real Architecture Diagram with Authentic Icons & Original Arrows */}
          <img
            src="/image/technical_approach_architecture_diagram.png"
            alt="Technical Approach Architecture Diagram"
            className="blueprint-base-img"
          />
        </div>
      </div>

      {/* High-Resolution Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="blueprint-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="blueprint-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="blueprint-modal-header">
              <span>Technical Approach Architecture (High Resolution)</span>
              <button
                className="blueprint-modal-close"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="blueprint-modal-body">
              <img
                src="/image/technical_approach_architecture_diagram.png"
                alt="Technical Approach Full Resolution Diagram"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
