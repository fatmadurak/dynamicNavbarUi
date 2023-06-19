import React, { useState } from 'react';
import { fetchNavbarData } from '../Api';
import { useQuery } from 'react-query';
import './navbar.css';

function Navbar() {
  const { isLoading, error, data } = useQuery('navbarData', fetchNavbarData);
  const [openMenu, setOpenMenu] = useState(null);
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  const toggleMenu = (index) => {
    if (openMenu === index) {
      setOpenMenu(null);
      setSubMenuVisible(false);
    } else {
      setOpenMenu(index);
      setSubMenuVisible(true);
    }
  };

  const handleMenuClick = (index) => {
    if (openMenu === index) {
      setOpenMenu(null);
      setTimeout(() => {
        setSubMenuVisible(false);
      }, 300); // Animasyon süresi
    } else {
      setOpenMenu(index);
      setSubMenuVisible(true);
    }
  };

  const navItem = (item, index) => {
    if (item.children && item.children.length > 0) {
      const isMenuOpen = openMenu === index;

      return (
        <li key={item.order} className={item.cssClass}>
          <a
            href={item.link}
            className={`nav-link ${isMenuOpen ? 'active' : ''}`}
            style={{ color: item.color }}
            onClick={() => handleMenuClick(index)}
          >
            {item.label}
          </a>
          {isMenuOpen && (
            <ul className={`sub-nav ${isSubMenuVisible ? 'open' : ''}`}>
              {item.children.map((child) => (
                <li key={child.order}>
                  <a href={child.link} className="sub-menu-item">
                    {child.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    } else {
      return (
        <li key={item.order} className={item.cssClass}>
          <a href={item.link} className="nav-link" style={{ color: item.color }}>
            {item.label}
          </a>
        </li>
      );
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">{data && data.map((item, index) => navItem(item, index))}</ul>
    </nav>
  );
}

export default Navbar;