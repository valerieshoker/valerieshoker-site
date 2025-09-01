import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'; 
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import GlobePage from './pages/GlobePage';
import TravelGuide from "./pages/TravelGuide";
import TravelIndex from "./pages/TravelIndex";
import CoffeePage from './pages/CoffeePage';
import WritingPage from './pages/WritingPage';
import FunPage from './pages/FunPage';
import JournalPage from './pages/JournalPage';
import FairygardenPage from './pages/FairygardenPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/globe" element={<GlobePage />} />
        <Route path="/travel" element={<TravelIndex />} />      
        <Route path="/travel/:slug" element={<TravelGuide />} />
        <Route path="/coffee" element={<CoffeePage />} />
        <Route path="/writing" element={<WritingPage />} />
        <Route path="/fun" element={<FunPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/fairygarden" element={<FairygardenPage />} />
      </Routes>
      <Analytics /> 
    </Router>
  );
}

export default App;
