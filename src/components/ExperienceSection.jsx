import { useId } from 'react'
import { featuredExperiences, supportingExperiences } from '../data/experiences.js'

function FeaturedExperience({ experience }) {
  const headingId = useId()

  return (
    <article aria-labelledby={headingId} className="flex min-w-0 flex-col rounded-2xl border border-[#dce0e4] bg-white p-6 sm:p-8 lg:row-span-4 lg:grid lg:grid-rows-subgrid lg:gap-y-0">
      <header className="border-b border-[#e3e6e9] pb-5">
        <p className="text-base font-semibold tracking-tight text-[#26313c]">{experience.company}</p>
        <p className="mt-2 text-sm leading-relaxed text-[#626c76]">{experience.focus.join(' · ')}</p>
      </header>

      <div className="pt-5">
        <h3 id={headingId} className="max-w-[500px] text-2xl leading-[1.18] font-semibold tracking-[-0.035em] sm:text-[28px]">{experience.headline}</h3>
        <p className="mt-3 max-w-[60ch] text-base leading-relaxed text-[#56616c]">{experience.narrative}</p>
      </div>

      <div className="pt-6">
        {experience.metrics && (
          <div className="mb-5">
            <dl className="grid grid-cols-2 gap-4">
              {experience.metrics.map(metric => (
                <div key={metric.label} className="min-w-0">
                  <dt className="text-sm text-[#626c76]">{metric.label}</dt>
                  <dd className="mt-1 text-xl font-medium tracking-tight tabular-nums">{metric.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-sm text-[#626c76]">{experience.metricsContext}</p>
          </div>
        )}

        <dl className="space-y-5">
          {experience.highlights.map(highlight => (
            <div key={highlight.label}>
              <dt className="text-sm font-medium text-[#26313c]">{highlight.label}</dt>
              <dd className="mt-1.5 max-w-[60ch] text-base leading-relaxed text-[#56616c]">{highlight.text}</dd>
            </div>
          ))}
        </dl>
      </div>

      <aside className="pt-6">
        <p className="border-t border-[#e3e6e9] pt-4 text-sm leading-relaxed text-[#626c76]">
          <span className="font-medium text-[#394653]">Evidence note.</span> {experience.note}
        </p>
      </aside>
    </article>
  )
}

function ExperienceSection({ featured = featuredExperiences, supporting = supportingExperiences }) {
  const sectionId = useId()

  return (
    <section id="experience" aria-labelledby={sectionId} className="bg-[#f1f3f5] text-[#26313c]">
      <div className="content-container py-14 sm:py-20">
        <header className="mb-8 border-t border-[#cbd1d7] pt-6 sm:mb-10">
          <h2 id={sectionId} className="text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl">Selected Experience</h2>
          <p className="mt-3 max-w-[680px] text-base leading-relaxed text-[#56616c] sm:text-lg">Building systems, testing growth assumptions, and working across teams.</p>
        </header>

        <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
          {featured.map(experience => <FeaturedExperience key={experience.id} experience={experience} />)}
        </div>

        <div className="mt-10 sm:mt-12">
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-[#394653]">Additional experience</h3>
          <div className="divide-y divide-[#cbd1d7] border-y border-[#cbd1d7]">
            {supporting.map(experience => (
              <details key={experience.id} className="group">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#485b70] [&::-webkit-details-marker]:hidden">
                  <span className="grid min-w-0 flex-1 gap-1 lg:grid-cols-[minmax(280px,1fr)_1.25fr] lg:items-baseline lg:gap-8">
                    <span className="text-base leading-snug font-medium tracking-tight sm:text-lg">{experience.company}</span>
                    <span className="text-sm leading-relaxed text-[#56616c]">{experience.focus}</span>
                  </span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5 shrink-0 text-[#56616c] group-open:rotate-180 motion-safe:transition-transform motion-safe:duration-200 motion-reduce:transition-none">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <ul className="max-w-[1000px] list-disc space-y-2 pr-5 pb-6 pl-5 text-base leading-relaxed text-[#56616c] marker:text-[#85909b]">
                  {experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
