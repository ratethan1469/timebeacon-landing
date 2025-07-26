import React from 'react';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import TimeSaving from '../components/TimeSaving';
import Features from '../components/Features';
import Solutions from '../components/Solutions';
import CustomerStories from '../components/CustomerStories';
import Testimonials from '../components/Testimonials';
import ROICalculator from '../components/ROICalculator';
import Pricing from '../components/Pricing';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <SocialProof />
      <TimeSaving />
      <Features />
      <Solutions />
      <CustomerStories />
      <Testimonials />
      <ROICalculator />
      <Pricing />
    </>
  );
};

export default HomePage;