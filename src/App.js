import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
const Header = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/about' element={<About />} />
                    <Route exact path='/contact' element={<Contact />} />
                    <Route exact path='/gallery' element={<Gallery />} />
                </Routes>
            </Router>
        </>
    )
}

export default Header;