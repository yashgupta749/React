import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, onclicked }) => {
  return (
    <>
      <div className={styles.itemcontainer}>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            Todoname={item.name}
            Tododate={item.dueDate}
            onclicked={onclicked}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
