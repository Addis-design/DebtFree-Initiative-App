import './App.css';
import AboutPage from './components/AboutPage/about'; // Assuming 'about.js' is the file name
import DonatePage from './components/DotaePage/donate';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Render HomePage directly outside of Router */}
      <Router>
        <Routes>
          {/* Use exact path for clarity, adjust as needed */}
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />

          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/donate" element={<DonatePage />} />

          {/* Handle unmatched routes gracefully (optional) */}
          <Route path="*" element={<div>404: Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
