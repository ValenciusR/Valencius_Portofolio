import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import "./App.css";
import Home from "./pages/home/Home";
import Portofolio from "./pages/portofolio/Portofolio";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";

function AnimatedRoutes() {
  const location = useLocation(); // ✅ useLocation inside Router

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Themes />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
