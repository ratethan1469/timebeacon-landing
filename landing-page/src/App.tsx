import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import SocialProof from './components/SocialProof';
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
      <Features />
      <Solutions />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;