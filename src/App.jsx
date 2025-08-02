import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Chemicals from "@/pages/Chemicals";
import PhysicsEquipment from "@/pages/PhysicsEquipment";
import Sports from "@/pages/Sports";
import Services from "@/pages/Services";

function App() {
  return (
    <Router>
      <div className="App bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/chemicals" element={<Chemicals />} />
          <Route path="/physics-equipment" element={<PhysicsEquipment />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
