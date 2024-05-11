import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMesage";
import { TodoItemsContext } from "./todo-items-store";

function App() {
  const initialtodoItems = [];

  const [todoItems, settodoItems] = useState(initialtodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    settodoItems((currvalue) => {
      const newTodoItems = [
        ...currvalue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const deleteItem = (todoitemName, todoitemDate) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoitemName);
    settodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="Todo-container">
        <AppName></AppName>
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
