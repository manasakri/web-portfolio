import { useState } from 'react'

export default function ProjectTabs({ tabs = [] }) {
  const [active, setActive] = useState(0)

  if (!tabs.length) return null

  return (
    <div className="project-tabs">
      <div className="project-tabs-rail" role="tablist" aria-label="Project research tabs">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={`project-tab-trigger ${active === i ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span className="project-tab-trigger-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="project-tab-trigger-text">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="project-tab-surface">
        <div className="project-tab-surface-inner">
          {tabs[active].title && <h3 className="project-tab-title">{tabs[active].title}</h3>}

          {tabs[active].subtabs?.length ? (
            <>
              <div className="project-subtabs">
                {tabs[active].subtabs.map((subtab, i) => (
                  <button
                    key={subtab.label}
                    type="button"
                    className={`project-subtab ${i === 0 ? 'is-active' : ''}`}
                  >
                    {subtab.label}
                  </button>
                ))}
              </div>
              <p className="project-tab-copy">{tabs[active].content}</p>
            </>
          ) : (
            <p className="project-tab-copy">{tabs[active].content}</p>
          )}
        </div>
      </div>
    </div>
  )
}