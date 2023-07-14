import Again from "./components/Again";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Tools from "./components/Tools";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Experience/>
      <Tools/>
      <Works/>
      <Again/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
