export function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "about",
    className: "snap-center z-[1] w-screen h-screen flex flex-col items-center bg-cyan-800",
    style: {
      paddingTop: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-black text-3xl sm:text-5xl lg:text-8xl flex justify-center items-center w-3/4 h-1/5 lg:h-1/3 duration-700"
  }, "ABOUT US"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-center items-center w-3/4 h-4/5 lg:h-2/3 p-4 gap-2 lg-p-8 lg:gap-8 "
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
    className: "flex m-2 p-4 h-full w-full border-2 border-green-50 rounded-2xl box-border"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-xl lg:text-3xl"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-2xl"
  }, props.children)));
}