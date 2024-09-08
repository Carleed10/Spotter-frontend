import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../Styling/navbar4.css';
import spot from '../Images/spotter logo.png'


const NavBar4 = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [Navbar, setNavbar] = useState(true)


  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  useEffect(() => {
    window.addEventListener('scroll',  () => {
      let windowHeight = window.scrollY
      if(windowHeight > 100){
        setNavbar(false);

      }else if(windowHeight < 100){
        setNavbar(true)
      }
    });

    
    ;
  }, [Navbar]);


  return (
    <div style={{backgroundColor: Navbar ? 'transparent' : 'black', transition : "ease-in-out 0.5s"}} className="navBg">

    <div className="nav-wrapper">
      {/* <div className="grad-bar"></div> */}
      <nav className="navbar">
      <img style={{width : 140, height : 35}} src={spot} className="logo" alt="logo" />

        {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" /> */}
        <div className={`menu-toggle ${mobileMenuActive ? 'is-active' : ''}`} id="mobile-menu" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav ${searchActive ? 'search' : 'no-search'} ${mobileMenuActive ? 'mobile-nav' : ''}`}>
          <li className="nav-item"><a href="#">Home</a></li>
          <li className="nav-item"><a href="#">About</a></li>
          <li className="nav-item"><a href="#">Work</a></li>
          <li className="nav-item"><a href="#">Careers</a></li>
          <li className="nav-item"><a href="#">Contact Us</a></li>
          {/* <i className="fas fa-search" id="search-icon" onClick={toggleSearch}></i> */}
          {/* <input className={`search-input ${searchActive ? 'search-active' : ''}`} type="text" placeholder="Search.." /> */}
        </ul>
      </nav>
    </div>

    </div>  

  );
};

export default NavBar4;
