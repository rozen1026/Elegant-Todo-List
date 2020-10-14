import React, { useState } from "react";
import styles from "./MainView.module.css";
import SibeBar from "../SideBar/SideBar";
import Modal from "../Modal/Modal";
import DefaultButton from "../DefaultButton/DefaultButton";

const MainView = () => {
  const [addTodoModalOpen, setAddTodoModalOpen] = useState(false);

  function toggleModal() {
    setAddTodoModalOpen(!addTodoModalOpen);
  }

  const ModalButtons = () => {
    return (
      <div className={styles.modalButtonContainer}>
        <DefaultButton buttonName="cancel" click={toggleModal} />
        <DefaultButton style="default" buttonName="Add Todo" />
      </div>
    );
  };

  const AddTodoModal = (
    <Modal title="Create New Todo">
      awoeawe
      <ModalButtons />
    </Modal>
  );

  return (
    <>
      {addTodoModalOpen && AddTodoModal}
      <div className={styles.todoContainer}>
        <SibeBar openAddTodoModal={toggleModal} />
        <div></div>
      </div>
    </>
  );
};

export default MainView;
