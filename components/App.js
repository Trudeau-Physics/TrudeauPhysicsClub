import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar.js';
<<<<<<< HEAD
import { Team } from './Team.js';
=======
>>>>>>> d58c2e2104018043bef1697dfa75f6798e580777
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll-smooth snap-mandatory snap-y"
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true
  }, /*#__PURE__*/React.createElement("source", {
    src: "./assets/videos/space2.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "caption"
<<<<<<< HEAD
  }, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(Contact, null))));
=======
  }, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Contact, null))));
>>>>>>> d58c2e2104018043bef1697dfa75f6798e580777
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root);
root.render( /*#__PURE__*/React.createElement(App, null));