import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Disciplines from './components/Disciplines/Disciplines';
import Certificates from './components/Certificates/Certificates'; 
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Certificates /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App; 