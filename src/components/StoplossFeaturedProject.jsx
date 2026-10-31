import ProjectCarousel from './ProjectCarousel.jsx'
import { stoplossAudits } from '../data/stoplossAudits.js'

const eyebrow = 'text-[10px] font-semibold tracking-[0.18em] text-[#835b43] uppercase'
const heading = 'max-w-[820px] font-serif text-[clamp(1.75rem,3vw,2.25rem)] leading-[1.13] tracking-[-0.025em]'
const body = 'text-base leading-relaxed text-[#625a4e]'

function FeaturedAudit({ audit }) {
  return (
    <article className="min-w-0 border-t border-[#d6cec0] pt-4">
      <h4 className="font-serif text-2xl leading-tight tracking-tight">{audit.name}</h4>
      <p className="mt-3 text-sm leading-relaxed text-[#625a4e]">{audit.observation}</p>
      <p className="mt-3 text-sm leading-relaxed text-[#625a4e]">
        <span className="font-medium text-[#302b24]">Proposed:</span> {audit.action}
      </p>
    </article>
  )
}

const slides = [
  {
    id: 'problem',
    label: 'The business problem',
    content: (
      <div>
        <p className={eyebrow}>01 / The business problem</p>
        <div className="mt-4 grid items-start gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="max-w-[540px]">
            <h3 className={heading}>Plenty of signals.<br />No clear diagnosis.</h3>
            <div className="mt-5 space-y-4">
              <p className={body}>For early-stage Shopify merchants, storefronts, social channels, and competitor offers tell different parts of the story. Public signals alone rarely explain what to prioritize.</p>
              <p className={body}>Stoploss Audit is an AI-assisted, structured business diagnosis workflow that turns those observations into working diagnoses and proposed actions.</p>
            </div>
          </div>
          <div className="border-t border-[#d6cec0] py-4 lg:border-b">
            <p className={eyebrow}>The evidence is fragmented</p>
            <ul className="mt-3 divide-y divide-[#e6dfd3] font-serif text-xl">
              {['Storefront & offer', 'Social presence', 'Competitive context'].map((signal) => (
                <li key={signal} className="py-3">{signal}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 border-t border-[#d6cec0] pt-4 text-xs leading-relaxed text-[#706657]">Independent public audits. No merchant-client relationship or adoption of recommendations is implied.</p>
      </div>
    ),
  },
  {
    id: 'framework',
    label: 'The audit framework',
    content: (
      <div>
        <p className={eyebrow}>02 / The audit framework</p>
        <h3 className={`${heading} mt-4`}>From public evidence to a prioritized next step.</h3>
        <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Read the signals', 'Review the public storefront and social presence.'],
            ['Review the offer', 'Examine products, pricing, and shipping.'],
            ['Compare alternatives', 'Put the offer in its competitor context.'],
            ['Analyze & prioritize', 'Apply Strategy / Creation / Math, then propose next actions.'],
          ].map(([title, detail], index) => (
            <li key={title} className="min-w-0 border-t border-[#d6cec0] pt-4">
              <span className="font-mono text-xs text-[#835b43]">0{index + 1}</span>
              <h4 className="mt-3 font-serif text-xl leading-snug">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#625a4e]">{detail}</p>
            </li>
          ))}
        </ol>
        <dl className="mt-6 grid gap-5 border-t border-[#d6cec0] pt-5 sm:grid-cols-3">
          {[
            ['Strategy', 'Who is the buyer, and why this offer?'],
            ['Creation', 'How clearly do the message and presentation express the value?'],
            ['Math', 'Which commercial assumptions need more evidence?'],
          ].map(([title, detail]) => (
            <div key={title}>
              <dt className="font-serif text-xl">{title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#625a4e]">{detail}</dd>
            </div>
          ))}
        </dl>
        <aside className="mt-5 border-l-2 border-[#a37a59] bg-[#f3eee4] px-5 py-3 text-sm leading-relaxed text-[#625a4e]">
          <strong className="font-semibold text-[#302b24]">The limits of public evidence.</strong>{' '}
          Information is incomplete. Private conversion, margin, and CAC data are generally unavailable, so recommendations remain hypotheses to test.
        </aside>
      </div>
    ),
  },
  {
    id: 'gallery',
    label: 'Five public audits',
    content: (
      <div>
        <p className={eyebrow}>03 / Five public audits</p>
        <h3 className={`${heading} mt-4`}>Five audits. One framework.</h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2 md:gap-10">
          {stoplossAudits.filter(audit => audit.featured).map(audit => <FeaturedAudit key={audit.name} audit={audit} />)}
        </div>
        <div className="mt-6">
          <p className={`${eyebrow} mb-3`}>Supporting perspectives</p>
          <ul className="divide-y divide-[#d6cec0] border-y border-[#d6cec0]">
            {stoplossAudits.filter(audit => !audit.featured).map(audit => (
              <li key={audit.name} className="grid items-baseline gap-2 py-3 md:grid-cols-[160px_1fr] md:gap-6">
                <h4 className="min-w-0 font-serif text-xl leading-snug">{audit.name}</h4>
                <p className="text-sm leading-relaxed text-[#625a4e]">
                  {audit.observation}{' '}
                  <span className="font-medium text-[#302b24]">Proposed:</span> {audit.action}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-[#706657]">Public observations and proposed actions, not measured conversion or AOV improvements.</p>
      </div>
    ),
  },
  {
    id: 'explore',
    label: 'Explore the audits',
    content: (
      <div>
        <p className={eyebrow}>04 / Explore the audits</p>
        <h3 className={`${heading} mt-4`}>Read the reasoning. See the proposals.</h3>
        <p className={`mt-4 max-w-[620px] ${body}`}>Explore each public audit on X. The cases present diagnoses and proposed actions; they do not establish verified post-implementation outcomes.</p>
        <ul className="mt-6 divide-y divide-[#d6cec0] border-y border-[#d6cec0]">
          {stoplossAudits.map((audit, index) => (
            <li key={audit.name}>
              <a href={audit.url} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between gap-4 rounded-sm py-3 hover:text-[#835b43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#835b43] motion-safe:transition-colors">
                <span className="flex min-w-0 items-center gap-4 sm:gap-6">
                  <span aria-hidden="true" className="font-mono text-[10px] text-[#706657]">0{index + 1}</span>
                  <span className="min-w-0">
                    <span className="block break-words font-serif text-xl">{audit.name}</span>
                    <span className="mt-1 block text-xs text-[#706657]">Public audit on X</span>
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
    <section aria-labelledby="stoploss-heading" className="stoploss-featured-project bg-[#f4f0e7] text-[#302b24]">
      <div className="mx-auto max-w-[1680px] px-6 py-12 sm:px-10 sm:py-16 lg:px-12 lg:py-10 xl:px-16">
        <header className="stoploss-aligned mb-7 sm:mb-8">
          <div className="mb-5 flex flex-wrap justify-between gap-3 border-t border-[#bfb4a3] pt-4">
            <p className={eyebrow}>Independent work / 02</p>
            <p className="text-[10px] tracking-wide text-[#706657]">Public audits · Proposed actions</p>
          </div>
          <div className="grid items-center gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <h2 id="stoploss-heading" className="font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.08] tracking-[-0.04em] text-balance">Stoploss Audit</h2>
            <p className={`max-w-[520px] ${body}`}>AI-assisted business diagnosis for early-stage Shopify merchants, through public storefront and social signals.</p>
          </div>
          <ul aria-label="Stoploss project skills" className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#706657]">
            {['Business diagnosis', 'Positioning', 'Offer strategy', 'Strategy / Creation / Math'].map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </header>
        <ProjectCarousel slides={slides} label="Stoploss Audit case studies" theme="light" />
      </div>
    </section>
  )
}

export default StoplossFeaturedProject
