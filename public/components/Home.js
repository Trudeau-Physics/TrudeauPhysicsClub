import { Hero } from './Hero.js';
import { Contact } from './Contact.js';
export function Home() {
  return /*#__PURE__*/React.createElement("div", {
    className: "snap-mandatory snap-y"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Contact, null));
}