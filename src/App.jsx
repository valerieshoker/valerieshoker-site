import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Travel from './pages/Travel';
import Contact from './pages/Contact';
import Writing from './pages/Writing';
import Fun from './pages/Fun';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
    </Router>
  );
}

export default App;
