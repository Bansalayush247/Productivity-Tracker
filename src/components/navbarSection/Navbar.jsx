import React, { useState } from 'react';
import "./Navbar.css"
import logo from "../assets/logo/logo.jpg"


const Header = (props) => {
  const [isOpen, setIsOpen] = useState("");

  const toggleMenu = () => {
    if(isOpen==="open"){
        setIsOpen("");
    }
    else{
        setIsOpen("open");
    }
  };


  return (
    <header className='header'>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={isOpen}>
          <li>
            <a href='#1'>Home</a>
          </li>
          <li>
            <a href="#2" >About</a>
          </li>
          <li>
            <a href="#3" >Features</a>
          </li>
          <li>
            <a href="#5" >FAQ</a>
          </li>
          <li>
            <a href="#6" >Contact</a>
          </li>
          <li>
            <div className='checkbox'  onClick={props.lightmode}> 
            <input type="checkbox" />
            <span>LIGHT MODE</span>
            </div>
           
          </li>
        </ul>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <div className={`hamburger-menu ${isOpen}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;