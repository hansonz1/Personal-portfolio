function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="content-container grid items-center gap-12 py-10 sm:py-16 md:min-h-svh lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20 xl:gap-24"
    >
      <div className="min-w-0 pb-2 md:row-start-2 lg:col-start-2 lg:row-start-1 lg:py-8">
        <h1
          id="hero-heading"
          className="max-w-[600px] text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-semibold tracking-[-0.045em] text-balance lg:max-w-none"
        >
          Zhenhao (Hanson) Zhang
        </h1>

        <p className="mt-7 max-w-[460px] text-base leading-relaxed tracking-[-0.015em] text-[#656762] sm:mt-8 sm:text-lg lg:max-w-none">
          I combine GTM strategy, operations experience, and AI-powered tools to tackle real business challenges.
        </p>

        <div className="mt-5 max-w-[460px] text-sm leading-relaxed text-[#656762] lg:max-w-none">
          <p className="font-medium text-[#454a41]">Boston University</p>
          <p className="mt-1">B.S. in Business Administration · General Finance</p>
          <p>Minor in Business Analytics · <time dateTime="2026-05">May 2026</time></p>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-11" aria-label="Profile links and resume">
          <a
            href="https://www.linkedin.com/in/hanson-z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#242623] px-6 text-sm font-medium text-white transition-colors hover:bg-[#434a3e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e]"
          >
            LinkedIn
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="https://github.com/hansonz1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dedfd9] px-5 text-sm font-medium text-[#454a41] hover:border-[#87917d] hover:bg-[#f0f1ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e]"
          >
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="/Hanson_Z_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#dedfd9] px-5 text-sm font-medium text-[#454a41] hover:border-[#87917d] hover:bg-[#f0f1ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e]"
          >
            Resume<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <figure className="mx-auto w-full max-w-[440px] rounded-[3px] bg-[#e9e8e2] md:relative md:row-start-1 md:aspect-[4/5] md:overflow-hidden lg:col-start-1 lg:max-w-none">
        <img
          src="/hero-portrait.jpg"
          alt="Zhenhao (Hanson) Zhang standing outdoors"
          width="683"
          height="1476"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="block h-auto w-full rounded-[3px] md:absolute md:inset-0 md:h-full md:object-cover md:object-[50%_20%]"
        />
      </figure>
    </section>
  )
}

export default Hero
