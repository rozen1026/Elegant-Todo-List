import React from "react";
import styles from "./SibeBar.module.css";
import AddTodoButton from "../AddTodoButton/AddTodoButton";

const SibeBar = ({ openAddTodoModal }) => {
  return (
    <div className={styles.sideBar}>
      <AddTodoButton openAddTodoModal={openAddTodoModal} />
    </div>
  );
};

export default SibeBar;
