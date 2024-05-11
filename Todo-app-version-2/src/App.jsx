import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy milk", dueDate: "12/05/2021" },
    { name: "Go to college", dueDate: "12/05/2023" },
  ];
  return (
    <center className="Todo-container">
      <AppName></AppName>
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
