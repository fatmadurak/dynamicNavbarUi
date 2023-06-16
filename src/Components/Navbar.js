import React from 'react'
import {fetchNavbarData} from "../Api"
import { useQuery } from 'react-query'
import "./navbar.css"

function Navbar() {


 const { isLoading, error, data } = useQuery('navbarData', fetchNavbarData)
    
  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  const navItem = (item) => {
    if (item.children && item.children.length > 0) {
      return (
        <li key={item.order} className={item.cssClass}>
          <a href={item.link} className="nav-link"  style={{ color: item.color }}>
            {item.label}
          </a>
          <ul className="sub-nav">
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
      <ul className="navbar-nav">{data.map(navItem)}</ul>
    </nav>
  );
}

export default Navbar;