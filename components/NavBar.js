export function NavBar(props) {
  const handleClick = id => {
    console.log(id);
    let page = document.querySelector(id);
    page.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed top-0 w-full flex justify-around md:justify-between px-2 md:px-24 py-2 duration-700",
    style: {
      height: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex justify-between items-center px-2 md:w-1/3 text-orange-500 duration-700"
  }, /*#__PURE__*/React.createElement("a", {
    className: "",
    href: "/"
  }, "LOGO")), /*#__PURE__*/React.createElement("ul", {
    className: "flex justify-around items-center mt-0 w-2/3 bg-clip-text bg-gradient-to-r"
  }, /*#__PURE__*/React.createElement("li", {
    onClick: () => handleClick("#home"),
    className: "flex items-center my-2 px-2 md:px-8 py-0 text-base sm:text-xl rounded hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-700 h-full"
  }, /*#__PURE__*/React.createElement("div", null, " HOME")), /*#__PURE__*/React.createElement("li", {
    onClick: () => handleClick("#about"),
    className: "flex items-center my-2 px-2 md:px-8 py-0 text-base sm:text-xl rounded hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-700 h-full"
  }, /*#__PURE__*/React.createElement("div", null, " ABOUT")), /*#__PURE__*/React.createElement("li", {
    onClick: () => handleClick("#contact"),
    className: "flex items-center my-2 px-2 md:px-8 py-0 text-base sm:text-xl rounded hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-700 h-full"
  }, /*#__PURE__*/React.createElement("div", null, " CONTACT"))));
}
// const root = ReactDOM.createRoot(document.querySelector('#navbar'));
// root.render(<Navbar />);