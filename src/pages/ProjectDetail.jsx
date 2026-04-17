import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  const isVoiceProject = project.slug === 'ai-voice-training'
  const teamValue = project.team

  return (
    <article className="project-page">
      <div className="project-hero" style={{ background: project.gradient }}>
        <div className="project-hero-inner">
          <Reveal delay={100}>
            <h1 className="project-hero-title">{project.title}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="project-hero-tagline">{project.tagline}</p>
          </Reveal>
        </div>
      </div>

      <section className="section project-meta">
        <Reveal>
          <div className="meta-grid">
            <div>
              <div className="meta-label">Role</div>
              <div className="meta-value">{project.role}</div>
            </div>
            <div>
              <div className="meta-label">Team</div>
              <div className="meta-value">{teamValue}</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section split-section">
        <div className="split-left">
          <div className="eyebrow">Overview</div>
          <h2>What it is</h2>
        </div>
        <div>
          <Reveal>
            <p className="muted">{project.description}</p>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ marginTop: '2rem' }}>
              <div className="eyebrow">Stack</div>
              <h2>Tools & tech</h2>
              <div className="stack" style={{ marginTop: '1rem' }}>
                {project.stack.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </Reveal>

          {isVoiceProject && (
            <Reveal delay={200}>
              <div style={{ marginTop: '2rem' }}>
                <div className="eyebrow">Take a look</div>
                <p className="muted">
                  I’ll add pictures and a Google Slides presentation here.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section split-section">
        <div className="split-left">
          <div className="eyebrow">Highlights</div>
          <h2>What I did</h2>
        </div>
        <div className="highlights-list">
          {project.highlights.map((h, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr',
                  gap: '1rem',
                  padding: '1rem 0',
                  borderBottom: '1px solid rgba(24, 24, 27, 0.08)',
                }}
              >
                <div
                  className="card-number"
                  style={{
                    color: project.accent,
                    marginTop: '0.05rem',
                  }}
                >
                  0{i + 1}
                </div>
                <p style={{ margin: 0 }}>{h}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section next-project">
        <Reveal>
          <div className="eyebrow">Next project</div>
          <Link to={`/work/${next.slug}`} className="next-link" style={{ background: next.gradient }}>
            <div className="next-inner">
              <div>
                <div className="next-label">Keep going</div>
                <div className="next-title">{next.title}</div>
              </div>
              <div className="next-arrow">→</div>
            </div>
          </Link>
        </Reveal>
      </section>
    </article>
  )
}