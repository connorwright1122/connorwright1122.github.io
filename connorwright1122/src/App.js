import logo from './logo.svg';
import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        {/*
        <Route path="/extras" element={<Extras />} />
        */}
      </Routes>
    </div>
  );
}

export default App;
