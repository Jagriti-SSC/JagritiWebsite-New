import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ outline, disabled, text }) => {
  const backgroundColor = outline ? "white" : disabled ? "#E4E4E4" : "#427e3a";
  const textColor = outline ? "#427e3a" : disabled ? "#696969" : "white";
  const borderColor = disabled ? "#E4E4E4" : "#427e3a";

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
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  outline: false,
  disabled: false,
  text: "Button",
};

Button.propTypes = {
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

export default Button;
