import React, { useState } from 'react';
import { fetchNavbarData } from '../Api';
import { useQuery } from 'react-query';
import './navbar.css';

function Navbar() {
  const { isLoading, error, data } = useQuery('navbarData', fetchNavbarData);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuClick = (index) => {
    setActiveMenuItem(activeMenuItem === index ? null : index);
  };

  const navItem = (item, index) => {
    const isMenuOpen = activeMenuItem === index;

    const handleSubMenuClick = (e) => {
      e.stopPropagation();
    };

    return (
      <li key={item.order} className={item.cssClass}>
        <div
          className={`nav-link ${isMenuOpen ? 'active' : ''}`}
          style={{ color: item.color }}
          onClick={() => handleMenuClick(index)}
        >
          {item.label}
        </div>
        {isMenuOpen && item.children && (
          <ul className="sub-nav" onClick={handleSubMenuClick}>
            {item.children.map((child) => (
              <li key={child.order}>
                <div
                  className={`sub-menu-item ${activeMenuItem === index ? 'open' : ''}`}
                  onClick={() => handleMenuClick(index)}
                >
                  <a href={child.link}>{child.label}</a>
                  {child.children && (
                    <ul className={`sub-sub-nav ${activeMenuItem === index ? 'open' : ''}`}>
                      {child.children.map((subChild) => (
                        <li key={subChild.order}>
                          <a href={subChild.link} className="sub-sub-menu-item">
                            {subChild.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">{data && data.map((item, index) => navItem(item, index))}</ul>
    </nav>
  );
}

export default Navbar;