import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from 'pages/About';
import AutoScroll from 'components/AutoScoll';
import NotFound from 'pages/NotFound';
import Contact from 'pages/Contact';
import Pricing from 'pages/Pricing';
import Services from 'pages/Services';
import HomePage from 'pages/Home';
import OurWork from 'pages/OurWork';

function App() {
  return (
    <>
      <AutoScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gallery" element={<OurWork />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;