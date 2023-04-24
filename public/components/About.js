export function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "about",
    className: "snap-center w-screen h-screen flex flex-col justify-center items-center bg-maincolor-800",
    style: {
      padding: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-black text-3xl sm:text-5xl lg:text-8xl flex justify-center items-center w-full h-1/5 lg:h-1/3 duration-700"
  }, "ABOUT US"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 justify-center items-center w-6/7 h-4/5 lg:h-2/3 p-4 gap-2 lg-p-8 lg:gap-8 "
  }, "This club’s ultimate goal is to create a welcoming and safe space in Trudeau, in this planet, where everyone can feel free to share and talk about their ideas and observations about the world. We believe that physics is not only about the mathematical calculations, but also about the nature and philosophy of this world. We are also here to lift each other up, and help each other through difficult times. Anyone can physics."
  )));
}

function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "shadow-2xl transition ease-in-out p-4 flex lg:flex-col justify-between h-full w-full border-2 border-green-50 rounded-2xl box-border transform hover:-translate-y-1 hover:scale-105 hover:bg-opacity-80 hover:shadow-2xl hover:text-slate-900 hover:bg-slate-400 duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:items-center lg:justify-around flex-grow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xl lg:text-3xl lg:text-center"
  })))
}