import React from "react";
import styles from "./AddTodoButton.module.css";
import { FaPlus } from "react-icons/fa";

const AddTodoButton = ({ openAddTodoModal }) => {
  return (
    <div className={styles.buttonContainer} onClick={openAddTodoModal}>
      <p className={styles.buttonText}>Add New Todo</p>
      <p className={styles.icon}>
        <FaPlus />
      </p>
    </div>
  );
};

export default AddTodoButton;
