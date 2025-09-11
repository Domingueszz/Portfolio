import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Disciplines from './components/Disciplines/Disciplines';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/contact';
import './styles/globals.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Disciplines />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;