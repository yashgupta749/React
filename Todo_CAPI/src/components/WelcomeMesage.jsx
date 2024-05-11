import { useContext } from "react";
import { TodoItemsContext } from "../todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, nem</p>
    )
  );
};
export default WelcomeMessage;
