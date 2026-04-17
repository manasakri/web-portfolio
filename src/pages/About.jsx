import Reveal from '../components/Reveal'
import { Divider } from '../components/Graphics'

const experience = [
  {
    company: 'ClearOne Advantage',
    role: 'AI Intern',
    period: '2026',
    summary: 'Built AI sales training simulations with persona modules for rep onboarding.',
  },
  {
    company: 'Orchestro.ai',
    role: 'AI Engineering Intern',
    period: '2025',
    summary: 'LLM evaluation systems, scoring pipelines, and RAG infrastructure.',
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
                I grew up in Pleasanton, California, where the people and places around me influenced me more 
                than I realized at the time. The person I look up to most is my sister, because she 
                taught me that respect starts with yourself and that confidence is a big part of that. I have 
                always admired how strongly she stands by what she believes and never backs down from what she 
                knows she deserves.

                I am just as thankful for the rest of my family and the support they have given me. I am hard of 
                hearing, and because my parents are immigrants, they did not always know how to navigate that experience, 
                but they worked incredibly hard to support me and create opportunities for our family. They gave us 
                experiences they never had themselves, from traveling to even simple things like going to the dentist. 
                Neither of my grandmothers graduated high school, so whenever I question what I am doing with my life, 
                I remind myself that being here and pursuing this path is a privilege.
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
                When I’m not in front of a computer, I’m usually taking a Pilates class, listening 
                to podcasts and audiobooks, putting together puzzles (currently a 1000-piece one),
                and wandering around the city. I’ve been in San Francisco for almost five years 
                now, and some of my favorite places to be are Golden Gate Park for a short walk, 
                North Beach for delicious food (and the city’s only In-N-Out), and the Mission District 
                for a good window-shopping experience. I actively avoid places where I have to walk 
                up a steep street or hill, including parts of Fillmore, Russian Hill, and Pac Heights. The 
                life I picture for myself includes small, intimate gatherings with friends, lots of travel, and 
                a career I feel genuinely passionate and excited about. 

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

                That is also what led me to pursue a minor in Entrepreneurship and Innovation. I wanted to become more well-rounded 
                and better understand how to build things not just technically, but with people, business, and real-world impact in mind
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
                makes the work more engaging, and more enjoyable to be part of.
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