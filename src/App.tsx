import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage";
import TeamPage from "./pages/TeamPage";
import MediaPage from "./pages/MediaPage";
import OfficePage from "./pages/OfficePage";
import CareerPage from "./pages/Career";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/stations" element={<OfficePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/media" element={<MediaPage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<CareerPage />} />
      </Routes>
      <Footer />
    </>
  );
}
