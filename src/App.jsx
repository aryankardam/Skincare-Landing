import { useState } from 'react'
import './App.css'
import BestSellingProducts from './components/BestSellingProducts'
import Hero from './components/Hero'
import Hero2 from './components/Hero2'
import Navbar from './components/Navbar'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import LandingPage from './components/LoadingScreen'


function App() {
  const [showLanding, setShowLanding] = useState(true);

  return (
    <>
      {showLanding && <LandingPage onFinish={() => setShowLanding(false)} />}

      {!showLanding && (
        <>
          <Navbar />
          <Hero />
          <Hero2 />
          <BestSellingProducts />
          <FAQSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
