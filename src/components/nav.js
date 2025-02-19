import React from 'react';
import './Navbar.css';
import { Link, Element } from "react-scroll";


function Navbar(){
    const handleSetActive = (to) => {
        console.log("Active section:", to); 
      };
    return (
  
        <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            Elizaveta Lukianova
          </a>
        </div>

        <div className="navbar-center">
          <ul className="nav-links">
            <li>
            <Link to="bio" activeClass="active" smooth={true} duration={500} offset={-110} spy={true} onSetActive={() => console.log('Bio section is active!')}>
            Bio
          </Link>
            </li>
            <li>
            <Link to="publications" activeClass="active" smooth={true} duration={500} offset={-110} spy={true} onSetActive={() => console.log('kkk section is active!')}>
            Publications
          </Link>
            </li>
            <li>
            <Link to="projects" activeClass="active" smooth={true} duration={500} offset={-110} spy={true}>
            Projects
          </Link>
            </li>
          </ul>
        </div>
       
      </nav>
      );
      };

      function Content() {
        return (
          <div>
            <Element name="bio" className="element" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
              <h2>Bio </h2>
              <p>This is the Bio section</p>
            </Element>
            <Element name="publications" className="element" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
              <h2>Publications</h2>
              <p>This is the Publications section</p>
            </Element>
            <Element name="projects" className="element" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>
              <h2>Projects</h2>
              <p>This is the Projects section</p>
            </Element>
          </div>
        );
      }
      
      export { Navbar, Content };
      