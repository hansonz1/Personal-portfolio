function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto grid min-h-svh max-w-[1320px] items-center gap-12 px-6 py-10 sm:px-10 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-16 lg:py-20 xl:gap-24"
    >
      <figure className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-[3px] bg-[#e9e8e2] lg:max-w-none">
        {/* Abstract shapes reserve space for a future portrait without depicting a real person. */}
        <svg
          viewBox="0 0 440 550"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="hero-backdrop" x1="0" y1="0" x2="440" y2="550" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f0efe9" />
              <stop offset="1" stopColor="#d5d6cc" />
            </linearGradient>
            <linearGradient id="hero-silhouette" x1="220" y1="170" x2="220" y2="550" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b4b7a9" />
              <stop offset="1" stopColor="#949b8a" />
            </linearGradient>
          </defs>
          <path fill="url(#hero-backdrop)" d="M0 0h440v550H0z" />
          <circle cx="330" cy="120" r="190" fill="#f8f7f1" fillOpacity=".5" />
          <path d="M54 0v550M386 0v550" stroke="#fff" strokeOpacity=".35" />
          <path d="M0 420h440" stroke="#818775" strokeOpacity=".15" />
          <circle cx="220" cy="220" r="63" fill="url(#hero-silhouette)" />
          <path d="M78 550V448c0-79 64-143 142-143s142 64 142 143v102" fill="url(#hero-silhouette)" />
        </svg>
        <figcaption className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 border-t border-white/60 pt-4 text-[10px] font-medium tracking-[0.16em] text-[#3f4639] uppercase sm:inset-x-7 sm:bottom-7">
          <span>Portrait coming soon</span>
          <span aria-hidden="true">01 / Intro</span>
        </figcaption>
      </figure>

      <div className="min-w-0 pb-2 lg:py-8">
        <p className="mb-7 flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-[#626b5b] uppercase sm:mb-9">
          <span aria-hidden="true" className="h-px w-7 bg-[#87917d]" />
          Business + AI
        </p>

        <h1
          id="hero-heading"
          className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.06] font-semibold tracking-[-0.055em] [overflow-wrap:anywhere] lg:text-[clamp(3rem,4.8vw,4.5rem)]"
        >
          Business Thinking.{' '}
          <span className="mt-1 block text-[#747c6d]">AI-Powered Building.</span>
        </h1>

        <p className="mt-7 max-w-[390px] text-base leading-relaxed tracking-[-0.015em] text-[#656762] sm:mt-8 sm:text-lg">
          Exploring how AI, data, and strategy can solve real business problems.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-11" aria-label="Profile links and resume">
          <a
            href="https://github.com/hansonz1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-5 rounded-full bg-[#242623] px-6 text-sm font-medium text-white transition-colors hover:bg-[#434a3e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e]"
          >
            GitHub
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button
            type="button"
            disabled
            className="inline-flex min-h-12 cursor-not-allowed items-center gap-2 rounded-full border border-[#dedfd9] px-5 text-sm font-medium text-[#73766e]"
          >
            LinkedIn <span className="text-[10px] font-normal">Soon</span>
          </button>
          <button
            type="button"
            disabled
            className="inline-flex min-h-12 cursor-not-allowed items-center gap-2 rounded-full border border-[#dedfd9] px-5 text-sm font-medium text-[#73766e]"
          >
            Resume <span className="text-[10px] font-normal">Soon</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
