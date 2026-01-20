import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Price from './pages/Price';
import Download from './pages/Download';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Features from './pages/Features';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import Documentation from './pages/Documentation';
import Community from './pages/Community';
import Changelog from './pages/Changelog';
import Cookies from './pages/Cookies';
import PricingForm from './pages/PricingForm';




function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/price" element={<Price />} />
            <Route path="/pricing-form" element={<PricingForm />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/features" element={<Features />} />
            <Route path="/careers" element={<Careers />} />



            {/* Resource Routes */}
            <Route path="/docs" element={<Documentation />} />
            <Route path="/community" element={<Community />} />
            <Route path="/changelog" element={<Changelog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
