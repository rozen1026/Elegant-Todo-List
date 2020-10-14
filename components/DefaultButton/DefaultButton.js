import React from "react";
import styles from "./DefaultButton.module.css";

const DefaultButton = ({ style, buttonName }) => {
  function buttonStyle(style) {
    switch (style) {
      case "default":
        return styles.default;
      default:
        return styles.cancel;
    }
  }

  return (
    <button className={`${styles.button} ${buttonStyle(style)}`}>
      {buttonName}
    </button>
  );
};

export default DefaultButton;
