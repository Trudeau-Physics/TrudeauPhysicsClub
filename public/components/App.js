import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
import { About } from './About.js';
import { NavBar } from './NavBar.js';
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "snap-mandatory snap-y"
  }, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Contact, null));
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
console.log(root);
root.render( /*#__PURE__*/React.createElement(App, null));