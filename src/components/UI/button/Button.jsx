import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/arrow.png"

const Button = ({
  outline,
  disabled,
  text,
  buttonColor,
  customStyle, // to add your own styles to the button
  path, // the path where you want to navigate on the click of the button
  showArrow, // to show a arrow svg in the button
}) => {
  const navigate = useNavigate();
  const backgroundColor = outline
    ? "transparent"
    : disabled
    ? "#E4E4E4"
    : "#1A589B";
  const textColor = outline ? buttonColor : disabled ? "#696969" : "white";
  const borderColor = disabled ? "#E4E4E4" : buttonColor;

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
      style={{ ...styles, ...customStyle }}
      disabled={disabled ? true : false}
      onClick = {() => navigate(path)}
    >
      {text}
      {showArrow && <img className="arrow" src={arrow} alt="arrow"/>}
    </button>
  );
};

Button.defaultProps = {
  outline: false,
  disabled: false,
  text: "Button",
  buttonColor: "#1A589B",
  customStyle: {},
  path: "",
  showArrow: false,
};

Button.propTypes = {
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  buttonColor: PropTypes.string,
  customStyle: PropTypes.object,
  path: PropTypes.string,
  showArrow: PropTypes.bool,
};

export default Button;