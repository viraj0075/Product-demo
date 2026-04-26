import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';

// Lazy load components below the fold
const ProductConcept = lazy(() => import('./components/ProductConcept'));
const FuturisticFeatures = lazy(() => import('./components/FuturisticFeatures'));
const UseCases = lazy(() => import('./components/UseCases'));
const Empowering = lazy(() => import('./components/Empowering'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Blog = lazy(() => import('./components/Blog'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => <div className="min-h-[200px] flex items-center justify-center text-brand-primary">Loading...</div>;

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
                <Suspense fallback={<LoadingFallback />}>
                  <ProductConcept />
                  <FuturisticFeatures />
                  <UseCases />
                  <Empowering />
                  <Testimonials />
                  <Blog />
                  <Contact />
                </Suspense>
              </main>
            }
          />
        </Routes>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
