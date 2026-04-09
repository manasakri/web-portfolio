import Reveal from '../components/Reveal'
import { Divider } from '../components/Graphics'

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

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="section hero about-hero">
        <Reveal>
          <div className="eyebrow">About</div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="page-title">
            A little <span className="accent">about me</span>.
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="hero-text">
            I started studying CS because I liked taking things apart. Four years in, that hasn't
            changed — I'm just taking apart bigger things: emulators, compilers, language models,
            production systems. I write code that I'd want to inherit.
          </p>
        </Reveal>
      </section>

      {/* RAIL: four connected personal blocks */}
      <div className="about-rail">
        <div className="about-rail-line" aria-hidden="true" />

        {/* 01 — standard */}
        <Reveal>
          <div className="rail-block">
            <div className="rail-marker">
              <span className="rail-num">01</span>
            </div>
            <div className="rail-body rail-body-left">
              <div className="eyebrow eyebrow-pink">Growing up</div>
              <h2 className="rail-heading">Where I come from.</h2>
              <p className="muted">
                {/* EDIT: your origin story — hometown, family, early influences */}
                I grew up in [city/region], where [something about your environment — suburbs,
                a big family, a small town, moving around]. [One detail about your childhood
                that shaped you — a parent's job, an early obsession, a pivotal experience.]
                That's still the lens I see problems through today.
              </p>
            </div>
          </div>
        </Reveal>

        {/* 02 — shifted right */}
        <Reveal>
          <div className="rail-block rail-block-shifted">
            <div className="rail-marker">
              <span className="rail-num">02</span>
            </div>
            <div className="rail-body rail-body-right">
              <div className="eyebrow eyebrow-purple">Off the clock</div>
              <h2 className="rail-heading">What I get into.</h2>
              <p className="muted">
                {/* EDIT: hobbies, interests — be specific */}
                When I'm not in front of a terminal, I'm usually [hobby 1 — reading, cooking,
                running, drawing]. I'm into [specific interest — a genre, a book, a sport,
                a cuisine]. I also [another thing — travel, volunteer, play music].
              </p>
            </div>
          </div>
        </Reveal>

        {/* 03 — wide heading, short body */}
        <Reveal>
          <div className="rail-block">
            <div className="rail-marker">
              <span className="rail-num">03</span>
            </div>
            <div className="rail-body rail-body-wide">
              <div className="eyebrow eyebrow-cyan">The path here</div>
              <h2 className="rail-heading rail-heading-big">
                How I got into this.
              </h2>
              <p className="muted">
                {/* EDIT: the story of how CS became your thing */}
                I didn't always think I'd end up in computer science. [What you thought you'd
                do before CS — a different major, a different path.] Then [the moment that
                changed it — a class, a project, a problem you couldn't stop thinking about].
                The more I learned, the more I realized [why CS clicked for you].
              </p>
            </div>
          </div>
        </Reveal>

        {/* 04 — shifted right again */}
        <Reveal>
          <div className="rail-block rail-block-shifted">
            <div className="rail-marker">
              <span className="rail-num">04</span>
            </div>
            <div className="rail-body rail-body-right">
              <div className="eyebrow eyebrow-orange">Looking ahead</div>
              <h2 className="rail-heading">
                Where I'm <span className="accent">headed</span>.
              </h2>
              <p className="muted">
                {/* EDIT: what you want to do next */}
                I'm looking for new-grad software roles where I can work on [specific area —
                infrastructure, applied AI, developer tools, systems]. I care about [value —
                small teams, mentorship, clean codebases, shipping]. Long-term, I want to
                [bigger ambition].
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="section divider-wrap"><Divider /></div>

      {/* EXPERIENCE */}
      <section className="section split-section tight">
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
    </>
  )
}