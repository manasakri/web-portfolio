import Reveal from '../components/Reveal'
import { Divider } from '../components/Graphics'

const experience = [
  {
    
    company: 'ClearOne Advantage',
    role: 'Software Development Intern',
    period: '2026',
  },
  {
    company: 'Orchestro.ai',
    role: 'AI Engineering Intern and Research Intern',
    period: '2025',
  },

 {
    company: 'DigiChat',
    role: 'Game Development Intern',
    period: '2025',
  },
  {
    
    company: 'Kencor Health',
    role: 'Project Intern',
    period: '2022',
  },
  {
    company: 'University of San Francisco',
    role: 'Computer Science, B.S.\nMinor in Entrepreneurship & Innovation',
    period: '2021 – 2026',
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
                I grew up in Pleasanton, California, and much of my perspective comes from the people around me and the values I was raised with. 
                Growing up in an immigrant family gave me an early appreciation for resilience, opportunity, and access. I am also
                hard of hearing, which shaped how I think about communication, adaptability, and the different ways people move through the world. 
                Those experiences continue to shape how I approach my work and why I care about building technology that 
                feels both inclusive and accessible.            
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
                When I’m not in front of a computer, I’m usually taking a Pilates class, listening to podcasts and audiobooks, 
                working on a puzzle (currently a 1000-piece one), or wandering around the city. After nearly five years in 
                San Francisco, some of my favorite places are Golden Gate Park, North Beach, and the Mission. 
                Outside of work, I picture a life filled with close friendships, travel, and a career I feel genuinely 
                excited about. with friends, lots of travel, and a career I feel genuinely passionate and excited about. 

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
                
                I did not always think I would end up in computer science. I originally started as a psychology major because 
                I hoped to become a therapist, and I was a computer science minor because I enjoyed puzzles and problem-solving. 
                Over time, I became more drawn to CS because I realized how interdisciplinary it is. Technology touches almost 
                every part of life, and I started to see that computer science could connect to the things I already cared 
                about: people, creativity, design, and meaningful problem-solving.

                That perspective also led me to pursue a minor in Entrepreneurship and Innovation, where I could better understand 
                how to build with and for people, businesses, and and the communities they serve.
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
                 I’m looking for new-grad software roles where I can build thoughtful, human-centered 
                products with a strong technical foundation. I’m especially interested in software that 
                connects technology with creativity, behavior, and user experience, whether through 
                consumer-facing products, applied AI, or interactive systems. I truly value being on a 
                team that values curiosity and collaboration, because I believe that kind of environment 
                makes the work not only more engaging, but enjoyable to be a part of. 
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