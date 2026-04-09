import { useEffect, useRef, useState } from 'react'

// Hook: adds `is-visible` class when element scrolls into view
function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const stats = [
    { value: '3+', label: 'Years building software, from class projects to production internships' },
    { value: '2', label: 'AI/ML internships shipping LLM evaluation and training systems' },
    { value: '10+', label: 'Languages and frameworks across the full stack' },
    { value: '1', label: 'Capstone project leading interface and voice components' },
  ]

  const projects = [
    {
      title: 'AI Voice Training System',
      role: 'Frontend & Voice Lead — CS 490 Capstone',
      year: '2026',
      description:
        'Built the React interface for a real-time voice training tool that lets sales reps practice conversations with an AI persona. Owns the annotated transcript view, AI feedback display, and note-taking experience. Integrates OpenAI, Deepgram, and ElevenLabs through a WebSocket pipeline.',
      stack: ['React', 'WebSockets', 'Deepgram', 'ElevenLabs', 'OpenAI'],
    },
    {
      title: 'RISC-V Emulator & Cache Simulator',
      role: 'Individual Project — CS 315',
      year: '2026',
      description:
        'A full RISC-V instruction emulator in C that decodes and executes R, I, B, and J-type instructions, tracks instruction counts, and simulates a set-associative cache with LRU eviction. Debugged through dozens of edge cases in branch handling, stack management, and cache indexing.',
      stack: ['C', 'RISC-V', 'Computer Architecture'],
    },
    {
      title: 'LLM Evaluation Pipeline',
      role: 'AI Engineering Intern — Orchestro.ai',
      year: '2025',
      description:
        'Designed and built scoring pipelines and RAG infrastructure for evaluating large language model outputs. Worked across prompt design, retrieval tuning, and evaluation metrics to give the team a repeatable way to measure model quality.',
      stack: ['Python', 'RAG', 'Vector DBs', 'LLM Eval'],
    },
    {
      title: 'Web Server + Search Engine + Chatbot',
      role: 'Course Project — CS 272',
      year: '2025',
      description:
        'A Go web service that combines a crawler, an inverted-index search engine, and a RAG-powered chatbot with OpenAI function calling. Taught me Go concurrency patterns (goroutines, channels, mutexes) and how to build backends that stay responsive under load.',
      stack: ['Go', 'SQLite', 'RAG', 'MCP'],
    },
  ]

  const experience = [
    {
      company: 'Orchestro.ai',
      role: 'AI Engineering Intern',
      period: '2025',
      summary: 'LLM evaluation systems, scoring pipelines, and RAG infrastructure.',
    },
    {
      company: 'ClearOne Advantage',
      role: 'AI Intern',
      period: '2024',
      summary: 'Built AI sales training simulations with persona modules for rep onboarding.',
    },
    {
      company: 'University of San Francisco',
      role: 'Computer Science, B.S.',
      period: '2022 – 2026',
      summary: 'Coursework in computer architecture, file systems, software development, and ML.',
    },
  ]

  const skills = {
    Languages: ['Python', 'C', 'Go', 'JavaScript', 'RISC-V Assembly', 'SQL'],
    'Frameworks & Tools': ['React', 'FastAPI', 'Node', 'Vite', 'Git', 'SQLite'],
    'AI / ML': ['LLM Evaluation', 'RAG', 'Prompt Engineering', 'Vector Search'],
    Systems: ['Computer Architecture', 'File Systems', 'Cache Simulation', 'xv6'],
  }

  return (
    <div className="site">
      <header className="topbar">
        <div>
          <div className="brand-small">Manasa Krishnan</div>
          <div className="brand-main">Software Engineer</div>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="section hero">
          <Reveal>
            <div className="eyebrow">Portfolio — 2026</div>
          </Reveal>
          <Reveal delay={100}>
            <h1>
              Building software that's<br />
              <span className="accent">thoughtful</span> and <span className="accent">useful</span>.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero-text">
              I'm Manasa — a final-year CS student at the University of San Francisco. I work across
              systems, web, and applied AI, and I care about building things that actually work for
              the people using them.
            </p>
          </Reveal>
        </section>

        {/* ABOUT SPLIT */}
        <section className="section split-section" id="about">
          <div className="split-left">
            <div className="eyebrow">About</div>
            <h2>A little about me</h2>
          </div>
          <div>
            <p className="muted">
              I started studying CS because I liked taking things apart. Four years in, that hasn't
              changed — I'm just taking apart bigger things: emulators, compilers, language models,
              production systems. I've interned on AI evaluation infrastructure and built real-time
              voice applications. I write code that I'd want to inherit.
            </p>
            <p className="muted">
              Right now I'm finishing a capstone on AI voice training, studying computer architecture
              with Phil Peterson at USF, and looking for new-grad software roles.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="section">
          <Reveal>
            <div className="eyebrow">By the numbers</div>
          </Reveal>
          <div className="stats-grid">
            {stats.map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="stat-card">
                  <h2>{item.value}</h2>
                  <p>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section split-section" id="work">
          <div className="split-left">
            <div className="eyebrow">Selected Work</div>
            <h2>Projects I'm proud of</h2>
            <p className="muted">
              A mix of course work, internships, and capstone projects spanning systems, AI, and web.
            </p>
          </div>
          <div className="projects-list">
            {projects.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article className="project-card">
                  <div className="card-number">0{i + 1}</div>
                  <div className="project-header">
                    <h3>{p.title}</h3>
                    <span className="project-year">{p.year}</span>
                  </div>
                  <div className="project-role">{p.role}</div>
                  <p>{p.description}</p>
                  <div className="stack">
                    {p.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section split-section" id="experience">
          <div className="split-left">
            <div className="eyebrow">Experience</div>
            <h2>Where I've been</h2>
          </div>
          <div className="experience-list">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 80}>
                <div className="experience-item">
                  <div className="experience-period">{e.period}</div>
                  <div>
                    <div className="experience-role">{e.role}</div>
                    <div className="experience-company">{e.company}</div>
                    <p>{e.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="section split-section">
          <div className="split-left">
            <div className="eyebrow">Toolkit</div>
            <h2>What I work with</h2>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], i) => (
              <Reveal key={category} delay={i * 80}>
                <div className="skill-group">
                  <div className="skill-category">{category}</div>
                  <div className="skill-items">
                    {items.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <Reveal>
            <div className="eyebrow">Let's talk</div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="contact-heading">
              Always up for a good<br />conversation about code.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="contact-links">
              <a href="mailto:mkrishnan3@dons.usfca.edu">mkrishnan3@dons.usfca.edu</a>
              <a href="https://github.com/manasakri" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </Reveal>
        </section>

        <footer className="footer">
          <div>© 2026 Manasa Krishnan</div>
          <div>Designed and built by me.</div>
        </footer>
      </main>
    </div>
  )
}