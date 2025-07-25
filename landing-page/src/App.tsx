import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import TimeSaving from './components/TimeSaving';
import Features from './components/Features';
import Solutions from './components/Solutions';
import CustomerStories from './components/CustomerStories';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SocialProof />
      <TimeSaving />
      <Features />
      <Solutions />
      <CustomerStories />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;