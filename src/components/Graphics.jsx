// Small SVG marks reused across the site
// Each returns raw SVG — style with currentColor so parent can set the color

export function SparkMark({ size = 24, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.9 4.9l4.2 4.2M14.9 14.9l4.2 4.2M4.9 19.1l4.2-4.2M14.9 9.1l4.2-4.2" />
    </svg>
  )
}

export function Divider() {
  return (
    <div className="divider-decorative" aria-hidden="true">
      <span className="divider-line" />
      <SparkMark size={18} className="divider-star" />
      <span className="divider-line" />
    </div>
  )
}

// ---- Project tile graphics ----
// Each is a thematic SVG overlay that sits on top of the gradient tile

export function WaveformGraphic() {
  // Audio waveform bars — for AI Voice Training
  const bars = [0.3, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.7, 0.3, 0.8, 0.5, 0.9, 0.6, 0.4, 0.7]
  return (
    <svg className="tile-graphic" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 20 + 4}
          y={60 - h * 50}
          width="10"
          height={h * 100}
          rx="2"
          fill="rgba(255,255,255,0.35)"
        />
      ))}
    </svg>
  )
}

export function CircuitGraphic() {
  // Register/circuit pattern — for RISC-V Emulator
  return (
    <svg className="tile-graphic" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g stroke="rgba(255,255,255,0.4)" strokeWidth="2" fill="none">
        <rect x="10" y="20" width="40" height="20" rx="2" />
        <rect x="60" y="20" width="40" height="20" rx="2" />
        <rect x="110" y="20" width="40" height="20" rx="2" />
        <rect x="160" y="20" width="40" height="20" rx="2" />
        <rect x="210" y="20" width="40" height="20" rx="2" />
        <line x1="50" y1="30" x2="60" y2="30" />
        <line x1="100" y1="30" x2="110" y2="30" />
        <line x1="150" y1="30" x2="160" y2="30" />
        <line x1="200" y1="30" x2="210" y2="30" />
        <line x1="30" y1="40" x2="30" y2="70" />
        <line x1="130" y1="40" x2="130" y2="70" />
        <line x1="230" y1="40" x2="230" y2="70" />
        <line x1="30" y1="70" x2="230" y2="70" />
        <circle cx="30" cy="70" r="3" fill="rgba(255,255,255,0.5)" />
        <circle cx="130" cy="70" r="3" fill="rgba(255,255,255,0.5)" />
        <circle cx="230" cy="70" r="3" fill="rgba(255,255,255,0.5)" />
        <rect x="110" y="80" width="80" height="20" rx="2" />
      </g>
      <text x="150" y="94" fontFamily="monospace" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">x86 → RISC-V</text>
    </svg>
  )
}

export function NodeGraphic() {
  // Connected nodes — for LLM Evaluation Pipeline
  return (
    <svg className="tile-graphic" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none">
        <line x1="40" y1="60" x2="110" y2="30" />
        <line x1="40" y1="60" x2="110" y2="60" />
        <line x1="40" y1="60" x2="110" y2="90" />
        <line x1="110" y1="30" x2="180" y2="45" />
        <line x1="110" y1="60" x2="180" y2="45" />
        <line x1="110" y1="60" x2="180" y2="75" />
        <line x1="110" y1="90" x2="180" y2="75" />
        <line x1="180" y1="45" x2="250" y2="60" />
        <line x1="180" y1="75" x2="250" y2="60" />
      </g>
      <g fill="rgba(255,255,255,0.55)">
        <circle cx="40" cy="60" r="7" />
        <circle cx="110" cy="30" r="6" />
        <circle cx="110" cy="60" r="6" />
        <circle cx="110" cy="90" r="6" />
        <circle cx="180" cy="45" r="6" />
        <circle cx="180" cy="75" r="6" />
        <circle cx="250" cy="60" r="7" />
      </g>
    </svg>
  )
}

export function CodeGraphic() {
  // Code brackets + terminal cursor — for Go Web Server
  return (
    <svg className="tile-graphic" viewBox="0 0 300 120" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 60 30 L 30 60 L 60 90" />
        <path d="M 240 30 L 270 60 L 240 90" />
      </g>
      <g fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="11">
        <text x="90" y="48">func search(q)</text>
        <text x="90" y="68">  return idx.q</text>
        <text x="90" y="88">end</text>
      </g>
      <rect x="175" y="78" width="7" height="12" fill="rgba(255,255,255,0.7)">
        <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

// Map slugs to graphics
export const projectGraphics = {
  'ai-voice-training': WaveformGraphic,
  'riscv-emulator': CircuitGraphic,
  'llm-evaluation': NodeGraphic,
  'go-search-chatbot': CodeGraphic,
}