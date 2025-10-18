import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Stats from './components/Stats';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Hire from './components/Hire';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div id="home">
      <Header />
      <Navbar />
      <About />
      <Resume />
      <Stats />
      <Services />
      <Pricing />
      <Hire />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
