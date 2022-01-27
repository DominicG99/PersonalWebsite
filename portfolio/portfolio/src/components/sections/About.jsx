import React from 'react';
import "./About.css"
import {Container, Row, Col} from "react-bootstrap";
function About() {
  return <Container id='about' className='aboutContainer'>
  <Row lg={{span: 4, offset: 4}} xs={{span: 12, offset: 2}}>
  <Col>
  <h1>About Me</h1>
  </Col>
  <Col>
    <img className="aboutImage" src="./images/placeholder-image.png" alt="Dominic Ginter Picture"/>
  </Col>
  </Row>
  <Row>
    <Col lg={{span: 4}}>
      Hello! I recently graduated in May 2021 with a Bachelor's of Science in Computer Science and Engineering. Currently, I am looking to find my first job as a Software Engineer.
      I am open to most locations within the United States, but hope to start my career here on the West Coast.
      <br/>
      <br/>
      My development
    </Col>
  </Row>
      
  </Container>;
}

export default About;
