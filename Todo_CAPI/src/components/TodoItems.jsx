import { useContext } from "react";
import { TodoItemsContext } from "../todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ onclicked }) => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className={styles.itemcontainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          Todoname={item.name}
          Tododate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
