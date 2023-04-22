import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBarComponent from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Router>
        <Routes>
          
          {/* <Resume /> */}
          <Route exact path="/about" element={<Banner />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
