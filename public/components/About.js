export function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "about",
    className: "snap-center w-screen h-screen flex flex-col justify-center items-center bg-cyan-800",
    style: {
      padding: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-black text-3xl sm:text-5xl lg:text-8xl flex justify-center items-center w-full h-1/5 lg:h-1/3 duration-700"
  }, "ABOUT US"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-center items-center w-6/7 h-4/5 lg:h-2/3 p-4 gap-2 lg-p-8 lg:gap-8 "
  }, /*#__PURE__*/React.createElement(InfoBox, {
    title: "Join The Discord!"
  }, "ASDASD"), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Join The Classroom!"
  }, "ASDASD"), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Follow Our Instagram!"
  }, "ASDASD"), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Email Us!"
  }, "ASDASD"))));
}
function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "relative transition ease-in-out flex p-4 h-full w-full border-2 border-green-50 rounded-2xl box-border transform hover:-translate-y-1 hover:scale-105 hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-700"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xl lg:text-3xl"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-2xl"
  }, props.children)));
}