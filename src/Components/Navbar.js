import React from 'react'
import {fetchNavbarData} from "../Api"
import { useQuery } from 'react-query'

function Navbar() {


    const { isLoading, error, data } = useQuery('navbarData', fetchNavbarData)
    
  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message




  
  return (
    <nav className="navbar">
    <ul className="navbar-nav"> 
  {
     
     data.map(item=>{
  
     return(
      <li  key={item.order} className="nav-item">
      <a href={item.link}>{item.label}</a>
      </li>
     )
    
   


   })

 
  }
 


 </ul>

</nav>
  
  )
}

export default Navbar