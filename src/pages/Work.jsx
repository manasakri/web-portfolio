import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { projects } from '../data/projects'
import { projectGraphics } from '../components/Graphics'

const sizePatterns = [
  { col: 7, row: 2 },  // row 1 left: wide
  { col: 5, row: 2 },  // row 1 right: narrow
  { col: 8, row: 2 },  // row 2 left: wide
  { col: 4, row: 2 },  // row 2 right: narrow
]

export default function Work() {
  return (
    <div className="work-page-full">
      <div className="work-intro">
        <Reveal>
          <div className="eyebrow">Work & Projects</div>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="page-title">Things I've built.</h1>
        </Reveal>
      </div>

      <div className="work-grid-full">
        {projects.map((p, i) => {
          const size = sizePatterns[i % sizePatterns.length]
          const Graphic = projectGraphics[p.slug]
          return (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="work-cell"
              style={{
                background: p.gradient,
                gridColumn: `span ${size.col}`,
                gridRow: `span ${size.row}`,
              }}
            >
              {Graphic && (
                <div className="work-cell-graphic">
                  <Graphic />
                </div>
              )}
              <div className="work-cell-meta">
                <span>{p.year}</span>
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="work-cell-hover">
                <div className="work-cell-title">{p.title}</div>
                <div className="work-cell-subtitle">{p.subtitle}</div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}