// import { useState } from 'react';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Work from './components/Work';

function App() {
  return (
    <div >
   <Navigation />
   <Hero />
   <AboutMe/>
   <Experience/>
      <Work />
   <Footer/>
    </div>
  );
}

export default App;
