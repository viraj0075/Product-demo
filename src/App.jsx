import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Empowering from './components/Empowering';
import ProblemSolution from './components/ProblemSolution';
import ProductConcept from './components/ProductConcept';
import FuturisticFeatures from './components/FuturisticFeatures';
import UseCases from './components/UseCases';
import Collaboration from './components/Collaboration';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-inter selection:bg-brand-primary/30 selection:text-white">
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <LogoStrip />
                <ProblemSolution />
                <ProductConcept />
                <FuturisticFeatures />
                <UseCases />
                <Collaboration />
                <Testimonials />
                <Empowering />
                <Blog />
                <CTA />
              </main>
            }
          />
        </Routes>

        {/* Footer stays outside Routes so it shows on every page */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
