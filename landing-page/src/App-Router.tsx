import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Consulting from './pages/Consulting';
import CustomerSuccess from './pages/CustomerSuccess';  
import ImplementationTeams from './pages/ImplementationTeams';
import ManagersLeaders from './pages/ManagersLeaders';
import Integrations from './pages/Integrations';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import ImplementationGuides from './pages/ImplementationGuides';
import Blog from './pages/Blog';
import Webinars from './pages/Webinars';
import CaseStudies from './pages/CaseStudies';
import Documentation from './pages/Documentation';
import HelpCenter from './pages/HelpCenter';
import Customers from './pages/Customers';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions/consulting" element={<Consulting />} />
          <Route path="/solutions/customer-success" element={<CustomerSuccess />} />
          <Route path="/solutions/implementations" element={<ImplementationTeams />} />
          <Route path="/solutions/managers-leaders" element={<ManagersLeaders />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources/implementation-guides" element={<ImplementationGuides />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/webinars" element={<Webinars />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/help-center" element={<HelpCenter />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;