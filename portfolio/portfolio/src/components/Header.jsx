import React from 'react';
import "./Header.css"
import { Link, animateScroll as scroll } from "react-scroll";
function Header() {
  return <div className='myHeader'>
  <nav className='hyperlinks'>
  <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className='links'
>Home</Link>
  <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={true}
    offset={0}
    duration={1500}
    className='links'
>About</Link>
  
  <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className='links'
>Skills</Link>
  <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className='links'
>Projects</Link>
  <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
>Hobbies</Link>
  </nav>
    
  </div>;
}

export default Header;
