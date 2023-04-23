export function Contact() {
  return /*#__PURE__*/React.createElement("div", {
    id: "contact",
    className: "snap-center w-screen h-screen flex flex-col justify-around items-center bg-cyan-800",
    style: {
      padding: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-extrabold text-center text-3xl sm:text-5xl lg:text-8xl duration-700"
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-center items-center w-full h-4/5 lg:h-3/5 p-4 gap-2 lg-p-8 lg:gap-8 "
  }, /*#__PURE__*/React.createElement(InfoBox, {
    title: "Join The Discord!",
    iconUrl: "./assets/discord.svg"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://discord.gg/CeGpsn3X",
    target: "_blank",
    className: "whitespace-nowrap"
  }, "Code: CeGpsn3X")), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Join The Classroom!",
    iconUrl: "./assets/google-classroom.svg"
  }, /*#__PURE__*/React.createElement("a", {
    href: "trudeauphysics@gmail.com",
    target: "_blank",
    className: "whitespace-nowrap"
  }, "Code: y53xknn")), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Follow Our Instagram!",
    iconUrl: "./assets/discord.svg"
  }, /*#__PURE__*/React.createElement("a", {
    href: "trudeauphysics@gmail.com",
    target: "_blank"
  }, "@trudeauphysics")), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Email Us!",
    iconUrl: "./assets/discord.svg"
  }, /*#__PURE__*/React.createElement("a", {
    href: "trudeauphysics@gmail.com",
    target: "_blank",
    className: "break-all text-center"
  }, "trudeauphysics@gmail.com"))));
}
function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between h-full w-full border-2 border-green-50 rounded-2xl box-border transform hover:-translate-y-1 hover:scale-105 hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:items-center lg:justify-around flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xl lg:text-3xl lg:text-center"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-xl underline"
  }, props.children)), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-center flex-col lg:flex-row lg:w-full"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.iconUrl,
    alt: "Icon",
    className: "w-16 h-16 hover:h-20 hover:w-20 lg:w-24 lg:h-24 lg:hover:h-36 lg:hover:w-36 duration-100"
  })));
}