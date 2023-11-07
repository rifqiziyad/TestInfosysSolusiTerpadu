import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import MiddleSection from "./components/MiddleSection";
import OurService from "./components/OurService";
import OurTeams from "./components/OurTeams";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <MiddleSection />
      <OurService />
      <OurTeams />
    </>
  );
}

export default App;
