import React from 'react';
import "./Intro.css"
import FadeIn from 'react-fade-in'
function Intro() {
  return <div id='home' className='introContainer'>
  <FadeIn transitionDuration={1750} delay={1500}>
  <h1 className='hello'>Hello!</h1>
    <h3 className='myIntro'>my name is Dominic Ginter...</h3>
    </FadeIn>
  </div>;
}

export default Intro;
