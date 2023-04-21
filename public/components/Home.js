import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar/NavBar.js';
export function Home() {
  const contactRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const homeRef = React.useRef(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "snap-mandatory snap-y"
  }, /*#__PURE__*/React.createElement(NavBar, {
    hero: homeRef,
    contact: contactRef,
    about: aboutRef
  }), /*#__PURE__*/React.createElement(Hero, {
    ref: homeRef
  }), /*#__PURE__*/React.createElement(Contact, {
    ref: contactRef
  }), /*#__PURE__*/React.createElement(About, {
    ref: aboutRef
  }));
}