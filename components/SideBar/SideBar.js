import React from "react";
import styles from "./SibeBar.module.css";
import AddTodoButton from "../AddTodoButton/AddTodoButton";
import TodoList from "../TodoList/TodoList";

const SibeBar = ({ openAddTodoModal }) => {
  return (
    <div className={styles.sideBar}>
      <div className={styles.topSection}>
        <p className={styles.appTitle}>Elegant Todo List</p>
        <AddTodoButton openAddTodoModal={openAddTodoModal} />
      </div>
      <TodoList />
    </div>
  );
};

export default SibeBar;
