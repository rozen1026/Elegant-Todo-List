import React from "react";
import styles from "./SibeBar.module.css";
import AddTodoButton from "../AddTodoButton/AddTodoButton";

const SibeBar = () => {
  return (
    <div className={styles.sideBar}>
      <AddTodoButton />
    </div>
  );
};

export default SibeBar;
