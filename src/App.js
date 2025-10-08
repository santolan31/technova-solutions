import React, { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Services from './components/pages/Services';
import CallToAction from './components/layout/CallToAction';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Quote from './components/pages/Quote/Quote';
import SuccessCases from './components/pages/SuccessCases';
import Footer from './components/layout/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'contact':
        return <Contact />;
      case 'about':
        return <About />;
      case 'quote':
        return <Quote />;
      case 'success-cases':
        return <SuccessCases />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <Services />
            <CallToAction onNavigate={setCurrentPage} />
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
