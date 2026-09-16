import React from 'react';
import './CyberCorners.css';

export default function CyberCorners() {
  return (
    <div className="cyber-corners-hud" aria-hidden="true">
      {/* Top Left Bracket */}
      <div className="corner-bracket top-left">
        <div className="bracket-svg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 23V1H23" stroke="#d11f1f" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="corner-text">SYS_ID: SUNNY_SEC</span>
      </div>

      {/* Top Right Bracket */}
      <div className="corner-bracket top-right">
        <span className="corner-text">STATUS: DEFENSIVE_READY</span>
        <div className="bracket-svg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M23 23V1H1" stroke="#d11f1f" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Bottom Left Bracket */}
      <div className="corner-bracket bottom-left">
        <div className="bracket-svg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M1 1V23H23" stroke="#d11f1f" strokeWidth="1.5" />
          </svg>
        </div>
        <span className="corner-text">LOC: HYD_IN [17.38°N 78.48°E]</span>
      </div>

      {/* Bottom Right Bracket */}
      <div className="corner-bracket bottom-right">
        <span className="corner-text">PROTOCOL: TLS_V1.3</span>
        <div className="bracket-svg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M23 1V23H1" stroke="#d11f1f" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
