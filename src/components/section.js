import React, { useEffect } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './section.css';
const Section = () => {

    useEffect(() => {
        // Register scroll events or any other setup if needed
        const handleScroll = () => {
          // You can log or track scrolling behavior here if needed
          console.log('User is scrolling...');
        };
    
        // Add event listener on component mount
        window.addEventListener('scroll', handleScroll);
    
        // Clean up on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



  // Rendering the component's JSX.
  return (
 
   <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link activeClass=".active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                  <li><Link activeClass=".active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
                  <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
                  <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
                  <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
                  <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>
            
                </ul>
              </div>
            </div>
          </nav>

          <Element name="test1" className="element" >
            test 1
        </Element>

          <Element name="test2" className="element">
            test 2
        </Element>

          <Element name="test3" className="element">
            test 3
        </Element>

          <Element name="test4" className="element">
            test 4
        </Element>

          <Element name="test5" className="element">
            test 5
        </Element>

          <div id="anchor" className="element">
            test 6 (anchor)
        </div>
  </div>
);

};

export default Section;