import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <section className="section hero">
      <Reveal>
        <div className="eyebrow">Portfolio</div>
      </Reveal>
      <Reveal delay={100}>
        <h1>
          Building software that's<br />
          <span className="accent">thoughtful</span> and <span className="accent">useful</span>.
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="hero-text">
          Hi! I'm Manasa, and I am currently in my last semester at the University of San Francisco! I've work across
          systems, web, and applied AI, and I care about building things that actually work for
          the people using them.
        </p>
      </Reveal>
      <Reveal delay={300}>
        <div className="hero-cta">
          <Link to="/work" className="btn btn-primary">See my projects →</Link>
          <Link to="/about" className="btn btn-ghost">About me</Link>
        </div>
      </Reveal>
    </section>
  )
}