import React, { useState } from "react";
import styles from "./MainView.module.css";
import SibeBar from "../SideBar/SideBar";
import Modal from "../Modal/Modal";
import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";
import Notification from "../Notification/Notification";

const MainView = () => {
  const [addTodoModalOpen, setAddTodoModalOpen] = useState(false);
  const [openNotif, setOpenNotif] = useState(false);

  function toggleModal() {
    setAddTodoModalOpen(!addTodoModalOpen);
  }

  function showNotif() {
    setOpenNotif(true);
    setTimeout(function () {
      setOpenNotif(false);
    }, 2000);
  }

  const AddTodoModal = (
    <Modal title="Create New Todo">
      <CreateTodoForm closeModal={toggleModal} notification={showNotif} />
    </Modal>
  );

  return (
    <>
      {openNotif && (
        <Notification
          title="Success!!"
          message="Created a todo successfully!!!"
        />
      )}
      {addTodoModalOpen && AddTodoModal}
      <div className={styles.todoContainer}>
        <SibeBar openAddTodoModal={toggleModal} />
        <div></div>
      </div>
    </>
  );
};

export default MainView;
