import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import GlobePage from './pages/GlobePage';
import ContactPage from './pages/ContactPage';
import WritingPage from './pages/WritingPage';
import FunPage from './pages/FunPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/travel" element={<GlobePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/fun" element={<FunPage />} />
      </Routes>
    </Router>
  );
}

export default App;
