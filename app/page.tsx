import Hero from './components/hero';
import Services from './components/service';
import Gallery from './components/gallery';
import Booking from './components/booking';
import TestimonialsSection from './components/testimonials-section.tsx';
import CookieConsent from './components/CookieConsent';

const Home = () => (
  <div>
    <CookieConsent />
    <Hero />
    <Services cardsPerView={3} />
    <Gallery />
    {/* <Booking /> */}
    <TestimonialsSection />
  </div>
);

export default Home;

