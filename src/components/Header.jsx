import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const menuIcon = document.querySelector('.btn-toggle');
      const menuBox = document.querySelector('.box');

      if (menuIcon && menuBox && !menuIcon.contains(e.target) && !menuBox.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header id="home">
      <div>
        <nav className="navbar">
          <div
            className={`btn-toggle menu_icon_box ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <div className={`menu-links box ${menuOpen ? 'active_box' : ''}`}>
            <div className="menu-linksbtn">
              <ul className="nav-links">
                <li>
                  <Link to="/" onClick={closeMenu}>HOME</Link>
                </li>
                <li>
                  <a href="#works" onClick={closeMenu}>WORKS</a>
                </li>
                <li>
                  <a href="mailto:vaziodesignstudio@gmail.com">SAY HI!</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
