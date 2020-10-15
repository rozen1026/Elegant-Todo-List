import React, { useState, useEffect } from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const currentTodos = JSON.parse(localStorage.getItem("todos"));
    if (currentTodos !== null) {
      setTodoList(currentTodos);
    }
  }, []);

  const List = () => {
    if (todoList.length == 0) {
      return <p className={styles.todoItem}>No current todos</p>;
    } else {
      return todoList.map((item, i) => {
        return (
          <div key={i} className={styles.todoItem}>
            <a>{item.todoTitle}</a>
          </div>
        );
      });
    }
  };

  return (
    <div className={styles.todoListContainer}>
      <p className={styles.title}>List of Todos</p>
      <List />
    </div>
  );
};

export default TodoList;
