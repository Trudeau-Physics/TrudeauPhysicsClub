import { Home } from './Home.js';
function App() {
  const Route = ReactRouterDOM.Route;
  return /*#__PURE__*/React.createElement(ReactRouterDOM.HashRouter, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    component: () => /*#__PURE__*/React.createElement(Home, null)
  }));
}
const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render( /*#__PURE__*/React.createElement(App, null));