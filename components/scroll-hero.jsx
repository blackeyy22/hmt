'use client';

import { useEffect, useRef, useState } from 'react';
import { watchHeroVideo } from '../lib/hero-video-readiness.mjs';
import { createHeroScrubber } from '../lib/hero-video-scrubber.mjs';

export default function ScrollHero({
  videoSrc = '/assets/hmt/hero-client-web-552838be379d.mp4',
  poster = '/assets/hmt/hero-client-final-poster.jpg',
  review = false,
}) {
  const [division, setDivision] = useState('Greenfield');
  const [loading, setLoading] = useState(true);
  const [bufferPercent, setBufferPercent] = useState(0);
  const loaderRef = useRef(null);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let completed = false;
    const loadingStarted = performance.now();
    const scrubber = createHeroScrubber(video);
    const sticky = section.querySelector('.scroll-hero-sticky');
    let distance = 1;
    let sectionTop = 0;
    let stickyTop = 0;
    const measure = () => {
      distance = Math.max(1, section.offsetHeight - sticky.offsetHeight);
      sectionTop = section.getBoundingClientRect().top + window.scrollY;
      stickyTop = parseFloat(getComputedStyle(sticky).top) || 0;
      schedule();
    };
    const update = () => {
      frame = 0;
      if (reduced.matches) return;
      const progress = Math.max(
        0,
        Math.min(1, (window.scrollY + stickyTop - sectionTop) / distance),
      );
      section.style.setProperty('--hero-copy-opacity', String(Math.max(0, 1 - progress * 8)));
      section.style.setProperty('--hero-copy-shift', `${-Math.min(1, progress * 8) * 35}px`);
      section.classList.toggle('hero-copy-hidden', progress > 0.125);
      progressRef.current.value = progress;
      scrubber.setProgress(progress);
      if (progress >= 0.999 && !completed) {
        completed = true;
        window.dispatchEvent(new Event('hmt:hero-complete'));
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const ready = ({ reason = 'first-frame', bufferedFraction = 0 } = {}) => {
      video.pause();
      scrubber.setActive(!reduced.matches);
      section.dataset.openingRelease = reason;
      section.dataset.openingBufferFraction = String(bufferedFraction);
      const firstFrameMs = performance.now() - loadingStarted;
      section.dataset.openingReadyMs = String(Math.round(firstFrameMs));
      section.classList.add('hero-video-ready');
      setLoading(false);
      setBufferPercent(100);
      schedule();
    };
    const fallback = () => {
      video.pause();
      scrubber.setActive(false);
      section.dataset.openingRelease = 'error';
      setLoading(false);
      section.classList.add('hero-video-failed');
      window.dispatchEvent(new Event('hmt:hero-complete'));
    };
    const preference = () => {
      video.controls = reduced.matches;
      video.pause();
      scrubber.setActive(!reduced.matches && section.classList.contains('hero-video-ready'));
      if (reduced.matches) window.dispatchEvent(new Event('hmt:hero-complete'));
      else schedule();
    };
    const stopWatching = watchHeroVideo(video, {
      onReady: ready,
      onError: fallback,
      onProgress: () => setBufferPercent(video.readyState >= 1 ? 50 : 0),
      onFirstFrame: () => section.classList.add('hero-video-ready'),
      // The poster and page remain usable even if the connection stalls.
      onTimeout: () => {
        video.pause();
        scrubber.setActive(!reduced.matches);
        section.dataset.openingRelease = 'timeout';
        setLoading(false);
        schedule();
      },
    });
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', measure);
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(section);
    reduced.addEventListener('change', preference);
    preference();
    measure();
    return () => {
      video.pause();
      cancelAnimationFrame(frame);
      stopWatching();
      scrubber.dispose();
      resizeObserver.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', measure);
      reduced.removeEventListener('change', preference);
    };
  }, []);

  useEffect(() => {
    if (loading) loaderRef.current?.focus({ preventScroll: true });
  }, [loading]);

  return (
    <>
    {loading && (
      <div
        className="hero-opening-loader"
        ref={loaderRef}
        role="dialog"
        aria-modal="true"
        aria-label="HMT website loading"
        tabIndex={-1}
        onKeyDown={event => { if (event.key === 'Tab') event.preventDefault(); }}
      >
        <div className="hero-opening-loader-content">
          <img src="/assets/hmt/logo-hmt-light.png" width="200" height="70" alt="HMT Hindustan Machine Tools" />
          <div className="hero-opening-loader-caption"><span>Preparing your experience</span><span>{bufferPercent}%</span></div>
          <div
            className="hero-opening-loader-track"
            role="progressbar"
            aria-label="Opening film readiness"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={bufferPercent}
            aria-valuetext={bufferPercent >= 50 ? 'Video metadata ready; preparing the first frame' : 'Connecting to the film'}
          >
            <span style={{ width: `${bufferPercent}%` }} />
          </div>
          <p>Preparing your film</p>
        </div>
      </div>
    )}
    <section
      id="hero"
      className={`scroll-video-hero${review ? ' scroll-video-review' : ' tracked-hero'}`}
      ref={sectionRef}
      aria-label="HMT industrial film — scroll to explore"
    >
      <div className="scroll-hero-sticky hmt-hero">
        <video
          ref={videoRef}
          className="scroll-hero-video"
          muted
          playsInline
          preload="auto"
          poster={poster}
          aria-label="A tour of an industrial manufacturing facility"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="scroll-hero-shade" aria-hidden="true" />
        {!review && <div className="scroll-hero-copy">
          <div className="hero-division-copy">
            <p className="hero-brand">Hindustan Machine Tools</p>
            <div key={division} className="hero-division-writing" aria-live="polite">
              <h1 id="hero-division-title">{division.toUpperCase()}</h1>
              <p className="hero-division-tagline">
                {division === 'Greenfield'
                  ? 'From bare land to full production, supporting every milestone.'
                  : 'Single machine or full production line — we support with the same care and precision.'}
              </p>
            </div>
            <div className="hero-division-options" role="group" aria-label="Explore our divisions">
              {['Greenfield', 'Brownfield'].map((name) => (
                <button
                  type="button"
                  key={name}
                  aria-pressed={division === name}
                  aria-controls="hero-division-title"
                  onClick={() => setDivision(name)}
                >
                  {name}
                  <span aria-hidden="true">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>}
        <div className="scroll-hero-guide">
          <span>Scroll to explore</span>
          <progress ref={progressRef} max="1" value="0" aria-label="Industrial film progress" />
          <a href={review ? '#review-player' : '#divisions'}>
            Skip intro <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
