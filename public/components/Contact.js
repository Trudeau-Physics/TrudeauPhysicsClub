export function Contact() {
  return /*#__PURE__*/React.createElement("div", {
    id: "contact",
    className: "z-[1] text-subtextcol w-screen h-screen min-h-[800px] flex-col justify-around items-center ",
    style: {
      paddingTop: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "titlefont text-titlecol text-5xl lg:text-8xl flex justify-center items-center w-full h-1/6 lg:h-1/3 duration-700 drop-shadow-lg shadow-shadowcol"
  }, "CONTACT"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-center items-center w-full h-4/5 lg:h-3/5 p-16 lg:p-24 gap-8 lg:gap-8"
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
    iconUrl: "./assets/instagram.svg"
  }, /*#__PURE__*/React.createElement("a", {
    href: "trudeauphysics@gmail.com",
    target: "_blank"
  }, "@trudeauphysics")), /*#__PURE__*/React.createElement(InfoBox, {
    title: "Email Us!",
    iconUrl: "./assets/email.svg"
  }, /*#__PURE__*/React.createElement("a", {
    href: "trudeauphysics@gmail.com",
    target: "_blank",
    className: "break-all text-center"
  }, "trudeauphysics@gmail.com"))));
}
function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between min-h-auto min-w-auto h-full w-full border-2 border-bordercol rounded-2xl box-border transform hover:-translate-y-1 hover:scale-105 hover:bg-opacity-80 hover:shadow-2xl hover:text-hovertxtcol hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:items-center lg:justify-around flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-2xl lg:text-2xl lg:text-center"
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