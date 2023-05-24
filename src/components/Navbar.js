import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import logo from '../assets/logo-white.png';

const Navbar = () => {
  const location = useLocation();
  const detailPage = location.pathname.includes('/detail/');

  const [toggle, setToggle] = useState(false);

  const mobileMenu = () => {
    setToggle(!toggle);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      mobileMenu();
    }
  };

  const reload = () => {
    window.location.reload();
  };

  const handleLogo = (e) => {
    if (e.key === 'Enter') {
      reload();
    }
  };

  return (
    <nav>
      <div className="logo">
        {detailPage ? (
          <Link to="/" className="back">
            <IoIosArrowBack className="backArrow" />
            back
          </Link>
        )
          : (
            <div
              onClick={reload}
              onKeyDown={handleLogo}
              role="button"
              tabIndex={0}
              aria-label="Reload Page"
            >
              <img src={logo} alt="logo" id="logo" />
            </div>
          )}
      </div>
      <div className={!toggle ? 'link close' : 'link'}>
        <Link to="/">Cities</Link>
        <Link to="https://openweathermap.org/api/geocoding-api" target="_blank">City API</Link>
        <Link to="https://openweathermap.org/current" target="_blank">Weather API</Link>
      </div>
      <div
        className={toggle ? 'hamburger open' : 'hamburger'}
        onClick={mobileMenu}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Toggle Menu"
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </div>
    </nav>
  );
};

export default Navbar;
