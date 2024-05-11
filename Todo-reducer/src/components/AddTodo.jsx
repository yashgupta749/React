import { useContext, useState } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../todo-items-store";

function AddTodo() {
  const [todoName, settodoName] = useState("");
  const [dueDate, setdueDate] = useState("");
  const { addNewItem } = useContext(TodoItemsContext);

  const handleNameChange = (event) => {
    settodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    event.preventDefault();
    addNewItem(todoName, dueDate);
    settodoName("");
    setdueDate("");
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
