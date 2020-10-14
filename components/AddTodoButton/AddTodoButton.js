import React from "react";
import styles from "./AddTodoButton.module.css";
import { FaPlus } from "react-icons/fa";

const AddTodoButton = () => {
  return (
    <div className={styles.buttonContainer}>
      <p className={styles.buttonText}>Add New Todo</p>
      <p className={styles.icon}>
        <FaPlus />
      </p>
    </div>
  );
};

export default AddTodoButton;
