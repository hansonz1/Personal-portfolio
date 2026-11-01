import ProjectCarousel from './ProjectCarousel.jsx'
import { stoplossAudits } from '../data/stoplossAudits.js'

const eyebrow = 'project-label text-[#454a41]'
const heading = 'project-slide-heading'
const body = 'project-body text-[#59615c]'
const featuredExample = stoplossAudits.find(audit => audit.name === 'Naptime Needs')

function FeaturedAudit({ audit }) {
  return (
    <article className="min-w-0">
      <h4 className="font-medium text-2xl leading-tight tracking-tight">{audit.name}</h4>
      <p className="mt-3 text-sm leading-relaxed text-[#59615c]">{audit.observation}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#59615c]">
        <span className="font-medium text-[#242623]">Proposed:</span> {audit.action}
      </p>
    </article>
  )
}

const slides = [
  {
    id: 'problem',
    label: 'The method',
    content: (
      <div>
        <p className={eyebrow}>01 / The method</p>
        <div className="mt-5 grid items-start gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="min-w-0">
            <h3 className={heading}>How I approach an audit</h3>
            <p className={`mt-5 max-w-[620px] ${body}`}>Review public storefront, social, and competitor signals. Form a working diagnosis, then propose an action to test.</p>
          </div>
          <ol aria-label="Analytical process" className="min-w-0">
            {[
              ['Observe', 'Review storefront and social signals: products, pricing, shipping, and competing offers.'],
              ['Diagnose', 'Use Strategy / Creation / Math to distinguish observed issues from working hypotheses.'],
              ['Propose', 'Recommend a testable change, such as a bundle, clearer messaging, or a simpler audience-to-store path.'],
            ].map(([label, detail]) => (
              <li key={label} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-3 py-2.5 lg:grid-cols-[5rem_1fr] lg:py-3">
                <span className="text-sm font-medium text-[#242623]">{label}</span>
                <p className="text-sm leading-relaxed text-[#59615c]">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    ),
  },
  {
    id: 'framework',
    label: 'The audit framework',
    content: (
      <div>
        <p className={eyebrow}>02 / The audit framework</p>
        <h3 className={`${heading} mt-5`}>What I look for</h3>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Read the signals', 'Review the public storefront and social presence.'],
            ['Review the offer', 'Examine products, pricing, and shipping.'],
            ['Compare alternatives', 'Put the offer in its competitor context.'],
            ['Analyze & prioritize', 'Apply Strategy / Creation / Math, then propose next actions.'],
          ].map(([title, detail], index) => (
            <li key={title} className="min-w-0 border-t border-[#dce0dc] pt-4">
              <span className="font-mono text-xs text-[#454a41]">0{index + 1}</span>
              <h4 className="mt-3 font-medium text-xl leading-snug">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#59615c]">{detail}</p>
            </li>
          ))}
        </ol>
        <dl className="mt-6 grid gap-5 border-t border-[#dce0dc] pt-5 sm:grid-cols-3">
          {[
            ['Strategy', 'Who is the buyer, and why this offer?'],
            ['Creation', 'How clearly do the message and presentation express the value?'],
            ['Math', 'Which commercial assumptions need more evidence?'],
          ].map(([title, detail]) => (
            <div key={title}>
              <dt className="font-medium text-xl">{title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#59615c]">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    ),
  },
  {
    id: 'gallery',
    label: 'Five public audits',
    content: (
      <div>
        <p className={eyebrow}>03 / Five public audits</p>
        <h3 className={`${heading} mt-5`}>Five public store audits</h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2 md:gap-10">
          {stoplossAudits.filter(audit => audit.featured).map(audit => <FeaturedAudit key={audit.name} audit={audit} />)}
        </div>
        <div className="mt-6">
          <p className={`${eyebrow} mb-3`}>Supporting perspectives</p>
          <ul className="divide-y divide-[#dce0dc]">
            {stoplossAudits.filter(audit => !audit.featured).map(audit => (
              <li key={audit.name} className="grid items-baseline gap-2 py-3 md:grid-cols-[160px_1fr] md:gap-6">
                <h4 className="min-w-0 font-medium text-xl leading-snug">{audit.name}</h4>
                <p className="text-sm leading-relaxed text-[#59615c]">
                  {audit.observation}{' '}
                  <span className="font-medium text-[#242623]">Proposed:</span> {audit.action}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-[#626b66]">Public observations and proposed actions, not measured conversion or AOV improvements.</p>
      </div>
    ),
  },
  {
    id: 'explore',
    label: 'Explore the audits',
    content: (
      <div>
        <p className={eyebrow}>04 / Explore the audits</p>
        <h3 className={`${heading} mt-5`}>Explore the original audits</h3>
        <p className={`mt-5 max-w-[620px] ${body}`}>Explore each public audit on X. The cases present diagnoses and proposed actions; they do not establish verified post-implementation outcomes.</p>
        <ul className="mt-6 divide-y divide-[#dce0dc] border-y border-[#dce0dc]">
          {stoplossAudits.map((audit, index) => (
            <li key={audit.name}>
              <a href={audit.url} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between gap-4 rounded-sm py-3 hover:text-[#454a41] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#454a41] motion-safe:transition-colors">
                <span className="flex min-w-0 items-center gap-4 sm:gap-6">
                  <span aria-hidden="true" className="font-mono text-[10px] text-[#626b66]">0{index + 1}</span>
                  <span className="min-w-0">
                    <span className="block break-words font-medium text-xl">{audit.name}</span>
                    <span className="mt-1 block text-xs text-[#626b66]">Public audit on X</span>
                  </span>
                </span>
                <span aria-hidden="true" className="text-xl">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
]

function StoplossFeaturedProject() {
  return (
    <section aria-labelledby="stoploss-heading" className="project-section stoploss-featured-project bg-[#f7f8f6] text-[#242623]">
      <div className="content-container project-section-content">
        <header className="project-section-header">
          <div className="project-section-meta border-[#d1d6d0]">
            <p className={eyebrow}>Project</p>
            <p className="whitespace-nowrap text-[10px] tracking-wide text-[#626b66]"><time dateTime="2026-04">Apr 2026</time> – Present</p>
          </div>
          <div>
            <h2 id="stoploss-heading" className="project-title">Stoploss Audit</h2>
          </div>
          <div className="mt-5">
            <p className="text-sm font-medium">
              <a href={featuredExample.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-sm underline decoration-[#b9c1b7] underline-offset-4 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e]">
                Featured example · {featuredExample.name}
                <span className="sr-only"> (public audit on X, opens in a new tab)</span>
              </a>
            </p>
            <dl className="mt-2 grid gap-3 sm:grid-cols-3 sm:gap-6">
              {[
                ['Observe', 'Three sleep products sold separately.'],
                ['Hypothesize', 'A combined sleep routine could make the offer clearer.'],
                ['Propose', 'Test a Sleep Stack bundle and shipping-threshold strategy.'],
              ].map(([label, detail]) => (
                <div key={label} className="grid min-w-0 grid-cols-[6.25rem_1fr] items-baseline gap-x-3 sm:block">
                  <dt className={eyebrow}>{label}</dt>
                  <dd className="text-sm leading-relaxed text-[#59615c] sm:mt-2">{detail}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs leading-relaxed text-[#626b66]">Independent public-audit observations, hypotheses, and untested proposals. No merchant-client relationship or adoption of recommendations is implied. No verified commercial outcomes.</p>
          </div>
        </header>
        <ProjectCarousel slides={slides} label="Stoploss Audit case studies" theme="light" />
      </div>
    </section>
  )
}

export default StoplossFeaturedProject
