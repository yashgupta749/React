import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMesage";

function App() {
  const initialtodoItems = [];

  const [todoItems, settodoItems] = useState(initialtodoItems);

  const handlerNewItem = (itemName, itemDueDate) => {
    // using functional update which is used for complex undation in app
    settodoItems((currvalue) => {
      const newTodoItems = [
        ...currvalue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });

    // const newTodoItems = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // settodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoitemName, todoitemDate) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoitemName);
    settodoItems(newTodoItems);
  };
  return (
    <center className="Todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handlerNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onclicked={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
