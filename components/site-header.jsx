export default function SiteHeader() {
  return (
    <>
      <a
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        href="#main"
      >
        Skip to content
      </a>
      <div
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-[70] h-px origin-left bg-accent"
        style={{}}
      ></div>
      <header
        className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-[background-color,backdrop-filter,border-color] duration-300 border-b border-transparent bg-transparent hmt-header"
        id="site-header"
      >
        <div className="mx-auto flex h-12 w-full max-w-site items-center justify-between gap-3 px-4 sm:px-6 md:h-14 md:px-8 lg:px-12">
          <a
            aria-label="HMT Industrial Machine Tools, home"
            className="inline-flex min-w-0 shrink items-center h-full max-w-[min(240px,48vw)] sm:max-w-[280px]"
            data-destination="/"
            data-noop=""
            href="/"
            role="button"
          >
            <img
              alt="HMT Hindustan Machine Tools"
              className="w-auto object-contain object-left h-10 md:h-11"
              decoding="async"
              fetchPriority="high"
              height="200"
              src="./assets/hmt/logo-hmt.png"
              style={{ color: 'transparent' }}
              width="640"
            />
          </a>
          <nav aria-label="Primary" className="hidden h-full items-center gap-6 xl:gap-8 lg:flex">
            <div className="relative flex h-full items-center">
              <a
                aria-expanded="false"
                aria-haspopup="menu"
                className="group relative flex h-full items-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent xl:text-[12px] text-white gap-1"
                data-destination="/greenfield"
                data-noop=""
                href="/greenfield"
                role="button"
              >
                Greenfield
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 stroke-[2] opacity-60 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <span className="absolute inset-x-0 bottom-0 h-px bg-accent transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
              </a>
              <div className="absolute top-full z-[60] w-[min(26rem,calc(100vw-2rem))] pt-0.5 transition duration-200 invisible pointer-events-none opacity-0 left-0">
                <div className="border border-border bg-background p-4 shadow-lift">
                  <p className="mb-3 border-b border-border pb-2.5 text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
                    Greenfield Services
                  </p>
                  <ul className="grid max-h-[22rem] grid-cols-1 gap-0.5 overflow-y-auto overscroll-contain pr-1">
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/epc-projects"
                        data-noop=""
                        href="/greenfield/epc-projects"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 20V9l8-5 8 5v11"></path>
                          <path d="M9 20v-6h6v6"></path>
                          <path d="M4 12h16"></path>
                        </svg>
                        <span className="leading-snug">EPC Projects</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/industrial-infrastructure"
                        data-noop=""
                        href="/greenfield/industrial-infrastructure"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 18h16"></path>
                          <path d="M6 18V8h4v10"></path>
                          <path d="M14 18V5h4v13"></path>
                          <path d="M8 11h0"></path>
                          <path d="M16 9h0"></path>
                        </svg>
                        <span className="leading-snug">Industrial Infrastructure</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/mep-services"
                        data-noop=""
                        href="/greenfield/mep-services"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13 3 6 13h5l-1 8 8-12h-5l0-6"></path>
                        </svg>
                        <span className="leading-snug">MEP Services</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/reactor-boiler-erection"
                        data-noop=""
                        href="/greenfield/reactor-boiler-erection"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 20h8"></path>
                          <path d="M9 20V10a3 3 0 0 1 6 0v10"></path>
                          <path d="M12 4v3"></path>
                          <path d="M10 6h4"></path>
                        </svg>
                        <span className="leading-snug">
                          Reactor, Boiler &amp; Process Equipment Erection
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/machine-procurement"
                        data-noop=""
                        href="/greenfield/machine-procurement"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 7h16v12H4z"></path>
                          <path d="M8 7V5h8v2"></path>
                          <path d="M9 12h6"></path>
                        </svg>
                        <span className="leading-snug">Machine Procurement</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/plc-integration"
                        data-noop=""
                        href="/greenfield/plc-integration"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h16v12H4z"></path>
                          <path d="M8 10h2"></path>
                          <path d="M12 10h4"></path>
                          <path d="M8 14h8"></path>
                          <path d="M7 6V4"></path>
                          <path d="M12 6V4"></path>
                          <path d="M17 6V4"></path>
                        </svg>
                        <span className="leading-snug">PLC Integration</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/oem-coordination"
                        data-noop=""
                        href="/greenfield/oem-coordination"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 12h8"></path>
                          <path d="M12 8v8"></path>
                          <path d="M7 7l2 2"></path>
                          <path d="M15 15l2 2"></path>
                          <path d="M17 7l-2 2"></path>
                          <path d="M9 15l-2 2"></path>
                        </svg>
                        <span className="leading-snug">OEM Coordination</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/turnkey-projects"
                        data-noop=""
                        href="/greenfield/turnkey-projects"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.5 8.5a4 4 0 1 1-2.2 7.3L7 21l-1.5-1.5"></path>
                          <path d="M15.2 8.8l.8.8"></path>
                          <path d="M8 16.5 1.2 1.2"></path>
                        </svg>
                        <span className="leading-snug">Turnkey Projects</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/peb-buildings"
                        data-noop=""
                        href="/greenfield/peb-buildings"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 10 12 4l9 6"></path>
                          <path d="M5 10v9h14v-9"></path>
                          <path d="M9 19v-5h6v5"></path>
                        </svg>
                        <span className="leading-snug">PEB Buildings</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/heavy-engineering"
                        data-noop=""
                        href="/greenfield/heavy-engineering"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                          <path d="M12 4v2"></path>
                          <path d="M12 18v2"></path>
                          <path d="M4 12h2"></path>
                          <path d="M18 12h2"></path>
                          <path d="M6.2 6.2l1.4 1.4"></path>
                          <path d="M16.4 16.4l1.4 1.4"></path>
                          <path d="M17.8 6.2l-1.4 1.4"></path>
                          <path d="M7.6 16.4l-1.4 1.4"></path>
                        </svg>
                        <span className="leading-snug">Heavy Engineering</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/eot-crane-installation"
                        data-noop=""
                        href="/greenfield/eot-crane-installation"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 20h16"></path>
                          <path d="M6 20V8l8-3 4 2v13"></path>
                          <path d="M14 8v5"></path>
                          <path d="M12 13h4"></path>
                        </svg>
                        <span className="leading-snug">EOT Crane Installation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/industrial-automation"
                        data-noop=""
                        href="/greenfield/industrial-automation"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 8h8v8H8z"></path>
                          <path d="M10 10h4v4h-4z"></path>
                          <path d="M5 9h3"></path>
                          <path d="M16 9h3"></path>
                          <path d="M5 15h3"></path>
                          <path d="M16 15h3"></path>
                          <path d="M9 5v3"></path>
                          <path d="M15 5v3"></path>
                          <path d="M9 16v3"></path>
                          <path d="M15 16v3"></path>
                        </svg>
                        <span className="leading-snug">Industrial Automation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/epoxy-flooring"
                        data-noop=""
                        href="/greenfield/epoxy-flooring"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 8h16v3H4z"></path>
                          <path d="M4 13h16v3H4z"></path>
                          <path d="M4 18h16"></path>
                        </svg>
                        <span className="leading-snug">Epoxy Flooring</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/greenfield/technical-support"
                        data-noop=""
                        href="/greenfield/technical-support"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12a7 7 0 0 1 14 0"></path>
                          <path d="M5 12v3a2 2 0 0 0 2 2h1v-6H7a2 2 0 0 0-2 1"></path>
                          <path d="M19 12v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1"></path>
                          <path d="M12 19v1"></path>
                        </svg>
                        <span className="leading-snug">Technical Support</span>
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield"
                    data-noop=""
                    href="/greenfield"
                    role="button"
                  >
                    View all
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M13 6l6 6-6 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex h-full items-center">
              <a
                aria-expanded="false"
                aria-haspopup="menu"
                className="group relative flex h-full items-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent xl:text-[12px] text-white gap-1"
                data-destination="/brownfield"
                data-noop=""
                href="/brownfield"
                role="button"
              >
                Brownfield
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 stroke-[2] opacity-60 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <span className="absolute inset-x-0 bottom-0 h-px bg-accent transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
              </a>
              <div className="absolute top-full z-[60] w-[min(26rem,calc(100vw-2rem))] pt-0.5 transition duration-200 invisible pointer-events-none opacity-0 left-0">
                <div className="border border-border bg-background p-4 shadow-lift">
                  <p className="mb-3 border-b border-border pb-2.5 text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
                    Brownfield Services
                  </p>
                  <ul className="grid max-h-[22rem] grid-cols-1 gap-0.5 overflow-y-auto overscroll-contain pr-1">
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/factory-relocation"
                        data-noop=""
                        href="/brownfield/factory-relocation"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 20V10l5 3V9l5 3V8l8 4v8H3"></path>
                          <path d="M7 16h2"></path>
                          <path d="M12 16h2"></path>
                          <path d="M17 16h2"></path>
                        </svg>
                        <span className="leading-snug">Factory Relocation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/machine-relocation"
                        data-noop=""
                        href="/brownfield/machine-relocation"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 16h10"></path>
                          <path d="M14 16l3-3"></path>
                          <path d="M14 16l3 3"></path>
                          <path d="M19 8H9"></path>
                          <path d="M10 8 7 5"></path>
                          <path d="M10 8 7 11"></path>
                        </svg>
                        <span className="leading-snug">Machine Relocation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/international-machine-movement"
                        data-noop=""
                        href="/brownfield/international-machine-movement"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                          <path d="M4 12h16"></path>
                          <path d="M12 4c2.2 2.2 3.2 5 3.2 8s-1 5.8-3.2 8c-2.2-2.2-3.2-5-3.2-8s1-5.8 3.2-8"></path>
                        </svg>
                        <span className="leading-snug">International Machine Movement</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/machine-packaging"
                        data-noop=""
                        href="/brownfield/machine-packaging"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 8l8-4 8 4-8 4-8-4"></path>
                          <path d="M4 8v8l8 4 8-4V8"></path>
                          <path d="M12 12v8"></path>
                        </svg>
                        <span className="leading-snug">Machine Packaging</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/import-export"
                        data-noop=""
                        href="/brownfield/import-export"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 7h11l-2-2"></path>
                          <path d="M18 7l-2 2"></path>
                          <path d="M17 17H6l2 2"></path>
                          <path d="M6 17l2-2"></path>
                        </svg>
                        <span className="leading-snug">Import &amp; Export</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/customs-clearance"
                        data-noop=""
                        href="/brownfield/customs-clearance"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 4h10v16H7z"></path>
                          <path d="M10 8h4"></path>
                          <path d="M10 12h4"></path>
                          <path d="M10 16h2"></path>
                        </svg>
                        <span className="leading-snug">Customs Clearance</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/machine-retrofitting"
                        data-noop=""
                        href="/brownfield/machine-retrofitting"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14 7a4 4 0 0 1 0 6l-6 6-3-1 1-3 6-6"></path>
                          <path d="M13 8l3 3"></path>
                        </svg>
                        <span className="leading-snug">Machine Retrofitting</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/plc-upgrading"
                        data-noop=""
                        href="/brownfield/plc-upgrading"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 12a8 8 0 1 1-2.3-5.6"></path>
                          <path d="M20 5v5h-5"></path>
                          <path d="M12 9v4l2 2"></path>
                        </svg>
                        <span className="leading-snug">PLC Upgradation</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/lean-manufacturing"
                        data-noop=""
                        href="/brownfield/lean-manufacturing"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 16l5-5 3 3 8-8"></path>
                          <path d="M14 6h6v6"></path>
                        </svg>
                        <span className="leading-snug">Lean Manufacturing</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/existing-plant-expansion"
                        data-noop=""
                        href="/brownfield/existing-plant-expansion"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 4H4v5"></path>
                          <path d="M4 4l6 6"></path>
                          <path d="M15 20h5v-5"></path>
                          <path d="M20 20l-6-6"></path>
                        </svg>
                        <span className="leading-snug">Existing Plant Expansion</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/pre-owned-machine-procurement"
                        data-noop=""
                        href="/brownfield/pre-owned-machine-procurement"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 8a5 5 0 0 1 8.5-2"></path>
                          <path d="M17 6v3h-3"></path>
                          <path d="M17 16a5 5 0 0 1-8.5 2"></path>
                          <path d="M7 18v-3h3"></path>
                        </svg>
                        <span className="leading-snug">Pre-Owned Machine Procurement</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/brownfield/technical-support"
                        data-noop=""
                        href="/brownfield/technical-support"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12a7 7 0 0 1 14 0"></path>
                          <path d="M5 12v3a2 2 0 0 0 2 2h1v-6H7a2 2 0 0 0-2 1"></path>
                          <path d="M19 12v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1"></path>
                          <path d="M12 19v1"></path>
                        </svg>
                        <span className="leading-snug">Technical Support</span>
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield"
                    data-noop=""
                    href="/brownfield"
                    role="button"
                  >
                    View all
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M13 6l6 6-6 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex h-full items-center">
              <a
                aria-expanded="false"
                aria-haspopup="menu"
                className="group relative flex h-full items-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent xl:text-[12px] text-white gap-1"
                data-destination="/industries"
                data-noop=""
                href="/industries"
                role="button"
              >
                Industries
                <svg
                  aria-hidden="true"
                  className="h-3 w-3 stroke-[2] opacity-60 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <span className="absolute inset-x-0 bottom-0 h-px bg-accent transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
              </a>
              <div className="absolute top-full z-[60] w-[min(26rem,calc(100vw-2rem))] pt-0.5 transition duration-200 invisible pointer-events-none opacity-0 right-0">
                <div className="border border-border bg-background p-4 shadow-lift">
                  <p className="mb-3 border-b border-border pb-2.5 text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
                    Industries We Serve
                  </p>
                  <ul className="grid max-h-[22rem] grid-cols-1 gap-0.5 overflow-y-auto overscroll-contain pr-1">
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/automotive-auto-components"
                        data-noop=""
                        href="/industries/automotive-auto-components"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 8h8v8H8z"></path>
                          <path d="M10 10h4v4h-4z"></path>
                          <path d="M5 9h3"></path>
                          <path d="M16 9h3"></path>
                          <path d="M5 15h3"></path>
                          <path d="M16 15h3"></path>
                          <path d="M9 5v3"></path>
                          <path d="M15 5v3"></path>
                          <path d="M9 16v3"></path>
                          <path d="M15 16v3"></path>
                        </svg>
                        <span className="leading-snug">Automotive &amp; Auto Components</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/aerospace-defence"
                        data-noop=""
                        href="/industries/aerospace-defence"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 20h16"></path>
                          <path d="M6 20V8l8-3 4 2v13"></path>
                          <path d="M14 8v5"></path>
                          <path d="M12 13h4"></path>
                        </svg>
                        <span className="leading-snug">Aerospace &amp; Defence</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/pharmaceutical-healthcare"
                        data-noop=""
                        href="/industries/pharmaceutical-healthcare"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h16v12H4z"></path>
                          <path d="M8 10h2"></path>
                          <path d="M12 10h4"></path>
                          <path d="M8 14h8"></path>
                          <path d="M7 6V4"></path>
                          <path d="M12 6V4"></path>
                          <path d="M17 6V4"></path>
                        </svg>
                        <span className="leading-snug">Pharmaceutical &amp; Healthcare</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/chemical-petrochemical"
                        data-noop=""
                        href="/industries/chemical-petrochemical"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 20h8"></path>
                          <path d="M9 20V10a3 3 0 0 1 6 0v10"></path>
                          <path d="M12 4v3"></path>
                          <path d="M10 6h4"></path>
                        </svg>
                        <span className="leading-snug">Chemical &amp; Petrochemical</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/plastics-rubber-tyre"
                        data-noop=""
                        href="/industries/plastics-rubber-tyre"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                          <path d="M12 4v2"></path>
                          <path d="M12 18v2"></path>
                          <path d="M4 12h2"></path>
                          <path d="M18 12h2"></path>
                          <path d="M6.2 6.2l1.4 1.4"></path>
                          <path d="M16.4 16.4l1.4 1.4"></path>
                          <path d="M17.8 6.2l-1.4 1.4"></path>
                          <path d="M7.6 16.4l-1.4 1.4"></path>
                        </svg>
                        <span className="leading-snug">Plastics, Rubber &amp; Tyre</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/steel-metals-foundry-forging"
                        data-noop=""
                        href="/industries/steel-metals-foundry-forging"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 20h16"></path>
                          <path d="M6 20V8l8-3 4 2v13"></path>
                          <path d="M14 8v5"></path>
                          <path d="M12 13h4"></path>
                        </svg>
                        <span className="leading-snug">Steel, Metals, Foundry &amp; Forging</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/general-engineering-machine-tools"
                        data-noop=""
                        href="/industries/general-engineering-machine-tools"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 7h16v12H4z"></path>
                          <path d="M8 7V5h8v2"></path>
                          <path d="M9 12h6"></path>
                        </svg>
                        <span className="leading-snug">
                          General Engineering &amp; Machine Tools
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/electronics-electrical-semiconductor"
                        data-noop=""
                        href="/industries/electronics-electrical-semiconductor"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 6h16v12H4z"></path>
                          <path d="M8 10h2"></path>
                          <path d="M12 10h4"></path>
                          <path d="M8 14h8"></path>
                          <path d="M7 6V4"></path>
                          <path d="M12 6V4"></path>
                          <path d="M17 6V4"></path>
                        </svg>
                        <span className="leading-snug">
                          Electronics, Electrical &amp; Semiconductor
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/food-beverage-fmcg"
                        data-noop=""
                        href="/industries/food-beverage-fmcg"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3 20V10l5 3V9l5 3V8l8 4v8H3"></path>
                          <path d="M7 16h2"></path>
                          <path d="M12 16h2"></path>
                          <path d="M17 16h2"></path>
                        </svg>
                        <span className="leading-snug">Food, Beverage &amp; FMCG</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/packaging-printing"
                        data-noop=""
                        href="/industries/packaging-printing"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 8l8-4 8 4-8 4-8-4"></path>
                          <path d="M4 8v8l8 4 8-4V8"></path>
                          <path d="M12 12v8"></path>
                        </svg>
                        <span className="leading-snug">Packaging &amp; Printing</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/glass-ceramics-tiles"
                        data-noop=""
                        href="/industries/glass-ceramics-tiles"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 18h16"></path>
                          <path d="M6 18V8h4v10"></path>
                          <path d="M14 18V5h4v13"></path>
                          <path d="M8 11h0"></path>
                          <path d="M16 9h0"></path>
                        </svg>
                        <span className="leading-snug">Glass, Ceramics &amp; Tiles</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/textile-garments"
                        data-noop=""
                        href="/industries/textile-garments"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 16l5-5 3 3 8-8"></path>
                          <path d="M14 6h6v6"></path>
                        </svg>
                        <span className="leading-snug">Textile &amp; Garments</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/paper-pulp"
                        data-noop=""
                        href="/industries/paper-pulp"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 18h16"></path>
                          <path d="M6 18V8h4v10"></path>
                          <path d="M14 18V5h4v13"></path>
                          <path d="M8 11h0"></path>
                          <path d="M16 9h0"></path>
                        </svg>
                        <span className="leading-snug">Paper &amp; Pulp</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/power-renewable-energy-battery"
                        data-noop=""
                        href="/industries/power-renewable-energy-battery"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13 3 6 13h5l-1 8 8-12h-5l0-6"></path>
                        </svg>
                        <span className="leading-snug">Power, Renewable Energy &amp; Battery</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                        data-destination="/industries/cement-building-materials-mining"
                        data-noop=""
                        href="/industries/cement-building-materials-mining"
                        role="button"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-text-secondary"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 4H4v5"></path>
                          <path d="M4 4l6 6"></path>
                          <path d="M15 20h5v-5"></path>
                          <path d="M20 20l-6-6"></path>
                        </svg>
                        <span className="leading-snug">
                          Cement, Building Materials &amp; Mining
                        </span>
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mt-3 flex items-center justify-between border-t border-border pt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries"
                    data-noop=""
                    href="/industries"
                    role="button"
                  >
                    View all
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M13 6l6 6-6 6"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <a
              className="group relative flex h-full items-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent xl:text-[12px] text-white"
              data-destination="/why-hmt"
              data-noop=""
              href="/why-hmt"
              role="button"
            >
              Why HMT
              <span className="absolute inset-x-0 bottom-0 h-px bg-accent transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            </a>
            <a
              className="group relative flex h-full items-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent xl:text-[12px] text-white"
              data-destination="/process"
              data-noop=""
              href="/process"
              role="button"
            >
              Process
              <span className="absolute inset-x-0 bottom-0 h-px bg-accent transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            </a>
            <a
              className="group relative flex h-full items-center text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-accent xl:text-[12px] text-white"
              data-destination="/contact"
              data-noop=""
              href="/contact"
              role="button"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-px bg-accent transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            </a>
          </nav>
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <div className="inline-flex w-full sm:w-auto" tabIndex="0">
              <a
                className="group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 touch-manipulation focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:gap-3 sm:tracking-[0.16em] bg-accent text-white hover:bg-accent-hover min-h-8 px-3 py-1.5 text-[10px] tracking-[0.12em] sm:min-h-9 sm:px-3.5 sm:text-[11px] w-full"
                data-destination="/contact"
                data-noop=""
                href="/contact"
                role="button"
              >
                <span>
                  <span className="sm:hidden">Quote</span>
                  <span className="hidden sm:inline">Get a Quote</span>
                </span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14"></path>
                  <path d="M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>
            <button
              aria-controls="mobile-nav"
              aria-expanded="false"
              aria-label="Open menu"
              className="grid h-8 w-8 shrink-0 place-items-center sm:h-9 sm:w-9 lg:hidden text-white"
              id="menu-trigger"
              type="button"
            >
              <span className="relative block h-3 w-4">
                <span className="absolute left-0 h-px w-4 bg-current transition-all top-0"></span>
                <span className="absolute left-0 top-1.5 h-px w-4 bg-current transition-opacity"></span>
                <span className="absolute left-0 h-px w-4 bg-current transition-all top-3"></span>
              </span>
            </button>
          </div>
        </div>
        <div hidden id="mobile-menu">
          <nav aria-label="Mobile navigation">
            <details>
              <summary>Greenfield</summary>
              <ul>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/epc-projects"
                    data-noop=""
                    href="/greenfield/epc-projects"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 20V9l8-5 8 5v11"></path>
                      <path d="M9 20v-6h6v6"></path>
                      <path d="M4 12h16"></path>
                    </svg>
                    <span className="leading-snug">EPC Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/industrial-infrastructure"
                    data-noop=""
                    href="/greenfield/industrial-infrastructure"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 18h16"></path>
                      <path d="M6 18V8h4v10"></path>
                      <path d="M14 18V5h4v13"></path>
                      <path d="M8 11h0"></path>
                      <path d="M16 9h0"></path>
                    </svg>
                    <span className="leading-snug">Industrial Infrastructure</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/mep-services"
                    data-noop=""
                    href="/greenfield/mep-services"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 3 6 13h5l-1 8 8-12h-5l0-6"></path>
                    </svg>
                    <span className="leading-snug">MEP Services</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/reactor-boiler-erection"
                    data-noop=""
                    href="/greenfield/reactor-boiler-erection"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 20h8"></path>
                      <path d="M9 20V10a3 3 0 0 1 6 0v10"></path>
                      <path d="M12 4v3"></path>
                      <path d="M10 6h4"></path>
                    </svg>
                    <span className="leading-snug">
                      Reactor, Boiler &amp; Process Equipment Erection
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/machine-procurement"
                    data-noop=""
                    href="/greenfield/machine-procurement"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 7h16v12H4z"></path>
                      <path d="M8 7V5h8v2"></path>
                      <path d="M9 12h6"></path>
                    </svg>
                    <span className="leading-snug">Machine Procurement</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/plc-integration"
                    data-noop=""
                    href="/greenfield/plc-integration"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16v12H4z"></path>
                      <path d="M8 10h2"></path>
                      <path d="M12 10h4"></path>
                      <path d="M8 14h8"></path>
                      <path d="M7 6V4"></path>
                      <path d="M12 6V4"></path>
                      <path d="M17 6V4"></path>
                    </svg>
                    <span className="leading-snug">PLC Integration</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/oem-coordination"
                    data-noop=""
                    href="/greenfield/oem-coordination"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 12h8"></path>
                      <path d="M12 8v8"></path>
                      <path d="M7 7l2 2"></path>
                      <path d="M15 15l2 2"></path>
                      <path d="M17 7l-2 2"></path>
                      <path d="M9 15l-2 2"></path>
                    </svg>
                    <span className="leading-snug">OEM Coordination</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/turnkey-projects"
                    data-noop=""
                    href="/greenfield/turnkey-projects"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.5 8.5a4 4 0 1 1-2.2 7.3L7 21l-1.5-1.5"></path>
                      <path d="M15.2 8.8l.8.8"></path>
                      <path d="M8 16.5 1.2 1.2"></path>
                    </svg>
                    <span className="leading-snug">Turnkey Projects</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/peb-buildings"
                    data-noop=""
                    href="/greenfield/peb-buildings"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 10 12 4l9 6"></path>
                      <path d="M5 10v9h14v-9"></path>
                      <path d="M9 19v-5h6v5"></path>
                    </svg>
                    <span className="leading-snug">PEB Buildings</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/heavy-engineering"
                    data-noop=""
                    href="/greenfield/heavy-engineering"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                      <path d="M12 4v2"></path>
                      <path d="M12 18v2"></path>
                      <path d="M4 12h2"></path>
                      <path d="M18 12h2"></path>
                      <path d="M6.2 6.2l1.4 1.4"></path>
                      <path d="M16.4 16.4l1.4 1.4"></path>
                      <path d="M17.8 6.2l-1.4 1.4"></path>
                      <path d="M7.6 16.4l-1.4 1.4"></path>
                    </svg>
                    <span className="leading-snug">Heavy Engineering</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/eot-crane-installation"
                    data-noop=""
                    href="/greenfield/eot-crane-installation"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 20h16"></path>
                      <path d="M6 20V8l8-3 4 2v13"></path>
                      <path d="M14 8v5"></path>
                      <path d="M12 13h4"></path>
                    </svg>
                    <span className="leading-snug">EOT Crane Installation</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/industrial-automation"
                    data-noop=""
                    href="/greenfield/industrial-automation"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 8h8v8H8z"></path>
                      <path d="M10 10h4v4h-4z"></path>
                      <path d="M5 9h3"></path>
                      <path d="M16 9h3"></path>
                      <path d="M5 15h3"></path>
                      <path d="M16 15h3"></path>
                      <path d="M9 5v3"></path>
                      <path d="M15 5v3"></path>
                      <path d="M9 16v3"></path>
                      <path d="M15 16v3"></path>
                    </svg>
                    <span className="leading-snug">Industrial Automation</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/epoxy-flooring"
                    data-noop=""
                    href="/greenfield/epoxy-flooring"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 8h16v3H4z"></path>
                      <path d="M4 13h16v3H4z"></path>
                      <path d="M4 18h16"></path>
                    </svg>
                    <span className="leading-snug">Epoxy Flooring</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/greenfield/technical-support"
                    data-noop=""
                    href="/greenfield/technical-support"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12a7 7 0 0 1 14 0"></path>
                      <path d="M5 12v3a2 2 0 0 0 2 2h1v-6H7a2 2 0 0 0-2 1"></path>
                      <path d="M19 12v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1"></path>
                      <path d="M12 19v1"></path>
                    </svg>
                    <span className="leading-snug">Technical Support</span>
                  </a>
                </li>
              </ul>
              <a data-destination="/greenfield" data-noop="" href="/greenfield" role="button">
                View all ↗
              </a>
            </details>
            <details>
              <summary>Brownfield</summary>
              <ul>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/factory-relocation"
                    data-noop=""
                    href="/brownfield/factory-relocation"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 20V10l5 3V9l5 3V8l8 4v8H3"></path>
                      <path d="M7 16h2"></path>
                      <path d="M12 16h2"></path>
                      <path d="M17 16h2"></path>
                    </svg>
                    <span className="leading-snug">Factory Relocation</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/machine-relocation"
                    data-noop=""
                    href="/brownfield/machine-relocation"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 16h10"></path>
                      <path d="M14 16l3-3"></path>
                      <path d="M14 16l3 3"></path>
                      <path d="M19 8H9"></path>
                      <path d="M10 8 7 5"></path>
                      <path d="M10 8 7 11"></path>
                    </svg>
                    <span className="leading-snug">Machine Relocation</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/international-machine-movement"
                    data-noop=""
                    href="/brownfield/international-machine-movement"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"></path>
                      <path d="M4 12h16"></path>
                      <path d="M12 4c2.2 2.2 3.2 5 3.2 8s-1 5.8-3.2 8c-2.2-2.2-3.2-5-3.2-8s1-5.8 3.2-8"></path>
                    </svg>
                    <span className="leading-snug">International Machine Movement</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/machine-packaging"
                    data-noop=""
                    href="/brownfield/machine-packaging"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 8l8-4 8 4-8 4-8-4"></path>
                      <path d="M4 8v8l8 4 8-4V8"></path>
                      <path d="M12 12v8"></path>
                    </svg>
                    <span className="leading-snug">Machine Packaging</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/import-export"
                    data-noop=""
                    href="/brownfield/import-export"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 7h11l-2-2"></path>
                      <path d="M18 7l-2 2"></path>
                      <path d="M17 17H6l2 2"></path>
                      <path d="M6 17l2-2"></path>
                    </svg>
                    <span className="leading-snug">Import &amp; Export</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/customs-clearance"
                    data-noop=""
                    href="/brownfield/customs-clearance"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 4h10v16H7z"></path>
                      <path d="M10 8h4"></path>
                      <path d="M10 12h4"></path>
                      <path d="M10 16h2"></path>
                    </svg>
                    <span className="leading-snug">Customs Clearance</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/machine-retrofitting"
                    data-noop=""
                    href="/brownfield/machine-retrofitting"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14 7a4 4 0 0 1 0 6l-6 6-3-1 1-3 6-6"></path>
                      <path d="M13 8l3 3"></path>
                    </svg>
                    <span className="leading-snug">Machine Retrofitting</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/plc-upgrading"
                    data-noop=""
                    href="/brownfield/plc-upgrading"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 12a8 8 0 1 1-2.3-5.6"></path>
                      <path d="M20 5v5h-5"></path>
                      <path d="M12 9v4l2 2"></path>
                    </svg>
                    <span className="leading-snug">PLC Upgradation</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/lean-manufacturing"
                    data-noop=""
                    href="/brownfield/lean-manufacturing"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 16l5-5 3 3 8-8"></path>
                      <path d="M14 6h6v6"></path>
                    </svg>
                    <span className="leading-snug">Lean Manufacturing</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/existing-plant-expansion"
                    data-noop=""
                    href="/brownfield/existing-plant-expansion"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 4H4v5"></path>
                      <path d="M4 4l6 6"></path>
                      <path d="M15 20h5v-5"></path>
                      <path d="M20 20l-6-6"></path>
                    </svg>
                    <span className="leading-snug">Existing Plant Expansion</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/pre-owned-machine-procurement"
                    data-noop=""
                    href="/brownfield/pre-owned-machine-procurement"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 8a5 5 0 0 1 8.5-2"></path>
                      <path d="M17 6v3h-3"></path>
                      <path d="M17 16a5 5 0 0 1-8.5 2"></path>
                      <path d="M7 18v-3h3"></path>
                    </svg>
                    <span className="leading-snug">Pre-Owned Machine Procurement</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/brownfield/technical-support"
                    data-noop=""
                    href="/brownfield/technical-support"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12a7 7 0 0 1 14 0"></path>
                      <path d="M5 12v3a2 2 0 0 0 2 2h1v-6H7a2 2 0 0 0-2 1"></path>
                      <path d="M19 12v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1"></path>
                      <path d="M12 19v1"></path>
                    </svg>
                    <span className="leading-snug">Technical Support</span>
                  </a>
                </li>
              </ul>
              <a data-destination="/brownfield" data-noop="" href="/brownfield" role="button">
                View all ↗
              </a>
            </details>
            <details>
              <summary>Industries</summary>
              <ul>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/automotive-auto-components"
                    data-noop=""
                    href="/industries/automotive-auto-components"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 8h8v8H8z"></path>
                      <path d="M10 10h4v4h-4z"></path>
                      <path d="M5 9h3"></path>
                      <path d="M16 9h3"></path>
                      <path d="M5 15h3"></path>
                      <path d="M16 15h3"></path>
                      <path d="M9 5v3"></path>
                      <path d="M15 5v3"></path>
                      <path d="M9 16v3"></path>
                      <path d="M15 16v3"></path>
                    </svg>
                    <span className="leading-snug">Automotive &amp; Auto Components</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/aerospace-defence"
                    data-noop=""
                    href="/industries/aerospace-defence"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 20h16"></path>
                      <path d="M6 20V8l8-3 4 2v13"></path>
                      <path d="M14 8v5"></path>
                      <path d="M12 13h4"></path>
                    </svg>
                    <span className="leading-snug">Aerospace &amp; Defence</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/pharmaceutical-healthcare"
                    data-noop=""
                    href="/industries/pharmaceutical-healthcare"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16v12H4z"></path>
                      <path d="M8 10h2"></path>
                      <path d="M12 10h4"></path>
                      <path d="M8 14h8"></path>
                      <path d="M7 6V4"></path>
                      <path d="M12 6V4"></path>
                      <path d="M17 6V4"></path>
                    </svg>
                    <span className="leading-snug">Pharmaceutical &amp; Healthcare</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/chemical-petrochemical"
                    data-noop=""
                    href="/industries/chemical-petrochemical"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 20h8"></path>
                      <path d="M9 20V10a3 3 0 0 1 6 0v10"></path>
                      <path d="M12 4v3"></path>
                      <path d="M10 6h4"></path>
                    </svg>
                    <span className="leading-snug">Chemical &amp; Petrochemical</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/plastics-rubber-tyre"
                    data-noop=""
                    href="/industries/plastics-rubber-tyre"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
                      <path d="M12 4v2"></path>
                      <path d="M12 18v2"></path>
                      <path d="M4 12h2"></path>
                      <path d="M18 12h2"></path>
                      <path d="M6.2 6.2l1.4 1.4"></path>
                      <path d="M16.4 16.4l1.4 1.4"></path>
                      <path d="M17.8 6.2l-1.4 1.4"></path>
                      <path d="M7.6 16.4l-1.4 1.4"></path>
                    </svg>
                    <span className="leading-snug">Plastics, Rubber &amp; Tyre</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/steel-metals-foundry-forging"
                    data-noop=""
                    href="/industries/steel-metals-foundry-forging"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 20h16"></path>
                      <path d="M6 20V8l8-3 4 2v13"></path>
                      <path d="M14 8v5"></path>
                      <path d="M12 13h4"></path>
                    </svg>
                    <span className="leading-snug">Steel, Metals, Foundry &amp; Forging</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/general-engineering-machine-tools"
                    data-noop=""
                    href="/industries/general-engineering-machine-tools"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 7h16v12H4z"></path>
                      <path d="M8 7V5h8v2"></path>
                      <path d="M9 12h6"></path>
                    </svg>
                    <span className="leading-snug">General Engineering &amp; Machine Tools</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/electronics-electrical-semiconductor"
                    data-noop=""
                    href="/industries/electronics-electrical-semiconductor"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16v12H4z"></path>
                      <path d="M8 10h2"></path>
                      <path d="M12 10h4"></path>
                      <path d="M8 14h8"></path>
                      <path d="M7 6V4"></path>
                      <path d="M12 6V4"></path>
                      <path d="M17 6V4"></path>
                    </svg>
                    <span className="leading-snug">
                      Electronics, Electrical &amp; Semiconductor
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/food-beverage-fmcg"
                    data-noop=""
                    href="/industries/food-beverage-fmcg"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 20V10l5 3V9l5 3V8l8 4v8H3"></path>
                      <path d="M7 16h2"></path>
                      <path d="M12 16h2"></path>
                      <path d="M17 16h2"></path>
                    </svg>
                    <span className="leading-snug">Food, Beverage &amp; FMCG</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/packaging-printing"
                    data-noop=""
                    href="/industries/packaging-printing"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 8l8-4 8 4-8 4-8-4"></path>
                      <path d="M4 8v8l8 4 8-4V8"></path>
                      <path d="M12 12v8"></path>
                    </svg>
                    <span className="leading-snug">Packaging &amp; Printing</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/glass-ceramics-tiles"
                    data-noop=""
                    href="/industries/glass-ceramics-tiles"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 18h16"></path>
                      <path d="M6 18V8h4v10"></path>
                      <path d="M14 18V5h4v13"></path>
                      <path d="M8 11h0"></path>
                      <path d="M16 9h0"></path>
                    </svg>
                    <span className="leading-snug">Glass, Ceramics &amp; Tiles</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/textile-garments"
                    data-noop=""
                    href="/industries/textile-garments"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 16l5-5 3 3 8-8"></path>
                      <path d="M14 6h6v6"></path>
                    </svg>
                    <span className="leading-snug">Textile &amp; Garments</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/paper-pulp"
                    data-noop=""
                    href="/industries/paper-pulp"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 18h16"></path>
                      <path d="M6 18V8h4v10"></path>
                      <path d="M14 18V5h4v13"></path>
                      <path d="M8 11h0"></path>
                      <path d="M16 9h0"></path>
                    </svg>
                    <span className="leading-snug">Paper &amp; Pulp</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/power-renewable-energy-battery"
                    data-noop=""
                    href="/industries/power-renewable-energy-battery"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 3 6 13h5l-1 8 8-12h-5l0-6"></path>
                    </svg>
                    <span className="leading-snug">Power, Renewable Energy &amp; Battery</span>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-3 px-2 py-2 text-[15px] text-text-primary transition-colors hover:text-accent"
                    data-destination="/industries/cement-building-materials-mining"
                    data-noop=""
                    href="/industries/cement-building-materials-mining"
                    role="button"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-text-secondary"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 4H4v5"></path>
                      <path d="M4 4l6 6"></path>
                      <path d="M15 20h5v-5"></path>
                      <path d="M20 20l-6-6"></path>
                    </svg>
                    <span className="leading-snug">Cement, Building Materials &amp; Mining</span>
                  </a>
                </li>
              </ul>
              <a data-destination="/industries" data-noop="" href="/industries" role="button">
                View all ↗
              </a>
            </details>
            <a data-destination="/why-hmt" data-noop="" href="/why-hmt" role="button">
              Why HMT
            </a>
            <a data-destination="/process" data-noop="" href="/process" role="button">
              Process
            </a>
            <a data-destination="/contact" data-noop="" href="/contact" role="button">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
