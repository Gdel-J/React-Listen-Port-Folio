import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('about');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Use useEffect to register the service worker on component mount
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        // Register the service worker using the service-worker.js file
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('Service Worker registered:', registration);
        }).catch(error => {
          console.log('Service Worker registration failed:', error);
        });
      });
    }
  }, []);

  return (
    <div>
      <Header onPageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
