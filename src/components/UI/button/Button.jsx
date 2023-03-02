import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ outline, disabled, text }) => {
  const backgroundColor = outline ? "transparent" : disabled ? "#E4E4E4" : "#27AE60";
  const textColor = outline ? "white" : disabled ? "#696969" : "white";
  const borderColor = disabled ? "#E4E4E4" : "#427e3a";

// const Button = ({ outline, disabled, text, buttonColor }) => {
//   const backgroundColor = outline
//     ? "transparent"
//     : disabled
//     ? "#E4E4E4"
//     : "#427e3a";
//   const textColor = outline ? buttonColor : disabled ? "#696969" : "white";
//   const borderColor = disabled ? "#E4E4E4" : buttonColor;


  const styles = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderColor: borderColor,
  };

  return (
    <button
      className={
        disabled
          ? "button disabled_btn"
          : outline
          ? "button outline_btn"
          : "button normal_btn"
      }
      style={styles}
      disabled={disabled ? true : false}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  outline: false,
  disabled: false,
  text: "Button",
  buttonColor: "#427e3a",
};

Button.propTypes = {
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  buttonColor: PropTypes.string,
};

export default Button;