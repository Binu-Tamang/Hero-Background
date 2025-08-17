import { Routes, Route } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import Timeline from "../components/Timeline/Timeline";
import Jellyfish from "../components/Jellyfish/Jellyfish";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/hero-section" element={<HeroSection />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/jellyfish" element={<Jellyfish />} />
    </Routes>
  );
};

export default AppRoutes;
