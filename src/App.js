import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProjectView from "./Components/ProjectView";
import About from "./Components/About";
import ContactUs from "./Components/Contact";
import NavBar from "./Components/Navbar";
import Gallery from "./Components/Gallery";
import Blog from "./Components/Blog";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
      <Routes>
        <Route path="/" element={<ProjectView />} />
        <Route path="#about" element={<About className="about" />} />
        <Route path="#contact" element={<ContactUs className="contact" />} />
        <Route path="#blog" element={<Gallery className="gallery" />} />
        <Route path="#hive" element={<Blog className="blog" />} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;
