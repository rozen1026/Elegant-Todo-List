import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, title }) => {
  return (
    <div className={styles.background}>
      <div className={styles.modalContainer}>
        <div className={styles.topSection}>
          <p className={styles.title}>{title}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
