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
    smooth={false}
    offset={-70}
    duration={500}
    style={{marginRight: "15px"}}
    className='links'
>Home</Link>
  <Link
    activeClass="active"
    to="about"
    spy={true}
    smooth={false}
    offset={0}
    duration={500}
    style={{marginRight: "15px"}}
    className='links'
>About</Link>
  
  <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    style={{marginRight: "15px"}}
    className='links'
>Skills</Link>
  <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    style={{marginRight: "15px"}}
    className='links'
>Projects</Link>
  <Link
    activeClass="active"
    to="home"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    className='links'
>Hobbies</Link>
  </nav>
    
  </div>;
}

export default Header;
