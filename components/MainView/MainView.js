import React from "react";
import styles from "./MainView.module.css";
import SibeBar from "../SideBar/SideBar";

const MainView = () => {
  return (
    <div className={styles.todoContainer}>
      <SibeBar />
      <div></div>
    </div>
  );
};

export default MainView;
