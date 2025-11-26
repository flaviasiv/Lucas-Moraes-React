import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
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
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
