import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Supernova from './pages/Supernova';
import Botteghe from './pages/Botteghe';
import BuddyNutrition from './pages/BuddyNutrition';
import Lata from './pages/Lata';
import ClicksCorres from './pages/ClicksCorres';
import Estadio97 from './pages/Estadio97';
import AstroPay from './pages/AstroPay';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent({ theme, toggleTheme }) {
  useEffect(() => {
    // Initialize Lenis for smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      lerp: 0.12,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/supernova" element={<Supernova />} />
        <Route path="/botteghe" element={<Botteghe />} />
        <Route path="/buddynutrition" element={<BuddyNutrition />} />
        <Route path="/lata" element={<Lata />} />
        <Route path="/clickscorres" element={<ClicksCorres />} />
        <Route path="/estadio97" element={<Estadio97 />} />
        <Route path="/astropay" element={<AstroPay />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <HelmetProvider>
      <Router>
        <AppContent theme={theme} toggleTheme={toggleTheme} />
      </Router>
    </HelmetProvider>
  );
}

export default App;
