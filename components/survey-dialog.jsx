export default function SurveyDialog() {
  return (
    <>
      <dialog aria-label="Planning a project? Get a free site survey." id="survey-dialog">
        <div
          aria-labelledby=":R6kq:"
          aria-modal="true"
          className="relative grid max-h-[94dvh] w-full max-w-3xl overflow-y-auto bg-surface shadow-lift md:grid-cols-[0.9fr_1.1fr]"
          style={{}}
        >
          <button
            aria-label="Close"
            className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-accent md:bg-transparent md:text-text-secondary md:hover:bg-transparent md:hover:text-accent"
            data-close-survey=""
            type="button"
          >
            <span className="text-2xl leading-none">×</span>
          </button>
          <div className="relative hidden overflow-hidden bg-ink text-white md:block">
            <img
              alt="Planning a project? Get a free site survey."
              className="object-cover opacity-40"
              decoding="async"
              loading="lazy"
              src="./assets/hmt/electrical-work-portrait.webp"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: '0px',
                color: 'transparent',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"></div>
            <div className="relative flex h-full flex-col justify-end p-7">
              <span className="mb-auto inline-flex w-fit items-center gap-2 bg-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span> Project
                desk open
              </span>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-[15px] font-medium leading-snug">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12.5 9.2 17 19 7"></path>
                    </svg>
                  </span>
                  100% Free Site Survey by our engineers
                </li>
                <li className="flex items-start gap-2.5 text-[15px] font-medium leading-snug">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12.5 9.2 17 19 7"></path>
                    </svg>
                  </span>
                  Free initial project consultation
                </li>
                <li className="flex items-start gap-2.5 text-[15px] font-medium leading-snug">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12.5 9.2 17 19 7"></path>
                    </svg>
                  </span>
                  Response within one business day
                </li>
                <li className="flex items-start gap-2.5 text-[15px] font-medium leading-snug">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent">
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12.5 9.2 17 19 7"></path>
                    </svg>
                  </span>
                  One point of contact, survey to handover
                </li>
              </ul>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <div>
              <div
                className="relative mr-10 inline-flex items-center gap-2.5 overflow-hidden border-2 border-dashed border-accent bg-accent/10 px-3.5 py-2"
                style={{}}
              >
                <span className="font-display text-2xl font-black leading-none text-accent sm:text-3xl">
                  100%
                </span>
                <span className="text-[12px] font-bold uppercase leading-tight tracking-[0.12em] text-ink sm:text-[13px]">
                  Free
                  <br />
                  Site Survey
                </span>
              </div>
              <h2
                className="mt-4 pr-8 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl"
                id=":R6kq:"
              >
                Planning a project? Get a free site survey.
              </h2>
              <p className="mt-2 text-[15px] text-muted">
                Our engineers visit your plant or site at no cost. Leave your number and we'll
                schedule it.
              </p>
              <form className="mt-5 space-y-3" id="survey-form" noValidate>
                <input
                  autoComplete="name"
                  className="w-full border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors placeholder:text-muted focus:border-accent"
                  name="name"
                  placeholder="Your name *"
                  required
                />
                <input
                  autoComplete="tel"
                  className="w-full border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors placeholder:text-muted focus:border-accent"
                  inputMode="tel"
                  name="phone"
                  placeholder="Phone number *"
                  required
                  type="tel"
                />
                <input
                  autoComplete="email"
                  className="w-full border border-border bg-background px-4 py-3 text-[15px] text-text-primary outline-none transition-colors placeholder:text-muted focus:border-accent"
                  name="email"
                  placeholder="Email (optional)"
                  type="email"
                />
                <div aria-label="Project type" className="grid grid-cols-2 gap-2" role="group">
                  <button
                    aria-pressed="false"
                    className="border px-3 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors border-border text-text-primary hover:border-accent hover:text-accent"
                    data-project-type="Greenfield"
                    type="button"
                  >
                    Greenfield
                  </button>
                  <button
                    aria-pressed="false"
                    className="border px-3 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors border-border text-text-primary hover:border-accent hover:text-accent"
                    data-project-type="Brownfield"
                    type="button"
                  >
                    Brownfield
                  </button>
                </div>
                <input
                  aria-hidden="true"
                  autoComplete="off"
                  className="hidden"
                  name="website"
                  tabIndex="-1"
                />
                <button
                  className="group inline-flex w-full items-center justify-center gap-2.5 bg-accent px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-hover disabled:opacity-60"
                  type="submit"
                >
                  Book my free site survey
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </button>
                <p className="text-center text-xs text-text-secondary">
                  Or call us directly at{' '}
                  <a
                    className="font-semibold text-ink hover:text-accent"
                    data-destination="tel:+919023093018"
                    data-noop=""
                    href="tel:+919023093018"
                    role="button"
                  >
                    +91 90230 93018
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
