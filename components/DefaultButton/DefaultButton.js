import React from "react";
import styles from "./DefaultButton.module.css";

const DefaultButton = ({ style, buttonName, onClick, type }) => {
  function buttonStyle(style) {
    switch (style) {
      case "default":
        return styles.default;
      default:
        return styles.cancel;
    }
  }

  return (
    <button
      className={`${styles.button} ${buttonStyle(style)}`}
      type={type}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default DefaultButton;
