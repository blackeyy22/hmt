import Script from 'next/script';
import SiteHeader from '../components/site-header';
import HomepageContent from '../components/homepage-content';
import SiteFooter from '../components/site-footer';
import FloatingContact from '../components/floating-contact';
import SurveyDialog from '../components/survey-dialog';

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <HomepageContent />
      <SiteFooter />
      <FloatingContact />
      <SurveyDialog />
      <Script src="/app.js" strategy="afterInteractive" />
      <Script src="/horizontal-scroll.js?v=hover-wheel-20261112" strategy="afterInteractive" />
      <Script src="/motion.js" strategy="afterInteractive" />
    </>
  );
}
