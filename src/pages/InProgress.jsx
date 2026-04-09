import Reveal from '../components/Reveal'

// Edit these freely. Each card needs: path, title, statusColor, statusLabel, target, notes, active
const researching = [
  {
    path: '~/career/new-grad',
    title: 'New-Grad Applications',
    statusColor: '#ec4899',
    statusLabel: 'exploring',
    target: 'applied AI / backend',
    notes:
      'Tailoring resume, prepping interviews, researching teams that care about thoughtful engineering.',
    active: false,
  },
  {
    path: '~/reading/distributed',
    title: 'Distributed Systems',
    statusColor: '#ec4899',
    statusLabel: 'reading',
    target: 'DDIA + Raft paper',
    notes:
      'Working through Designing Data-Intensive Applications and the original Raft consensus paper.',
    active: false,
  },
]

const building = [
  {
    path: '~/cs315/project05',
    title: 'RISC-V Static Analyzer',
    statusColor: '#8b5cf6',
    statusLabel: 'building',
    target: 'CS 315 Project 05',
    notes:
      'Digital logic circuit reading RISC-V machine code from ROM and counting instructions by type. 8-bit counter is next.',
    active: true, // blinking cursor on the most-active card
  },
  {
    path: '~/capstone/voice-app',
    title: 'AI Voice Training',
    statusColor: '#8b5cf6',
    statusLabel: 'debugging',
    target: 'CS 490 Capstone',
    notes:
      'Final sprint. Deepgram SSL edge cases sorted, wrapping the annotated transcript view.',
    active: false,
  },
]

function TerminalCard({ card }) {
  return (
    <article className="term-card">
      <div className="term-titlebar">
        <div className="term-dots">
          <span className="term-dot dot-red" />
          <span className="term-dot dot-yellow" />
          <span className="term-dot dot-green" />
        </div>
        <div className="term-path">{card.path}</div>
      </div>
      <div className="term-body">
        <div className="term-comment"># {card.title.toLowerCase()}</div>
        <div className="term-line">
          <span className="term-prompt">$</span> status{' '}
          <span className="term-status" style={{ color: card.statusColor }}>
            {card.statusLabel}
          </span>
        </div>
        <div className="term-line">
          <span className="term-prompt">$</span> title{' '}
          <span className="term-string">"{card.title}"</span>
        </div>
        <div className="term-line">
          <span className="term-prompt">$</span> focus{' '}
          <span className="term-string">"{card.target}"</span>
        </div>
        <div className="term-comment term-comment-spaced"># notes</div>
        <div className="term-notes">{card.notes}</div>
        <div className="term-line term-cursor-line">
          <span className="term-prompt">$</span>
          {card.active ? (
            <span className="term-cursor-blink" aria-hidden="true" />
          ) : (
            <span className="term-cursor-static">_</span>
          )}
        </div>
      </div>
    </article>
  )
}

// Renders a row of cards. Every other card gets a subtle vertical offset.
function CardGrid({ cards, offsetStart = 0 }) {
  return (
    <div className="ip-grid">
      {cards.map((card, i) => (
        <Reveal key={card.path} delay={i * 100}>
          <div className={(i + offsetStart) % 2 === 1 ? 'ip-grid-cell ip-grid-cell-offset' : 'ip-grid-cell'}>
            <TerminalCard card={card} />
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default function InProgress() {
  return (
    <section className="section in-progress-page">
      <Reveal>
        <div className="eyebrow">Lab Notebook</div>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="page-title">
          In <span className="accent">progress</span>.
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="hero-text">
          A live view of what's running on my machine. Two sections — what I'm researching and
          what I'm building.
        </p>
      </Reveal>

      <div className="ip-section">
        <Reveal>
          <div className="ip-row-head" style={{ borderColor: '#ec4899' }}>
            <div className="ip-row-label" style={{ color: '#ec4899' }}>
              ● Researching
            </div>
            <div className="ip-row-count">
              {researching.length} process{researching.length !== 1 ? 'es' : ''}
            </div>
          </div>
        </Reveal>
        <CardGrid cards={researching} offsetStart={0} />
      </div>

      <div className="ip-section">
        <Reveal>
          <div className="ip-row-head" style={{ borderColor: '#8b5cf6' }}>
            <div className="ip-row-label" style={{ color: '#8b5cf6' }}>
              ● Building
            </div>
            <div className="ip-row-count">
              {building.length} process{building.length !== 1 ? 'es' : ''}
            </div>
          </div>
        </Reveal>
        <CardGrid cards={building} offsetStart={1} />
      </div>
    </section>
  )
}