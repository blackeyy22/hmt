import FooterSmoke from './footer-smoke';

export default function SiteFooter() {
  return (
    <>
      <footer className="hero-tape-slope footer-tape-clip relative overflow-hidden bg-surface pt-14 sm:pt-16 lg:pt-20 hmt-footer">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-grid opacity-30"
        ></div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(255,90,31,0.12), transparent 70%)' }}
        ></div>
        <div className="relative mx-auto grid w-full max-w-site gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:gap-10 lg:px-12 lg:py-16">
          <div className="lg:col-span-4">
            <a
              aria-label="HMT Industrial Machine Tools, home"
              className="inline-flex min-w-0 shrink items-center max-w-[min(420px,88vw)] sm:max-w-[480px]"
              data-destination="/"
              data-noop=""
              href="/"
              role="button"
            >
              <img
                alt="HMT Hindustan Machine Tools"
                className="w-auto object-contain object-left h-20 sm:h-[5.5rem] md:h-24"
                decoding="async"
                height="200"
                loading="lazy"
                src="./assets/hmt/logo-hmt-light.png"
                style={{ color: 'transparent' }}
                width="640"
              />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-text-secondary">
              An industrial engineering and project execution company — not a machine-relocation
              contractor. Two flagship divisions: Greenfield, from bare land to production start-up,
              and Brownfield, modernization of plants already in operation.
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
              Engineering. Relocation. Industrial Excellence.
            </p>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-text-primary">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/greenfield"
                  data-noop=""
                  href="/greenfield"
                  role="button"
                >
                  Greenfield Projects
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/brownfield"
                  data-noop=""
                  href="/brownfield"
                  role="button"
                >
                  Brownfield Projects
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/brownfield/machine-relocation"
                  data-noop=""
                  href="/brownfield/machine-relocation"
                  role="button"
                >
                  Machine Relocation
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/greenfield/industrial-automation"
                  data-noop=""
                  href="/greenfield/industrial-automation"
                  role="button"
                >
                  Industrial Automation
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-text-primary">
              Industries
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/industries/automotive-auto-components"
                  data-noop=""
                  href="/industries/automotive-auto-components"
                  role="button"
                >
                  Automotive &amp; Auto Components
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/industries/pharmaceutical-healthcare"
                  data-noop=""
                  href="/industries/pharmaceutical-healthcare"
                  role="button"
                >
                  Pharmaceutical &amp; Healthcare
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/industries/steel-metals-foundry-forging"
                  data-noop=""
                  href="/industries/steel-metals-foundry-forging"
                  role="button"
                >
                  Steel, Metals, Foundry &amp; Forging
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/industries/power-renewable-energy-battery"
                  data-noop=""
                  href="/industries/power-renewable-energy-battery"
                  role="button"
                >
                  Power, Renewable Energy &amp; Battery
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/industries"
                  data-noop=""
                  href="/industries"
                  role="button"
                >
                  All industries
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-text-primary">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/why-hmt"
                  data-noop=""
                  href="/why-hmt"
                  role="button"
                >
                  Why HMT
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/process"
                  data-noop=""
                  href="/process"
                  role="button"
                >
                  Execution process
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-text-secondary transition-colors hover:text-accent"
                  data-destination="/contact"
                  data-noop=""
                  href="/contact"
                  role="button"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-[11px] font-semibold uppercase tracking-eyebrow text-text-primary">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-text-secondary">
              <li>
                <a
                  className="transition-colors hover:text-accent"
                  data-destination="mailto:connect@hindustanmachinetools.com"
                  data-noop=""
                  href="mailto:connect@hindustanmachinetools.com"
                  role="button"
                >
                  connect@hindustanmachinetools.com
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-accent"
                  data-destination="tel:+919023093018"
                  data-noop=""
                  href="tel:+919023093018"
                  role="button"
                >
                  +91 90230 93018
                </a>
              </li>
              <li>Corporate office: Vashi, Navi Mumbai</li>
              <li>Response within one business day</li>
            </ul>
            <div className="mt-6 flex gap-2.5">
              <a
                aria-label="LinkedIn — email the project desk"
                className="grid h-10 w-10 place-items-center border border-border bg-background text-text-primary transition-colors hover:border-accent hover:text-accent"
                data-destination="mailto:connect@hindustanmachinetools.com"
                data-noop=""
                href="mailto:connect@hindustanmachinetools.com"
                role="button"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9v9M6 6h.01M10 18v-6.2a2.2 2.2 0 1 1 4.4 0V18M10 12v6"></path>
                </svg>
              </a>
              <a
                aria-label="YouTube — email the project desk"
                className="grid h-10 w-10 place-items-center border border-border bg-background text-text-primary transition-colors hover:border-accent hover:text-accent"
                data-destination="mailto:connect@hindustanmachinetools.com"
                data-noop=""
                href="mailto:connect@hindustanmachinetools.com"
                role="button"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 8.5A2 2 0 0 1 6 6.5h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM11 10.5v5l4-2.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-copyright">© 1994–2026 HMT. All Rights Reserved.</p>
        <FooterSmoke />
      </footer>
    </>
  );
}
