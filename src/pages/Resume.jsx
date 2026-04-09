import Reveal from '../components/Reveal'

export default function Resume() {
  return (
    <section className="section resume-page">
      <Reveal>
        <div className="resume-header">
          <div>
            <div className="eyebrow">Resume</div>
            <h1 className="page-title">Manasa Krishnan</h1>
          </div>
          <a
            href="/resume.pdf"
            download
            className="btn btn-primary resume-download"
          >
            Download PDF ↓
          </a>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="pdf-frame">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="pdf-viewer"
          >
            <div className="pdf-fallback">
              <p>
                Your browser doesn't support inline PDF viewing.
              </p>
              <a href="/resume.pdf" download className="btn btn-primary">
                Download the PDF ↓
              </a>
            </div>
          </object>
        </div>
      </Reveal>
    </section>
  )
}