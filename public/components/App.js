import { Home } from './Home.js';
function App() {
  const Route = ReactRouterDOM.Route;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ReactRouterDOM.HashRouter, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    component: () => /*#__PURE__*/React.createElement(Home, null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "light x1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "light x2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "light x3"
  }), /*#__PURE__*/React.createElement("div", {
    className: "light x4"
  }), /*#__PURE__*/React.createElement("div", {
    className: "light x5"
  }), /*#__PURE__*/React.createElement("div", {
    className: "light x6"
  }), /*#__PURE__*/React.createElement("div", {
    className: "light x7"
  }), /*#__PURE__*/React.createElement("div", {
    className: "light x8"
  }), /*#__PURE__*/React.createElement("div", {
    className: "light x9"
  })));
}
var locked = false;
var container = document.getElementById('app');
var animated = document.querySelectorAll('light');
window.addEventListener('scroll', function () {
  for (let i = 0; i < 9; i++) {
    console.log("A");
    animated[i].style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }
});
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render( /*#__PURE__*/React.createElement(App, null));