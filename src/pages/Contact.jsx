import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <section className="section hero contact">
      <Reveal>
        <div className="eyebrow">Let's talk</div>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="contact-heading">
          Always up for a good<br />
          <span className="accent">conversation</span> about code.
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="hero-text">
          Whether it's a new-grad role, a collaboration, or just to chat about systems and AI —
          drop me a line.
        </p>
      </Reveal>
      <Reveal delay={300}>
        <div className="contact-links">
          <a href="mailto:mkrishnan3@dons.usfca.edu">mkrishnan3@dons.usfca.edu</a>
          <a href="https://github.com/manasakri" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  )
}