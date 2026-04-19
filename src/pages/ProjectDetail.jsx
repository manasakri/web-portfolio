import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SlowScroll from '../components/SlowScroll'
import ProjectTabs from '../components/ProjectTabs'
import { projects } from '../data/projects'

const topPrototypeItems = [
  { src: '/clearone-pics/prototype-1.png', alt: 'Prototype 1' },
  { src: '/clearone-pics/prototype-2.png', alt: 'Prototype 2' },
  { src: '/clearone-pics/prototype-3.png', alt: 'Prototype 3' },
  { src: '/clearone-pics/prototype-4.png', alt: 'Prototype 4' },
  { src: '/clearone-pics/prototype-5.png', alt: 'Prototype 5' },
  { src: '/clearone-pics/prototype-6.png', alt: 'Prototype 6' },
]

const bottomPrototypeItem = {
  src: '/clearone-pics/prototype-7.png',
  alt: 'Prototype 7',
}

const roadmapItems = [
  { number: '01', title: 'Research', subtitle: 'Refinement' },
  { number: '02', title: 'Data', subtitle: 'Collection' },
  { number: '03', title: 'Prototypes', subtitle: '' },
  { number: '04', title: 'Refinement', subtitle: '' },
]

const researchTabs = [
  {
    label: 'Signals',
    title: 'Project Signals',
    content:
      'We reviewed sponsor material, project requirements, and interaction examples to understand what the training flow needed to support and where clarity was missing.',
  },
  {
    label: 'Conversations',
    title: 'Conversations',
    content:
      'Team discussions and sponsor feedback helped define what mattered most in the experience, especially around readability, live guidance, and how feedback should appear during practice.',
  },
  {
    label: 'Patterns',
    title: 'Patterns',
    content:
      'The clearest pattern was that the interface needed to feel immediate, legible, and useful while a conversation was happening, not only after it ended.',
  },
  {
    label: 'Users',
    title: 'Users',
    subtabs: [{ label: 'Sales Rep' }, { label: 'Manager' }],
    content:
      'The main users were people practicing conversation scenarios and reviewing AI-supported guidance. The interface had to help them move between speaking, reading, and reflecting without losing context.',
  },
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const [selectedPrototype, setSelectedPrototype] = useState(null)

  if (!project) return <Navigate to="/work" replace />

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  const isVoiceProject = project.slug === 'ai-voice-training'

  const closeLightbox = () => setSelectedPrototype(null)

  return (
    <>
      <article className="project-page">
        <div className="project-hero" style={{ background: project.gradient }}>
          <div className="project-hero-inner">
            <div className="project-hero-decor" aria-hidden="true">
              <span className="hero-decor hero-decor-1" />
              <span className="hero-decor hero-decor-2" />
              <span className="hero-decor hero-decor-3" />
            </div>

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
              <div className="meta-item">
                <div className="meta-label">Role</div>
                <div className="meta-value meta-value-role">
                  <strong>
                    Software Engineer Intern
                    <br />
                  </strong>
                </div>
              </div>

              <div className="meta-item">
                <div className="meta-label">Team</div>
                <div className="meta-value meta-value-team">
                  <strong>Senior Capstone Team</strong>{' '}
                  <span className="meta-inline-note">
                    (Divya D&apos;Souza, Natalie Hlusi, Manasa Krishnan, Ankit
                    Mukhopadhyay)
                  </span>
                  <br />
                  <strong>ClearOne Advantage team and sponsors</strong>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section process-layout">
          <aside className="process-nav">
            <div className="process-nav-title">On this page</div>
            <a href="#overview">Overview</a>
            <a href="#what-i-did">What we Did</a>
            {isVoiceProject && <a href="#roadmap">Project Roadmap</a>}
            {isVoiceProject && <a href="#research">Research & Data</a>}
            {isVoiceProject && <a href="#prototypes">Prototypes</a>}
            {isVoiceProject && <a href="#take-a-look">Take a Look</a>}
            {isVoiceProject && <a href="#reflection">Reflection</a>}
          </aside>

          <div className="process-content">
            <section id="overview" className="process-block">
              <Reveal>
                <div className="eyebrow">Overview</div>
                <h2 className="process-heading">What it is</h2>
                <p className="muted process-copy process-copy-tight">
                  {project.description}
                </p>
              </Reveal>

              <Reveal delay={100}>
                <div className="process-subsection">
                  <div className="eyebrow">Stack</div>
                  <h3 className="process-subheading">Tools & tech</h3>
                  <div className="stack" style={{ marginTop: '1rem' }}>
                    {project.stack.map((s) => (
                      <span key={s} className="tag">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>

            <section id="what-i-did" className="process-block">
              <Reveal>
                <div className="eyebrow">Contributions</div>
                <h2 className="process-heading">What we did</h2>
              </Reveal>

              <div className="highlights-list">
                {project.highlights.map((h, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div className="what-i-did-row">
                      <div
                        className="card-number what-i-did-number"
                        style={{ color: project.accent }}
                      >
                        0{i + 1}
                      </div>
                      <p className="what-i-did-text">{h}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {isVoiceProject && (
              <>
                <section id="roadmap" className="process-block process-block-roadmap">
                  <Reveal>
                    <div className="eyebrow">Project Roadmap</div>
                    <h2 className="process-heading">How the project developed</h2>

                    <div className="roadmap-row">
                      {roadmapItems.map((item, i) => (
                        <div key={item.number} className="roadmap-item">
                          <div className={`roadmap-card roadmap-card-${i + 1}`}>
                            <div className="roadmap-card-top">
                              <div className="roadmap-card-number">{item.number}</div>
                              <div className="roadmap-card-mini-line" />
                            </div>
                            <div className="roadmap-card-text">
                              <span className="roadmap-card-title">{item.title}</span>
                              {item.subtitle ? (
                                <span className="roadmap-card-subtitle">{item.subtitle}</span>
                              ) : null}
                            </div>
                          </div>

                          {i < roadmapItems.length - 1 && (
                            <div className="roadmap-between-arrow">→</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </section>

                <section id="research" className="process-block">
                  <Reveal>
                    <div className="eyebrow">Research & Data</div>
                    <h2 className="process-heading">Core Insights</h2>
                    <p className="muted process-copy process-copy-tight">
                      Research, inputs, and patterns that informed the direction of the
                      project.
                    </p>
                  </Reveal>

                  <Reveal delay={100}>
                    <ProjectTabs tabs={researchTabs} />
                  </Reveal>
                </section>

                <section id="prototypes" className="process-block">
                  <Reveal>
                    <div className="eyebrow">Prototypes</div>
                    <h2 className="process-heading">Design explorations</h2>
                    <p className="muted process-copy process-copy-tight">
                      This section holds sketches, wireframes, interface iterations, and
                      visual checkpoints from the project.
                    </p>
                    <p className="muted process-copy process-copy-secondary">
                      From early structure to more polished interface decisions, these
                      helped document how the experience changed over time.
                    </p>
                  </Reveal>

                  <Reveal delay={100}>
                    <>
                      <SlowScroll speed={0.1} direction="up" className="parallax-layer">
                        <div className="prototype-strip">
                          {topPrototypeItems.map((item, i) => (
                            <button
                              key={item.src}
                              type="button"
                              className={`prototype-box prototype-box-button prototype-tone-${
                                (i % 4) + 1
                              }`}
                              onClick={() => setSelectedPrototype(item)}
                              aria-label={`Open ${item.alt}`}
                            >
                              <img
                                src={item.src}
                                alt={item.alt}
                                className="prototype-image"
                              />
                            </button>
                          ))}
                        </div>
                      </SlowScroll>

                      <SlowScroll speed={0.06} direction="down" className="parallax-layer">
                        <div className="prototype-feature">
                          <div className="prototype-feature-box prototype-tone-2">
                            <img
                              src={bottomPrototypeItem.src}
                              alt={bottomPrototypeItem.alt}
                              className="prototype-image"
                            />
                          </div>
                        </div>
                      </SlowScroll>
                    </>
                  </Reveal>
                </section>

                <section id="take-a-look" className="process-block">
                  <Reveal>
                    <div className="eyebrow">Take a look</div>
                    <h2 className="process-heading">Presentation</h2>
                  </Reveal>

                  <Reveal delay={100}>
                    <SlowScroll speed={0.05} direction="up" className="parallax-layer">
                      <div className="project-pdf-frame project-pdf-frame-small">
                        <object
                          data="/clearone-presentation.pdf"
                          type="application/pdf"
                          className="project-pdf-viewer"
                        >
                          <div className="pdf-fallback">
                            <p>Your browser doesn't support inline PDF viewing.</p>
                            <a
                              href="/clearone-presentation.pdf"
                              target="_blank"
                              rel="noreferrer"
                              className="btn btn-primary"
                            >
                              Open presentation
                            </a>
                          </div>
                        </object>
                      </div>
                    </SlowScroll>
                  </Reveal>
                </section>

                <section id="reflection" className="process-block">
                  <Reveal>
                    <div className="eyebrow">Reflection</div>
                    <h2 className="process-heading">What I learned</h2>
                    <p className="muted process-copy process-copy-tight">
                      This project pushed me to think about voice interaction not just as
                      a technical system, but as an experience. It made me think more
                      deeply about how responsiveness, clarity, and feedback shape whether
                      an interaction feels helpful in real time.
                    </p>
                  </Reveal>
                </section>
              </>
            )}
          </div>
        </section>

        <section className="section next-project">
          <Reveal>
            <div className="eyebrow">Next project</div>
            <Link
              to={`/work/${next.slug}`}
              className="next-link"
              style={{ background: next.gradient }}
            >
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

      {selectedPrototype && (
        <div
          className="prototype-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPrototype.alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="prototype-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            ×
          </button>

          <div
            className="prototype-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPrototype.src}
              alt={selectedPrototype.alt}
              className="prototype-lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  )
}