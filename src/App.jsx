export default function PortfolioLayout() {
  const sections = [
    {
      label: "Description",
      title: "A project exploring how design can make people feel more supported, grounded, and informed.",
    },
    {
      label: "My Role",
      title: "Designer / Researcher / Developer",
    },
    {
      label: "The Goal",
      title: "Understand a real human problem and design a response that feels thoughtful, useful, and emotionally aware.",
    },
  ];

  const process = [
    "Project Overview & Focus",
    "Research & Discovery",
    "Synthesis",
    "Design Direction",
  ];

  const stats = [
    { value: "12", label: "Interviews conducted" },
    { value: "40+", label: "Themes identified" },
    { value: "6", label: "Key insights" },
    { value: "3", label: "Design directions explored" },
  ];

  const insights = [
    "People often delay asking for help when systems make them feel exposed or judged.",
    "Unclear next steps increase anxiety even when support is technically available.",
    "People trust experiences that feel calm, legible, and emotionally considerate.",
    "Overwhelm builds gradually through many small points of friction, not just one major failure.",
    "Language, pacing, and structure shape whether a system feels supportive or cold.",
    "A better experience is not only functional — it helps people feel more capable and less alone.",
  ];

  const principles = [
    {
      title: "Clarity",
      text: "Design should reduce uncertainty by making next steps obvious and information easier to process.",
    },
    {
      title: "Care",
      text: "The experience should acknowledge emotional reality, not assume every user is calm and confident.",
    },
    {
      title: "Confidence",
      text: "People should leave the experience feeling more grounded, informed, and capable of taking action.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-500">Your Name</div>
            <div className="text-lg font-medium">Portfolio</div>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
            <a href="#overview" className="hover:text-zinc-900">Overview</a>
            <a href="#process" className="hover:text-zinc-900">Process</a>
            <a href="#insights" className="hover:text-zinc-900">Insights</a>
            <a href="#framework" className="hover:text-zinc-900">Framework</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">Case Study</div>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              Placeholder Project Title
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
              A long-form project page for presenting research, design thinking, and visual storytelling in a more thoughtful and editorial way.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 md:grid-cols-3" id="overview">
          {sections.map((item) => (
            <div key={item.label} className="border-t border-zinc-300 pt-4">
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">{item.label}</div>
              <p className="mt-4 text-lg leading-8 text-zinc-800">{item.title}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="rounded-[2rem] border border-zinc-200 bg-white p-4 shadow-sm md:p-8">
            <div className="aspect-[16/8] w-full rounded-[1.5rem] bg-gradient-to-br from-amber-100 via-rose-100 to-orange-50" />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20" id="process">
          <div className="grid gap-12 md:grid-cols-[260px_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">The Process</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">A simple roadmap</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {process.map((step, index) => (
                <div key={step} className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
                  <div className="text-sm text-zinc-500">0{index + 1}</div>
                  <div className="mt-3 text-xl font-medium text-zinc-900">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid gap-5 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] bg-zinc-900 p-6 text-stone-50">
                <div className="text-4xl font-semibold tracking-tight">{item.value}</div>
                <div className="mt-2 text-sm leading-6 text-zinc-300">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20" id="insights">
          <div className="grid gap-12 md:grid-cols-[260px_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Insights</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">What emerged from the work</h2>
            </div>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
                  <div className="text-sm text-zinc-500">Insight {index + 1}</div>
                  <p className="mt-3 text-lg leading-8 text-zinc-800">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20" id="framework">
          <div className="grid gap-12 md:grid-cols-[260px_1fr]">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-zinc-500">Framework</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Design principles</h2>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                Placeholder principles that translate research into a clearer design direction.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.2em] text-zinc-500">{item.title}</div>
                  <p className="mt-4 text-base leading-7 text-zinc-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-[2rem] border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-500 shadow-sm md:p-16">
            Placeholder area for more visuals, diagrams, screenshots, or a final reflection.
          </div>
        </section>
      </main>
    </div>
  );
}
