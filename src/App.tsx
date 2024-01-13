import "./App.css";
import "./index.css";
import ContactComponent from "./components/contact/Contact";
import FooterComponent from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HeroComponent from "./components/Hero";
import TestimonialComponent from "./components/Testimonials";
import FeaturesComponent from "./components/Features";
import FAQComponent from "./components/FAQ";

function App() {
  return (
    <>
      <Navbar />
      <HeroComponent />
      <TestimonialComponent />
      <FeaturesComponent />
      <FAQComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}

export default App;
