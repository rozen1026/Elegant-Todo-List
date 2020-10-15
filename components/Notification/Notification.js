import React from "react";
import styles from "./Notification.module.css";

const Notification = ({ title, message }) => {
  return (
    <div className={`${styles.notifContainer}`}>
      <p className={styles.title}>{title}</p>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
