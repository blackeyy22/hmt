import { ProjectShowcase, GreenfieldWheel, BrownfieldStrip, IndustryCinema } from './sections';
import ProcessJourney from './journey';
import ContactDesk from './contact';
import ScrollHero from './scroll-hero';

export default function HomepageContent() {
  return (
    <>
      <main id="main" tabIndex="-1">
        <div style={{}}>
          <div className="bg-surface">
            <ScrollHero />
            <div className="hero-tape-slope pointer-events-none relative z-20 h-0">
              <div className="absolute inset-x-0 top-[calc(var(--tape-rise)/-2)] flex h-40 -translate-y-1/2 items-center overflow-hidden">
                <div
                  className="relative -mx-[10%] h-7 w-[120%] shrink-0 overflow-hidden sm:h-8 lg:h-9 -rotate-[3deg] sm:-rotate-[2deg] lg:-rotate-[1.5deg]"
                  style={{
                    backgroundColor: '#F5C518',
                    backgroundImage:
                      'repeating-linear-gradient(-45deg, #0D0D0D 0 5px, #F5C518 5px 10px), repeating-linear-gradient(-45deg, #0D0D0D 0 5px, #F5C518 5px 10px), linear-gradient(#F5C518, #F5C518)',
                    backgroundSize: 'auto 4px, auto 4px, 100% calc(100% - 8px)',
                    backgroundPosition: '0 0, 0 100%, 0 4px',
                    backgroundRepeat: 'repeat-x, repeat-x, no-repeat',
                  }}
                >
                  <div aria-hidden="true" className="flex w-max will-change-transform">
                    <div className="flex h-7 shrink-0 items-center gap-10 pr-10 sm:h-8 sm:gap-12 sm:pr-12 lg:h-9">
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                    </div>
                    <div className="flex h-7 shrink-0 items-center gap-10 pr-10 sm:h-8 sm:gap-12 sm:pr-12 lg:h-9">
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                      <span className="font-display text-[10px] font-extrabold uppercase tracking-[0.2em] text-black sm:text-[11px] lg:text-xs">
                        Safety First
                      </span>
                    </div>
                  </div>
                  <span className="sr-only">Safety first</span>
                </div>
              </div>
            </div>
          </div>
          <ProjectShowcase />
          <GreenfieldWheel />
          <BrownfieldStrip />
          <IndustryCinema />
          <section
            className="relative overflow-hidden bg-light-surface py-20 sm:py-28 hmt-section hmt-why why-with-stories"
            id="why-hmt"
          >
            <div className="relative mx-auto w-full max-w-site px-4 sm:px-8 lg:px-12">
              <h2 className="strip-section-heading">Why HMT?</h2>
              <div className="why-stories-layout">
                <ul
                  aria-label="Why choose HMT"
                  className="grid content-center gap-x-10 gap-y-7 sm:grid-cols-2 lg:col-span-7 why-list story-accordion"
                >
                  <li className="why-item story-card active">
                    <button
                      aria-controls="why-benefit-0"
                      aria-expanded="true"
                      aria-label="End-to-End Project Execution"
                      className="story-trigger"
                      data-story="0"
                      type="button"
                    >
                      <img
                        alt="End-to-end industrial project execution"
                        loading="lazy"
                        src="./assets/hmt/client-why-execution.webp"
                      />
                      <span className="story-content">
                        <span className="story-title">End-to-End Project Execution</span>
                        <span className="story-description" id="why-benefit-0">
                          Survey through trial production, held by one team.
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="why-item story-card">
                    <button
                      aria-controls="why-benefit-1"
                      aria-expanded="false"
                      aria-label="Single Point of Responsibility"
                      className="story-trigger"
                      data-story="1"
                      type="button"
                    >
                      <img
                        alt="One point of project responsibility"
                        loading="lazy"
                        src="./assets/hmt/client-why-responsibility.webp"
                      />
                      <span className="story-content">
                        <span className="story-title">Single Point of Responsibility</span>
                        <span className="story-description" id="why-benefit-1">
                          Owners deal with HMT — not a chain of subcontractors.
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="why-item story-card">
                    <button
                      aria-controls="why-benefit-2"
                      aria-expanded="false"
                      aria-label="Global Machine Movement Expertise"
                      className="story-trigger"
                      data-story="2"
                      type="button"
                    >
                      <img
                        alt="Global heavy-lift logistics"
                        loading="lazy"
                        src="./assets/hmt/client-why-global.webp"
                      />
                      <span className="story-content">
                        <span className="story-title">Global Machine Movement Expertise</span>
                        <span className="story-description" id="why-benefit-2">
                          Packaging, ports, customs and restart planned as one job.
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="why-item story-card">
                    <button
                      aria-controls="why-benefit-3"
                      aria-expanded="false"
                      aria-label="OEM Coordination"
                      className="story-trigger"
                      data-story="3"
                      type="button"
                    >
                      <img
                        alt="Engineering team reviewing factory blueprints"
                        loading="lazy"
                        src="./assets/hmt/client-why-legacy.webp"
                      />
                      <span className="story-content">
                        <span className="story-title">OEM Coordination</span>
                        <span className="story-description" id="why-benefit-3">
                          Vendors, drawings and site crews kept on the same sequence.
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="why-item story-card">
                    <button
                      aria-controls="why-benefit-4"
                      aria-expanded="false"
                      aria-label="Generational Machine-Tool Experience"
                      className="story-trigger"
                      data-story="4"
                      type="button"
                    >
                      <img
                        alt="Experienced engineers reviewing a modern factory plan"
                        loading="lazy"
                        src="./assets/hmt/client-why-oem.webp"
                      />
                      <span className="story-content">
                        <span className="story-title">Generational Machine-Tool Experience</span>
                        <span className="story-description" id="why-benefit-4">
                          A second-generation engineering legacy, carried into modern industrial
                          projects.
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="why-item story-card">
                    <button
                      aria-controls="why-benefit-5"
                      aria-expanded="false"
                      aria-label="Heavy Machinery Specialists"
                      className="story-trigger"
                      data-story="5"
                      type="button"
                    >
                      <img
                        alt="Industrial press maintenance team"
                        loading="lazy"
                        src="./assets/hmt/client-why-heavy.webp"
                      />
                      <span className="story-content">
                        <span className="story-title">Heavy Machinery Specialists</span>
                        <span className="story-description" id="why-benefit-5">
                          Cranes, reactors, presses and the loads that sit under them.
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="why-item story-card">
                    <button
                      aria-controls="why-benefit-6"
                      aria-expanded="false"
                      aria-label="Safety-Driven Execution"
                      className="story-trigger"
                      data-story="6"
                      type="button"
                    >
                      <img
                        alt="Industrial site safety briefing"
                        loading="lazy"
                        src="./assets/hmt/client-why-safety.webp"
                      />
                      <span className="story-content">
                        <span className="story-title">Safety-Driven Execution</span>
                        <span className="story-description" id="why-benefit-6">
                          Lifting, permits and method statements before the hook moves.
                        </span>
                      </span>
                    </button>
                  </li>
                  <li className="why-item story-card">
                    <button
                      aria-controls="why-benefit-7"
                      aria-expanded="false"
                      aria-label="On-Time Project Delivery"
                      className="story-trigger"
                      data-story="7"
                      type="button"
                    >
                      <img
                        alt="On-time industrial delivery operations"
                        loading="lazy"
                        src="./assets/hmt/client-why-delivery.webp"
                      />
                      <span className="story-content">
                        <span className="story-title">On-Time Project Delivery</span>
                        <span className="story-description" id="why-benefit-7">
                          Schedules written around commissioning, not around mobilisation.
                        </span>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <ProcessJourney />
          <ContactDesk />
        </div>
      </main>
    </>
  );
}
