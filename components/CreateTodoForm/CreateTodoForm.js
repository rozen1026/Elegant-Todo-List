import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import DefaultButton from "../DefaultButton/DefaultButton";
import styles from "./CreateTodoForm.module.css";

const CreateTodoForm = ({ closeModal, notification }) => {
  const { register, handleSubmit, errors } = useForm();
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const currentTodos = JSON.parse(localStorage.getItem("todos"));
    if (currentTodos !== null) {
      setFormData(currentTodos);
    }
  }, []);

  const onSubmit = (data) => {
    const toStoreData = [...formData, data];
    setFormData(toStoreData);
    localStorage.setItem("todos", JSON.stringify(toStoreData));
    closeModal();
    notification();
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          name="todoTitle"
          type="text"
          ref={register({ required: true })}
          className={styles.input}
          placeholder="Add Title"
        />
        {errors.todoTitle && (
          <span className={styles.error}>This field is required</span>
        )}
        <textarea
          name="todoDescription"
          className={styles.textarea}
          ref={register({ required: true })}
          placeholder="Add Description"
        />
        {errors.todoDescription && (
          <span className={styles.error}>This field is required</span>
        )}
        <div className={styles.formButtonContainer}>
          <DefaultButton
            buttonName="cancel"
            onClick={closeModal}
            type="button"
            onClick={closeModal}
          />
          <DefaultButton buttonName="Add Todo" type="submit" style="default" />
        </div>
      </form>
    </div>
  );
};

export default CreateTodoForm;
