
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'; 
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import About from './components/About';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header></Header>

        
          <Routes>
            
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            {/* Include other routes as necessary */}
            {/* Example: <Route path="/contact" element={<Contact />} /> */}
          </Routes>
       

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;