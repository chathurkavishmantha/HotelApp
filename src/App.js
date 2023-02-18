import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offer/Offer';
import OurDestinations from './components/OurDestinations/OurDestinations';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="p-0 m-0 ">
      <Navbar />
      <Slider />
      <OurDestinations />
      <Experience />
      <Offer />
      <Footer />
    </div>
  );
}

export default App;
