import React from 'react';
import './navbar.css';

function Navbar() {

  return (
    <div id='navbar' className='nav'>
      <div className="Name">
        Shiva Silmawala 
      </div>
      <ul className="nav-list">
        <li><a href={'/'}>About</a></li>
        <li><a href={"/#projects"} >Work</a></li>
        <li><a href={'/#contact'}>Contact</a></li>
      </ul>
  
    </div>
  );
}

export default Navbar;
