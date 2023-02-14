import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import OurDestinations from './components/OurDestinations/OurDestinations';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="p-0 m-0 ">
      <Navbar />
      <Slider />
      <OurDestinations />
      <Experience />
    </div>
  );
}

export default App;
