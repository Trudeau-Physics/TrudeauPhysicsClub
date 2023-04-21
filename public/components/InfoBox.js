export function InfoBox(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex m-2 p-4 pt-6 h-1/2 w-1/2 border-2 border-green-50 rounded-2xl box-border flex-grow duration-700"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-6xl"
  }, props.title), /*#__PURE__*/React.createElement("div", {
    className: "text-2xl"
  }, props.children), /*#__PURE__*/React.createElement("image", {
    src: "something"
  })));
}