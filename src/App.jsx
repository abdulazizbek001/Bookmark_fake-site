import './App.css'
import Cards from './components/Cards/Cards';
import Dowland from './components/Dowland/Dowland';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import FooterTop from './components/FooterTop/FooterTop';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <Features />
        <Dowland />
        <Cards />
        <Info />
      </div>
      <FooterTop />
      <Footer />
    </>
  )
}

export default App