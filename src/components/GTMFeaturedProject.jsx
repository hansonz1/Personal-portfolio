import ProjectCarousel from './ProjectCarousel.jsx'

const repository = 'https://github.com/hansonz1/GTM-Competitor-Intelligence'
const eyebrowStyle = 'text-[10px] font-medium tracking-[0.2em] text-[#c4d4b1] uppercase'
const headingStyle = 'mt-5 max-w-[760px] text-3xl leading-[1.08] font-medium tracking-[-0.045em] sm:text-4xl lg:text-5xl'
const bodyStyle = 'text-base leading-relaxed text-[#adb5a7]'
const linkStyle = 'group flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-white/15 px-5 py-5 hover:border-[#c4d4b1]/60 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d0dfbc] motion-safe:transition-colors'

const workflow = [
  { title: 'GitHub Actions', detail: 'Daily schedule or manual run', number: '01' },
  { title: 'Python collection', detail: 'Requests + BeautifulSoup', number: '02' },
  { title: 'Snapshot comparison', detail: 'Compare titles in JSON', number: '03' },
  { title: 'Gemini analysis', detail: 'Structured JSON battlecard', number: '04' },
]

function OutboundArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-[#c4d4b1]">
      <path d="M6 18 18 6M6 6h12v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Project-specific storytelling lives here; the carousel only receives slide data.
const slides = [
  {
    id: 'business',
    label: 'Business overview',
    content: (
      <div>
        <p className={eyebrowStyle}>01 / Business overview</p>
        <h3 className={headingStyle}>From competitor signals to GTM decisions.</h3>
        <p className={`mt-5 max-w-[640px] ${bodyStyle}`}>
          A prototype for product marketers: competitor updates in, structured GTM recommendations out.
        </p>

        <ol aria-label="Decision-support process, in order" className="mt-9 grid gap-9 md:grid-cols-3 md:gap-10">
          {[
            { title: 'Observe', detail: 'New changelog titles', icon: 'M5 6h14M5 12h8M5 18h8M17 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2 0 2 2' },
            { title: 'Interpret', detail: 'Positioning context', icon: 'M4 4h6v6H4zM14 14h6v6h-6zM14 7h3v7M7 10v7h7' },
            { title: 'Recommend', detail: 'Actions + evidence gaps', icon: 'M8 5h11v15H5V9M4 4l3 3 4-4M9 12h6M9 16h6' },
          ].map((stage, index) => (
            <li key={stage.title} className="relative min-w-0 rounded-2xl border border-white/10 bg-[#121612] p-5 lg:p-6">
              <div className="flex items-center justify-between gap-3">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-10 text-[#c4d4b1]">
                  <path d={stage.icon} stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span aria-hidden="true" className="font-mono text-xs text-[#8e9886]">0{index + 1}</span>
              </div>
              <span className="mt-6 block text-2xl font-medium tracking-tight lg:text-3xl">{stage.title}</span>
              <span className="mt-2 block text-xs leading-relaxed text-[#adb5a7]">{stage.detail}</span>
              {index < 2 && (
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="absolute -bottom-[29px] left-1/2 size-5 -translate-x-1/2 rotate-90 text-[#8e9886] md:top-1/2 md:-right-[31px] md:bottom-auto md:left-auto md:translate-x-0 md:-translate-y-1/2 md:rotate-0">
                  <path d="M4 12h16m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs leading-relaxed text-[#a0a79c]">AI recommendations require verification.</p>
      </div>
    ),
  },
  {
    id: 'workflow',
    label: 'Technical workflow',
    content: (
      <div>
        <p className={eyebrowStyle}>02 / Technical workflow</p>
        <h3 className={headingStyle}>A signal. A comparison.<br />A more informed next step.</h3>
        <p className={`mt-5 max-w-[640px] ${bodyStyle}`}>
          Folk’s public changelog is the source. Local Attio positioning assumptions provide the business context.
        </p>
        <ol aria-label="Pipeline, in execution order" className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {workflow.map((step, index) => (
            <li key={step.number} className="relative min-w-0 rounded-2xl border border-white/10 bg-[#121612] p-5">
              <span className="font-mono text-xs text-[#c4d4b1]">{step.number}</span>
              <h4 className="mt-5 text-base font-medium tracking-tight">{step.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[#adb5a7]">{step.detail}</p>
              {index < workflow.length - 1 && <span aria-hidden="true" className="absolute top-1/2 -right-[19px] hidden text-[#8e9886] lg:block">→</span>}
            </li>
          ))}
        </ol>
        <p className="mt-7 border-t border-white/10 pt-5 text-sm leading-relaxed text-[#adb5a7]">
          Gemini runs only when new titles are detected. Its output includes potential impact, confidence, recommendations, and evidence gaps—not fully fact-verified analysis.
        </p>
      </div>
    ),
  },
  {
    id: 'results',
    label: 'Results & validation',
    content: (
      <div>
        <p className={eyebrowStyle}>03 / Results & validation</p>
        <h3 className={headingStyle}>Small scope.<br />Observable results.</h3>
        <dl className="mt-9 grid gap-6 border-y border-white/10 py-7 sm:grid-cols-3 sm:gap-8">
          {[
            { value: '91', label: 'Captured titles', detail: 'Oct 27, 2026' },
            { value: '92', label: 'Captured titles', detail: 'Oct 30, 2026' },
            { value: '+1', label: 'Detected addition', detail: 'Between saved snapshots' },
          ].map((metric) => (
            <div key={metric.value} className="min-w-0">
              <dt className="text-xs text-[#adb5a7]">{metric.label}<span className="mt-1 block text-[#a0a79c]">{metric.detail}</span></dt>
              <dd className="mt-3 text-6xl leading-none font-medium tracking-[-0.065em] text-[#d0dfbc] sm:text-7xl">{metric.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 sm:gap-12">
          <div>
            <h4 className="text-sm font-medium">Detection results, not business impact.</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#adb5a7]">Saved JSON snapshots and the change report agree on one new title. No time savings, revenue lift, or accuracy rate has been measured.</p>
          </div>
          <div>
            <h4 className="text-sm font-medium">The boundaries are part of the story.</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#adb5a7]">One competitor. Title-only detection misses edits to existing update bodies. The documented AI positive-path test uses a hypothetical update.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'explore',
    label: 'Explore project',
    content: (
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className={eyebrowStyle}>04 / Explore project</p>
          <h3 className={headingStyle}>Look past the headline.<br />Into the work.</h3>
          <p className={`mt-7 ${bodyStyle}`}>Explore the Python implementation, the evidence behind the results, and the limitations that shape what comes next.</p>
          <p className="mt-7 text-xs leading-relaxed text-[#a0a79c]">An independent prototype using a public source and local positioning hypotheses.</p>
        </div>
        <div className="flex flex-col justify-center gap-3">
          {[
            { title: 'Explore the repository', detail: 'Python, Gemini, and automation', href: repository },
            { title: 'Read the README', detail: 'Scope, architecture, and setup', href: `${repository}/blob/main/README.md` },
            { title: 'Read the case study', detail: 'Engineering decisions, evidence, and limitations', href: `${repository}/blob/main/CASE_STUDY.md` },
          ].map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
              <span className="min-w-0">
                <span className="block text-base font-medium tracking-tight">{link.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-[#adb5a7]">{link.detail}</span>
              </span>
              <OutboundArrow />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </div>
    ),
  },
]

function GTMFeaturedProject() {
  return (
    <section id="projects" aria-labelledby="gtm-project-heading" className="gtm-featured-project bg-[#101310] text-[#f3f5ef]">
      <div className="mx-auto max-w-[1680px] px-6 py-14 sm:px-10 sm:py-20 lg:px-12 xl:px-16">
        <header className="gtm-project-aligned mb-8 sm:mb-10">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 sm:mb-8">
            <p className="text-[10px] font-medium tracking-[0.2em] text-[#a0a79c] uppercase">Selected work / 01</p>
            <p className="text-[10px] tracking-wide text-[#a0a79c]">Independent prototype · 2026</p>
          </div>
          <h2 id="gtm-project-heading" className="text-[clamp(2.25rem,5.2vw,5rem)] leading-[1.04] font-medium tracking-[-0.05em] text-balance [overflow-wrap:anywhere]">GTM Competitor Intelligence</h2>
          <div className="mt-5 grid items-center gap-5 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
            <p className="max-w-[560px] text-base leading-relaxed text-[#adb5a7] sm:text-lg">Connecting competitive signals with business context through Python automation and AI.</p>
            <ul aria-label="Project skills" className="flex flex-wrap gap-2 lg:justify-end">
              {['Python', 'Workflow automation', 'Gemini API', 'GTM strategy'].map((skill) => (
                <li key={skill} className="rounded-full border border-white/15 px-3.5 py-2 text-[11px] text-[#c4cbbe]">{skill}</li>
              ))}
            </ul>
          </div>
        </header>
        <ProjectCarousel slides={slides} label="GTM Competitor Intelligence project story" />
      </div>
    </section>
  )
}

export default GTMFeaturedProject
