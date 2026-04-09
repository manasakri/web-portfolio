import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import InProgress from './pages/InProgress'
import ProjectDetail from './pages/ProjectDetail'
import { SparkMark } from './components/Graphics'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="site">
      <ScrollToTop />
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="brand">
            <SparkMark size={20} className="brand-spark" />
            Manasa Krishnan
          </Link>
          <nav className="nav">
            <NavLink to="/work">Work & Projects</NavLink>
            <NavLink to="/in-progress">In Progress</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
        <div className="topbar-rule" />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/in-progress" element={<InProgress />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>© 2026 Manasa Krishnan</div>
        <div>Designed and built by me.</div>
      </footer>
    </div>
  )
}