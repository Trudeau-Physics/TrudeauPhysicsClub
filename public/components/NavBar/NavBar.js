import { NavItems } from "./NavItems.js";
export function NavBar(props) {
  const handleClick = id => {
    console.log(id);
    let page = document.querySelector(id);
    page.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "lg:fixed lg:top-0 w-full lg:flex justify-between h-112 lg:h-20 xl:px-24 px-10 py-2 duration-700"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center w-full lg:w-1/3 text-orange-500 duration-700"
  }, /*#__PURE__*/React.createElement("a", {
    className: "w-2/5 lg:w-44 duration-700",
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    className: "rounded-3xl",
    src: '../../assets/logo.png'
  }))), /*#__PURE__*/React.createElement("ul", {
    className: "lg:flex justify-around mt-5 items-center lg:mt-0 lg:w-2/3 bg-clip-text bg-gradient-to-r"
  }, /*#__PURE__*/React.createElement("li", {
    onClick: () => handleClick("#home"),
    className: "flex items-center my-2 px-2 py-2 xl:px-8 lg:py-0 text-xl rounded hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-500 h-full"
  }, /*#__PURE__*/React.createElement("div", null, " HOME")), /*#__PURE__*/React.createElement("li", {
    onClick: () => handleClick("#about"),
    className: "flex items-center my-2 px-2 py-2 xl:px-8 lg:py-0 text-xl rounded hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-500 h-full"
  }, /*#__PURE__*/React.createElement("div", null, " ABOUT")), /*#__PURE__*/React.createElement("li", {
    onClick: () => handleClick("#contact"),
    className: "flex items-center my-2 px-2 py-2 xl:px-8 lg:py-0 text-xl rounded hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-500 h-full"
  }, /*#__PURE__*/React.createElement("div", null, " CONTACT"))));
}
// const root = ReactDOM.createRoot(document.querySelector('#navbar'));
// root.render(<Navbar />);