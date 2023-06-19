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
          <ul className="sub-nav">
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
  };
  

  return (
    <nav className="navbar">
      <ul className="navbar-nav">{data && data.map((item, index) => navItem(item, index))}</ul>
    </nav>
  );
}

export default Navbar;