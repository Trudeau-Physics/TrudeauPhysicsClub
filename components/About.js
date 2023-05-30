export function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "about",
    className: " z-[1] text-subtextcol w-screen h-screen min-h-[800px] flex flex-col justify-center items-center ",
    style: {
      paddingTop: '10vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "titlefont text-titlecol text-5xl lg:text-8xl flex justify-center items-center w-full h-1/6 lg:h-1/3 duration-700 drop-shadow-lg shadow-shadowcol"
  }, "ABOUT US"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 w-full h-5/6 lg:h-2/3 p-16 lg:p-24 gap-8 lg:gap-8"
  }, /*#__PURE__*/React.createElement(InfoBox, {
    title: "About Us"
<<<<<<< HEAD
  }, "We believe that physics is not only about the mathematical calculations, but also about the nature and philosophy of this world. This club\u2019s ultimate goal is to create a welcoming and safe space in Trudeau, in this planet, where everyone can feel free to share and talk about their ideas and observations about the world. We are also here to lift each other up, and help each other through difficult times. No one is bad at physics!"), /*#__PURE__*/React.createElement(InfoBox, {
=======
  }, "Trudeau Physics is a community of students, professionals, and enthusiasts passionate about the fascinating world of physics. Our goal is to provide a platform for learning, discussion, and experimentation in physics-related topics. Whether you're interested in astrophysics, quantum mechanics, or anything in between, we welcome you to join us in exploring the wonders of the universe. Through our events, workshops, and activities, we strive to foster a love for physics and inspire the next generation of physicists. Come discover the beauty and complexity of the physical world with us!"), /*#__PURE__*/React.createElement(InfoBox, {
>>>>>>> d58c2e2104018043bef1697dfa75f6798e580777
    title: "What we do"
  }, "1. Hire execs 2. Kick all members 3. Bully Martin"))));
}
function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-opacity-50 bg-subbgcol shadow-2xl transition ease-in-out p-2 flex lg:flex-col justify-center h-full w-full border-2 border-bordercol rounded-2xl box-border md:hover:-translate-y-1 md:hover:scale-105 md:hover:bg-opacity-80 md:hover:shadow-2xl md:hover:text-hovertxtcol md:hover:bg-hoverbgcol duration-200"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col lg:items-center lg:justify-around lg:h-2/3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-3xl lg:text-center"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-base lg:text-xl whitespace-none overflow-y-auto"
  }, props.children)));
}