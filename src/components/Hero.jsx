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

        <div className="mt-5 flex max-w-[460px] items-center gap-3 text-sm leading-relaxed text-[#656762] sm:gap-4 lg:w-fit lg:max-w-none">
          <img
            src="/bu-seal.png"
            alt=""
            width="1920"
            height="1920"
            decoding="async"
            className="block h-auto w-12 shrink-0 sm:w-16"
          />
          <div className="min-w-0">
            <p className="mb-1 font-medium text-[#454a41]">Boston University</p>
            <p>B.S. in Business Administration · General Finance</p>
            <p>Minor in Business Analytics · <time dateTime="2026-05">May 2026</time></p>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3 sm:mt-11 lg:max-w-md lg:justify-between" aria-label="Profile links and resume">
          <a
            href="https://www.linkedin.com/in/hanson-z/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#242623] px-4 text-sm font-medium text-white transition-colors hover:bg-[#434a3e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e] sm:px-5 lg:px-6"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
              <path d="M5.2 7.4a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.4 9h3.6v12H3.4V9Zm5.8 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21H17v-6c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9.2V9Z" />
            </svg>
            LinkedIn
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4 shrink-0">
              <path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="https://github.com/hansonz1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#dedfd9] px-4 text-sm font-medium text-[#454a41] hover:border-[#87917d] hover:bg-[#f0f1ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e] sm:px-5 lg:px-6"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0">
              <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.97 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.54.23 2.68.12 2.97.72.79 1.15 1.79 1.15 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.11c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
            </svg>
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="/Hanson_Z_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#dedfd9] px-4 text-sm font-medium text-[#454a41] hover:border-[#87917d] hover:bg-[#f0f1ec] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#434a3e] sm:px-5 lg:px-6"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-4 shrink-0">
              <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Zm0 0v6h6M8 13h8M8 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
