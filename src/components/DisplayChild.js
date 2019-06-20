import React from "react";
import PropTypes from "prop-types";

const DisplayChild = ({ value, text }) => {
  return (
    <span>
      <p>{value}</p> <small>{text}</small>
    </span>
  );
};

DisplayChild.defaultProps = {
  value: "Missing numeric value",
  text: "No value provided"
};

DisplayChild.propTypes = {
  func: PropTypes.object,
  text: PropTypes.string
};

export default DisplayChild;
