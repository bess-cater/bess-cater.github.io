import logo from './logo.svg';
import './App.css';
import {Navbar, Content} from "./components/nav";
import Section from "./components/section"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
function App() {
  return (
<div>
  <Navbar />
  <Content/>
</div>
);
}

export default App;