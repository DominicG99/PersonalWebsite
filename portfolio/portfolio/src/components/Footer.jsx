import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return <footer id="footer">
  <div>
  <a className="logoHover" href="https://github.com/DominicG99" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size='3x' style={{marginRight: "50px", color: "black"}}/></a>
  <a className="logoHover" href="https://www.linkedin.com/in/dominic-ginter-aa0167192/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size='3x' style={{marginRight: "50px", color: "black"}}/></a>
  <a className="logoHover" href="https://www.instagram.com/dominicginter/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size='3x' style={{color: "black"}}/></a>
 
  </div>
  </footer>;
}

export default Footer;
