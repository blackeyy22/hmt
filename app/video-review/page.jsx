import ScrollHero from '../../components/scroll-hero';

export const metadata = { title: 'HMT | Tracked film review' };

export default function VideoReview() {
  return (
    <main className="video-review-page">
      <div className="video-review-bar">
        <a href="/">← Home page</a>
        <span>HMT · Tracked film draft</span>
        <a href="#review-player">Watch / download ↓</a>
      </div>
      <ScrollHero videoSrc="/assets/hmt/hero-tracked-review.mp4" poster="/assets/hmt/hero-tracked-review-poster.jpg" review />
      <section id="review-player" className="video-review-player">
        <p>HINDUSTAN MACHINE TOOLS</p>
        <h1>Your tracked film draft</h1>
        <p>Scroll above to scrub the film, or play it here. Download the draft to make your edits.</p>
        <video controls playsInline preload="metadata" poster="/assets/hmt/hero-tracked-review-poster.jpg">
          <source src="/assets/hmt/hero-tracked-review.mp4" type="video/mp4" />
        </video>
        <a className="video-review-download" href="/assets/hmt/hero-tracked-review.mp4" download="HMT-tracked-review.mp4">Download tracked video ↓</a>
      </section>
    </main>
  );
}
