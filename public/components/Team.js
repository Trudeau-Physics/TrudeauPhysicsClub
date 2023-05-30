export function Team() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "team",
    className: " z-[1] text-subtextcol w-screen h-screen min-h-[800px] flex flex-col justify-center items-center ",
    style: {
      paddingTop: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "titlefont text-titlecol text-5xl lg:text-8xl flex justify-center items-center w-full h-1/6 lg:h-1/3 duration-700 drop-shadow-lg shadow-shadowcol"
  }, "EXECS"), /*#__PURE__*/React.createElement("div", {
    className: "flex-row flex whitespace-none overflow-x-auto w-5/6 h-5/6 lg:h-2/3 p-8 lg:pt-12 lg:pb-12 gap-8 lg:gap-8 border-2 border-bordercol rounded-2xl"
  }, /*#__PURE__*/React.createElement(InfoBox, null), /*#__PURE__*/React.createElement(InfoBox, null), /*#__PURE__*/React.createElement(InfoBox, null), /*#__PURE__*/React.createElement(InfoBox, null), /*#__PURE__*/React.createElement(InfoBox, null), /*#__PURE__*/React.createElement(InfoBox, null))));
}
function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-opacity-50 bg-subbgcol shadow-2xl transition ease-in-out lg:pl-5 lg:pr-5 p-5 flex lg:flex-col justify-center lg:w-1/4 h-full w-full border-2 border-bordercol rounded-2xl box-border md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"));
}