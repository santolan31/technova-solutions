import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Services />
            <CallToAction />
          </>
        );
    }
  };

  return (
    <div className="App bg-dark text-light min-vh-100">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
      <Footer onNavigate={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}

export default App;
