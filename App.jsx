import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/AboutUs'
import Contact from './pages/ContactUs'
import Explore from './pages/Explore'
import ProductDetails from './pages/ProductDetails'
import VisitUs from './pages/VisitUs'
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/visit-us" element={<VisitUs />} />
        </Routes>
    </Router>
  )
}

export default App;