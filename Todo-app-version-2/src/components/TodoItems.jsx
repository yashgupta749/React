import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemcontainer}>
        {todoItems.map((item) => (
          <TodoItem Todoname={item.name} Tododate={item.dueDate}></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
