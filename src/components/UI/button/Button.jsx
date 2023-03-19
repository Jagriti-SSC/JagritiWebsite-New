import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import arrow from "../../../assets/arrow.webp";

const Button = ({
  outline,
  disabled,
  text,
  buttonColor,
  customStyle, // to add your own styles to the button
  path, // the path where you want to navigate on the click of the button
  showArrow, // to show a arrow svg in the button
  onPress,
}) => {
  const navigate = useNavigate();
  const curr = useLocation();
  let backgroundColor = outline
    ? "transparent"
    : disabled
    ? "#E4E4E4"
    : "#1A589B";
  let textColor = outline ? buttonColor : disabled ? "#696969" : "white";
  let borderColor = disabled ? "#E4E4E4" : buttonColor;

  if (curr.pathname === "/ca") {
      backgroundColor = "#1A589B";
      textColor = "white";
      borderColor = "#1A589B";
  }

  const styles = {
    backgroundColor: backgroundColor,
    color: textColor,
    borderColor: borderColor,
    justifyContent: showArrow ? "space-between" : "center",
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
      onClick={() => {
        onPress();
        navigate(path);
      }}
    >
      {text}
      {showArrow && <img className="arrow" src={arrow} alt="arrow" />}
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
  onPress: () => {},
};

Button.propTypes = {
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  buttonColor: PropTypes.string,
  customStyle: PropTypes.object,
  path: PropTypes.string,
  showArrow: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
