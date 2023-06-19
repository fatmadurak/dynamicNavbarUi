import React, { useState } from 'react';
import { fetchNavbarData } from '../Api';
import { useQuery } from 'react-query';
import './navbar.css';

function Navbar() {
  const { isLoading, error, data } = useQuery('navbarData', fetchNavbarData);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (index) => {
    if (openMenu === index) {
      setOpenMenu(null);
    } else {
      setOpenMenu(index);
    }
  };

  const navItem = (item, index) => {
    if (item.children && item.children.length > 0) {
      return (
        <li key={item.order} className={item.cssClass}>
          <a
            href={item.link}
            className={`nav-link ${openMenu === index ? 'active' : ''}`}
            style={{ color: item.color }}
            onClick={() => toggleMenu(index)}
          >
            {item.label}
          </a>
          <ul className={`sub-nav ${openMenu === index ? 'open' : ''}`}>
            {item.children.map((child) => navItem(child))}
          </ul>
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